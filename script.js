const chance = document.getElementById("chance");
const outerProgress = document.getElementById("outerProgress");
const percentText = document.getElementById("percentText");
const chanceText = document.getElementById("chanceText");
const rotator = document.getElementById("rotator");
const spinButton = document.getElementById("spinButton");
const message = document.getElementById("message");
const center = document.getElementById("center");
const balanceAmount = document.getElementById("balanceAmount");
const topUpButton = document.getElementById("topUpButton");
const inventoryGrid = document.getElementById("inventoryGrid");
const moneyModal = document.getElementById("moneyModal");
const moneyInput = document.getElementById("moneyInput");
const saveMoneyButton = document.getElementById("saveMoneyButton");
const closeMoneyButton = document.getElementById("closeMoneyButton");

let balance = 10000.00;
let rotation = 0;
let spinning = false;
let percentValue = 1.13;
let startAngle = 0;
let endAngle = 0;
let percentAnimation = null;
let audioCtx = null;
let lastTickAngle = 0;
const tickEveryDegrees = 30;

function playTick(volume = 0.08) {
  if (!audioCtx) {
    audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  }

  const osc = audioCtx.createOscillator();
  const gain = audioCtx.createGain();

  osc.type = "square";
  osc.frequency.value = 850;

  gain.gain.value = volume;

  osc.connect(gain);
  gain.connect(audioCtx.destination);

  osc.start();

  gain.gain.exponentialRampToValueAtTime(
    0.0001,
    audioCtx.currentTime + 0.025
  );

  osc.stop(audioCtx.currentTime + 0.025);
}

function playSpinTick() {
  if (Math.abs(rotation - lastTickAngle) >= tickEveryDegrees) {
    playTick();
    lastTickAngle = rotation;
  }
}


let selectedInputSkins = [];
let selectedTargetSkin = null;

function getInputValue(){
  return selectedInputSkins.reduce((sum, s) => sum + s.price, 0);
}

function skinStyle(item){
  return `--skin-bg:${item.color}; --skin-main:${item.main}; --skin-dark:${item.dark};`;
}

function updateBalance(){
  balanceAmount.textContent = balance.toFixed(2);
}



function drawCircle(percent){
  percentValue = Math.max(0.01, Math.min(percent, 95));
  percentText.textContent = percentValue.toFixed(2) + "%";

  if(percentValue < 40) chanceText.textContent = "low chance";
  else if(percentValue < 70) chanceText.textContent = "medium chance";
  else chanceText.textContent = "high chance";

  const degrees = percentValue / 100 * 360;
  startAngle = 180 - degrees / 2;
  endAngle = 180 + degrees / 2;

  const gradient = `
    conic-gradient(
      #151515 0deg,
      #151515 ${startAngle}deg,
      #ffd800 ${startAngle}deg,
      #ffb000 ${180 - degrees * .15}deg,
      #ff5a00 ${180 - degrees * .05}deg,
      #ff2b00 180deg,
      #ff5a00 ${180 + degrees * .05}deg,
      #ffb000 ${180 + degrees * .15}deg,
      #ffd800 ${endAngle}deg,
      #151515 ${endAngle}deg,
      #151515 360deg
    )
  `;

  chance.style.background = gradient;
  outerProgress.style.background = gradient;
}

function animateCircleTo(targetPercent){
  if(percentAnimation) cancelAnimationFrame(percentAnimation);

  const start = percentValue;
  const change = targetPercent - start;
  const duration = 600;
  const startTime = performance.now();

  function animate(time){
    const progress = Math.min((time - startTime) / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    drawCircle(start + change * eased);

    if(progress < 1){
      percentAnimation = requestAnimationFrame(animate);
    }
  }

  percentAnimation = requestAnimationFrame(animate);
}

function setButtonActive(target){
  document.querySelectorAll(".buttons button").forEach(btn => {
    btn.classList.remove("active");

    if(btn.dataset.percent === String(target)){
      btn.classList.add("active");
    }

    if(btn.dataset.multi === String(target)){
      btn.classList.add("active");
    }
  });
}

function selectTargetSkin(shopSkin){
  if(spinning) return;

  const inputValue = getInputValue();

  if(inputValue <= 0){
    message.textContent = "Erst Einsatz-Skin auswählen.";
    return;
  }

  if(shopSkin.price <= inputValue){
    message.textContent = "Ziel-Skin muss teurer sein.";
    return;
  }

  selectedTargetSkin = {...shopSkin};

 const targetPercent = (getInputValue() / selectedTargetSkin.price) * 100;

if (targetPercent > 75) {
    message.textContent = "Maximal 75% Chance erlaubt.";
    return;
}
  setButtonActive(null);
  animateCircleTo(targetPercent);
  renderMarket();
  renderUpgradeFields();

  message.textContent = `Ziel ausgewählt: ${shopSkin.name}`;
}

function setMultiplier(multiplier){
  if(spinning) return;

  if(getInputValue() <= 0){
    message.textContent = "Erst Einsatz-Skin auswählen.";
    return;
  }

  const imperfect = 1 + (Math.random() * 0.08 - 0.04);
  const targetPrice = getInputValue() * multiplier * imperfect;
  const chancePercent = (getInputValue() / targetPrice) * 100;

  selectedTargetSkin = skin(
    `${multiplier.toFixed(1)}x Upgrade`,
    targetPrice,
    "#ffd800",
    "#ff5a00"
  );

  setButtonActive(multiplier);
  animateCircleTo(chancePercent);
  renderMarket();
  renderUpgradeFields();
}

function setPercent(percent){
  if(spinning) return;

  if(getInputValue() <= 0){
    message.textContent = "Erst Einsatz-Skin auswählen.";
    return;
  }

  const imperfect = 1 + (Math.random() * 0.08 - 0.04);
  const targetPrice = (getInputValue() / (percent / 100)) * imperfect;
  const realChance = (getInputValue() / targetPrice) * 100;

  selectedTargetSkin = skin(
    `${realChance.toFixed(2)}% Upgrade`,
    targetPrice,
    "#ffd800",
    "#ff5a00"
  );

  setButtonActive(percent);
  animateCircleTo(realChance);
  renderMarket();
  renderUpgradeFields();
}

function renderInventory(){
  inventoryGrid.innerHTML = "";

  mySkins.forEach((skinItem, index) => {
    const card = document.createElement("div");
    card.className = "skin-card";

    if(selectedInputSkins.includes(skinItem)){
      card.classList.add("selected");
    }

    card.innerHTML = `
      <div class="skin-color model-${skinItem.model}" style="${skinStyle(skinItem)}"></div>
      <div>
        <div class="skin-name">${skinItem.name}</div>
        <div class="skin-price">${skinItem.price.toFixed(2)} ⌘</div>
      </div>
      <button class="sell-btn">Verkaufen</button>
    `;

    card.addEventListener("click", () => {
      if(spinning) return;

      if(selectedInputSkins.includes(skinItem)){
        selectedInputSkins = selectedInputSkins.filter(s => s !== skinItem);
      }else{
        selectedInputSkins.push(skinItem);
      }

      renderInventory();
      renderMarket();
      renderUpgradeFields();

      if(selectedTargetSkin){
        animateCircleTo((getInputValue() / selectedTargetSkin.price) * 100);
      }else{
        animateCircleTo(1.13);
      }

      message.textContent = `${selectedInputSkins.length} Skin(s) als Einsatz ausgewählt`;
    });

    card.querySelector(".sell-btn").addEventListener("click", e => {
      e.stopPropagation();
      if(spinning) return;

      balance += skinItem.price;
      mySkins.splice(index, 1);
      selectedInputSkins = selectedInputSkins.filter(s => s !== skinItem);

      updateBalance();
      renderInventory();
      renderUpgradeFields();
      message.textContent = `${skinItem.name} verkauft`;
    });

    inventoryGrid.appendChild(card);
  });
}

function renderMarket(){
  let marketGrid = document.getElementById("marketGrid");

  if(!marketGrid){
  const section = document.createElement("section");
  section.className = "inventory-section";
  section.innerHTML = `
    <div class="inventory-header">
      <h2>Skin Shop</h2>
      <p class="shop-hint">
        Skin anklicken = als Ziel auswählen, Kaufen = kaufen
      </p>
    </div>

    <div class="shop-filter">
      <input type="number" id="minPrice" placeholder="Min Preis">
      <input type="number" id="maxPrice" placeholder="Max Preis">
    </div>

    <div class="inventory-grid" id="marketGrid"></div>
  `;

  document.querySelector(".skin-area").appendChild(section);

  marketGrid = document.getElementById("marketGrid");

  document.getElementById("minPrice").addEventListener("input", renderMarket);
  document.getElementById("maxPrice").addEventListener("input", renderMarket);
}

  marketGrid.innerHTML = "";
  const min = Number(document.getElementById("minPrice")?.value) || 0;
  const max = Number(document.getElementById("maxPrice")?.value) || Infinity;

  marketSkins
    .sort((a, b) => a.price - b.price)
    .filter(shopSkin => shopSkin.price >= min && shopSkin.price <= max)
    .forEach(shopSkin => {
    const card = document.createElement("div");
    card.className = "skin-card";

    if(selectedTargetSkin && selectedTargetSkin.name === shopSkin.name){
      card.classList.add("selected-target");
    }

    card.innerHTML = `
     <div class="skin-color model-${shopSkin.model}" style="${skinStyle(shopSkin)}"></div>
      <div>
        <div class="skin-name">${shopSkin.name}</div>
        <div class="skin-price">${shopSkin.price.toFixed(2)} ⌘</div>
      </div>
      <button class="buy-btn">Kaufen</button>
    `;

    card.addEventListener("click", () => {
      selectTargetSkin(shopSkin);
    });

    card.querySelector(".buy-btn").addEventListener("click", e => {
      e.stopPropagation();

      if(balance < shopSkin.price){
        message.textContent = "Nicht genug Coins.";
        return;
      }

      balance -= shopSkin.price;
      mySkins.push({...shopSkin});

      updateBalance();
      renderInventory();
      message.textContent = `${shopSkin.name} gekauft`;
    });

    marketGrid.appendChild(card);
  });
}

function renderUpgradeFields(){
  const leftBox = document.querySelector(".side:first-child");
  const rightBox = document.querySelector(".side:last-child");

  ["glow","weapon","chevrons"].forEach(cls => {
    leftBox.querySelector("." + cls).style.display = selectedInputSkins.length ? "none" : "block";
    rightBox.querySelector("." + cls).style.display = selectedTargetSkin ? "none" : "block";
  });

  removeOldPreview(leftBox);
  removeOldPreview(rightBox);

  if(selectedInputSkins.length){
    const fakeInput = skin(
      `${selectedInputSkins.length} Skins`,
      getInputValue(),
      "#4b8cff",
      "#1d3557"
    );

    leftBox.appendChild(createPreview(fakeInput, "Einsatz"));
  }

  if(selectedTargetSkin){
    rightBox.appendChild(createPreview(selectedTargetSkin, "Ziel"));
  }
}

function removeOldPreview(box){
  const old = box.querySelector(".selected-preview");
  if(old) old.remove();
}

function createPreview(item, title){
  const div = document.createElement("div");
  div.className = "selected-preview";

  div.innerHTML = `
    <div class="skin-color big model-${item.model}" style="${skinStyle(item)}"></div>
    <h3>${title}</h3>
    <div class="skin-name">${item.name}</div>
    <div class="preview-price">${item.price.toFixed(2)} ⌘</div>
  `;

  return div;
}
function spin() {
  if (spinning) return;

  if (selectedInputSkins.length === 0) {
    message.textContent = "Wähle zuerst mindestens einen Einsatz-Skin.";
    return;
  }

  if (!selectedTargetSkin) {
    message.textContent = "Wähle zuerst einen Ziel-Skin.";
    return;
  }

  spinning = true;
  spinButton.disabled = true;
  spinButton.textContent = "Dreht...";
  message.textContent = "";
  center.classList.remove("win");

  // Pfeil zurück in die Mitte
  rotation = 0;
  rotator.style.transform = `rotate(0deg)`;
  lastTickAngle = 0;

  // Startgeschwindigkeit
  let speed = 4;
  let maxSpeed = 20 + Math.random() * 15;

  // Beschleunigen
  let accelerating = true;

  function animate() {

    if (accelerating) {

      speed += 1.1;

      if (speed >= maxSpeed) {
        accelerating = false;
      }

    } else {

      // Langes Ausrollen
      speed *= 0.988;

    }

    const tickDelay = Math.max(8, 120 - speed * 1.6);

   

    rotation += speed;
    playSpinTick();
    rotator.style.transform = `rotate(${rotation}deg)`;

    if (speed > 0.08) {

      requestAnimationFrame(animate);

    } else {

      spinning = false;
      spinButton.disabled = false;
      spinButton.textContent = "⌃ Upgrade";

      checkWin();

      // Nach dem Upgrade wieder mittig
     rotation = Math.random() * 360;
    rotator.style.transform = `rotate(${rotation}deg)`;
    lastTickAngle = rotation;
    }
  }

  requestAnimationFrame(animate);
}
function checkWin(){
  const finalAngle = ((rotation % 360) + 360) % 360;
  const pointerAngle = (180 - finalAngle + 360) % 360;
  const won = pointerAngle >= startAngle && pointerAngle <= endAngle;

  selectedInputSkins.forEach(inputSkin => {
    mySkins = mySkins.filter(s => s !== inputSkin);
  });

  if(won){
    mySkins.push({...selectedTargetSkin});
    message.textContent = `UPGRADE! Du hast ${selectedTargetSkin.name} bekommen.`;
    center.classList.add("win");
    selectedTargetSkin = null;
  }else{
    message.textContent = `FAILED! Einsatz-Skins sind weg. Ziel bleibt ausgewählt.`;
  }

  selectedInputSkins = [];

  renderInventory();
  renderMarket();
  renderUpgradeFields();
  animateCircleTo(1.13);
}

function setBalance(){
  moneyInput.value = balance.toFixed(2);
  moneyModal.classList.add("active");
}

document.querySelectorAll(".buttons button").forEach(btn => {
  btn.addEventListener("click", () => {
    const text = btn.textContent.trim();

    if(text === "x2") setMultiplier(2);
    if(text === "x4") setMultiplier(4);
    if(text === "x8") setMultiplier(8);

    if(btn.dataset.percent){
      setPercent(Number(btn.dataset.percent));
    }
  });
});

saveMoneyButton.addEventListener("click", () => {
  const value = Number(moneyInput.value.replace(",", "."));

  if(isNaN(value) || value < 0){
    alert("Gültige Zahl eingeben.");
    return;
  }

  balance = value;
  updateBalance();
  moneyModal.classList.remove("active");
});

closeMoneyButton.addEventListener("click", () => {
  moneyModal.classList.remove("active");
});

moneyModal.addEventListener("click", e => {
  if(e.target === moneyModal){
    moneyModal.classList.remove("active");
  }
});

spinButton.addEventListener("click", spin);
topUpButton.addEventListener("click", setBalance);


updateBalance();
renderInventory();
renderMarket();
renderUpgradeFields();
drawCircle(1.13);