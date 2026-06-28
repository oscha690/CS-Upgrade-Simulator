function skin(name, price, c1, c2) {

    let model = "rifle";

    const lower = name.toLowerCase();

    if (
        lower.includes("knife") ||
        lower.includes("karambit") ||
        lower.includes("bayonet") ||
        lower.includes("talon") ||
        lower.includes("butterfly") ||
        lower.includes("bowie") ||
        lower.includes("gut") ||
        lower.includes("skeleton")
    )
        model = "knife";

    else if (
        lower.includes("awp") ||
        lower.includes("ssg")
    )
        model = "sniper";

    else if (
        lower.includes("glock") ||
        lower.includes("usp") ||
        lower.includes("p250") ||
        lower.includes("deagle") ||
        lower.includes("desert") ||
        lower.includes("five")
    )
        model = "pistol";

    else if (
        lower.includes("mp") ||
        lower.includes("mac") ||
        lower.includes("ump")
    )
        model = "smg";

    return {
        name,
        price,
        color: `linear-gradient(135deg,${c1},${c2})`,
        main: c1,
        dark: c2,
        model
    };
}

let mySkins = [
    skin("P250 Sand Dune", 8.42, "#4b8cff", "#1d3557"),
    skin("MP9 Ocean Foam", 12.37, "#4b8cff", "#00b4d8"),
    skin("Glock Blue Crackle", 18.93, "#4b8cff", "#123c69")
];

let marketSkins = [
    skin("Nova Polar Mesh", 8.42, "#4b8cff", "#1d3557"),
    skin("P2000 Oceanic", 11.18, "#4b8cff", "#005f99"),
    skin("MP7 Cirrus", 14.73, "#4b8cff", "#2f80ed"),
    skin("Galil Blue Titanium", 19.64, "#4b8cff", "#1f4e79"),
    skin("UMP Arctic Wolf", 26.51, "#4b8cff", "#222"),

    skin("FAMAS Pulse", 34.29, "#7b61ff", "#2b1055"),
    skin("MAC-10 Neon Core", 42.84, "#7b61ff", "#ff2bd6"),
    skin("Five-SeveN Violet", 57.39, "#7b61ff", "#3a0ca3"),
    skin("SSG 08 Abyss", 74.12, "#7b61ff", "#001233"),
    skin("AUG Momentum", 96.75, "#7b61ff", "#ff006e"),

    skin("AK-47 Elite Build", 128.44, "#ff4fd8", "#222"),
    skin("M4A1-S Decimator", 176.83, "#ff4fd8", "#3a0ca3"),
    skin("USP-S Cortex", 241.57, "#ff4fd8", "#ff477e"),
    skin("AWP Fever Dream", 327.96, "#ff4fd8", "#00bbf9"),
    skin("Desert Eagle Trigger", 448.21, "#ff4fd8", "#f72585"),

    skin("AK-47 Neon Rider", 612.79, "#ff3b3b", "#00eaff"),
    skin("M4A4 Hellfire", 835.24, "#ff3b3b", "#320000"),
    skin("AWP Asiimov", 1142.66, "#ff3b3b", "#ffffff"),
    skin("USP-S Kill Confirmed", 1568.38, "#ff3b3b", "#111"),
    skin("M4A1-S Printstream", 2154.91, "#ff3b3b", "#ffffff"),

    skin("AK-47 Vulcan", 2946.27, "#ff3b3b", "#0066ff"),
    skin("AWP Lightning Strike", 3788.64, "#ff3b3b", "#7b2cff"),
    skin("Desert Eagle Blaze", 4527.89, "#ff3b3b", "#ffb000"),
    skin("AK-47 Fire Serpent", 5369.43, "#ff3b3b", "#006b3c"),
    skin("M4A4 Poseidon", 6844.18, "#ff3b3b", "#00509d"),

    skin("AWP Dragon Lore", 8250.76, "#ffd800", "#b85c00"),
    skin("AK-47 Wild Lotus", 9742.33, "#ffd800", "#00a86b"),
    skin("M4A4 Howl", 11280.55, "#ffd800", "#ff2b00"),
    skin("Gungnir AWP", 13692.18, "#ffd800", "#00b4d8"),
    skin("Prince AWP", 15974.62, "#ffd800", "#7b0000"),

    skin("Bayonet Blue Steel", 6420.39, "#ffd800", "#3d5a80"),
    skin("Flip Knife Doppler", 7985.11, "#ffd800", "#8a2be2"),
    skin("Gut Knife Marble Fade", 9173.84, "#ffd800", "#ff006e"),
    skin("Huntsman Tiger Tooth", 10445.29, "#ffd800", "#ffb703"),
    skin("Bowie Knife Crimson Web", 11984.61, "#ffd800", "#8b0000"),

    skin("M9 Bayonet Doppler", 14837.52, "#ffd800", "#5a00ff"),
    skin("Karambit Lore", 17648.73, "#ffd800", "#b8860b"),
    skin("Butterfly Knife Fade", 20394.16, "#ffd800", "#ff00cc"),
    skin("Talon Knife Marble Fade", 23185.47, "#ffd800", "#00eaff"),
    skin("Skeleton Knife Slaughter", 26842.92, "#ffd800", "#d90429"),

    skin("Karambit Doppler", 30420.75, "#ffd800", "#7b2cff"),
    skin("M9 Bayonet Gamma Doppler", 33791.64, "#ffd800", "#00ff66"),
    skin("Butterfly Knife Doppler", 36584.21, "#ffd800", "#4b0082"),
    skin("Karambit Tiger Tooth", 39216.88, "#ffd800", "#ffb000"),
    skin("Talon Knife Doppler", 42159.37, "#ffd800", "#7209b7"),

    skin("Butterfly Knife Crimson Web", 45603.72, "#ffd800", "#8b0000"),
    skin("Karambit Fade", 47288.93, "#ffd800", "#ff006e"),
    skin("M9 Bayonet Sapphire", 48612.46, "#ffd800", "#0057ff"),
    skin("Butterfly Knife Ruby", 49384.19, "#ffd800", "#ff0033"),
    skin("Karambit Emerald", 50305.00, "#ffd800", "#00ff55"),

    skin("Glock-18 Candy Apple", 4.12, "#4b8cff", "#c1121f"),
    skin("USP-S Guardian", 28.44, "#4b8cff", "#1d3557"),
    skin("P250 Franklin", 19.35, "#2ecc71", "#145a32"),
    skin("CZ75-Auto Tigris", 17.88, "#f39c12", "#7d6608"),
    skin("Five-SeveN Monkey Business", 56.31, "#f1c40f", "#784212"),
    skin("Desert Eagle Conspiracy", 81.24, "#95a5a6", "#2c3e50"),
    skin("Dual Berettas Cartel", 21.75, "#8e44ad", "#2c3e50"),
    skin("Tec-9 Isaac", 13.68, "#16a085", "#1abc9c"),
    skin("R8 Revolver Fade", 146.27, "#f39c12", "#d35400"),
    skin("P2000 Fire Elemental", 94.51, "#e74c3c", "#2c3e50"),

    skin("MAC-10 Disco Tech", 88.76, "#ff00ff", "#00ffff"),
    skin("MP9 Hydra", 54.16, "#27ae60", "#145a32"),
    skin("MP7 Nemesis", 96.12, "#8e44ad", "#2c3e50"),
    skin("UMP-45 Primal Saber", 73.81, "#f39c12", "#d35400"),
    skin("PP-Bizon Judgement", 35.67, "#9b59b6", "#512e5f"),
    skin("P90 Shallow Grave", 121.47, "#16a085", "#0b5345"),
    skin("MP5-SD Phosphor", 189.23, "#00ffff", "#1d3557"),
    skin("MAC-10 Stalker", 242.64, "#e74c3c", "#000000"),
    skin("UMP-45 Crime Scene", 317.84, "#3498db", "#2e86c1"),
    skin("P90 Emerald Dragon", 685.11, "#2ecc71", "#145a32"),

    skin("FAMAS Mecha Industries", 248.17, "#ecf0f1", "#34495e"),
    skin("FAMAS Roll Cage", 173.92, "#f39c12", "#2c3e50"),
    skin("Galil AR Chatterbox", 391.56, "#f1c40f", "#784212"),
    skin("Galil AR Eco", 84.31, "#2ecc71", "#1e8449"),
    skin("Galil AR Sugar Rush", 428.67, "#ff4fd8", "#00eaff"),
    skin("AUG Akihabara Accept", 3845.72, "#ff69b4", "#ffffff"),
    skin("AUG Syd Mead", 218.93, "#9b59b6", "#3498db"),
    skin("SG 553 Cyrex", 152.48, "#e74c3c", "#2c3e50"),
    skin("SG 553 Integrale", 634.82, "#2ecc71", "#145a32"),
    skin("FAMAS Commemoration", 521.19, "#f1c40f", "#7d6608"),

    skin("AK-47 Redline", 384.91, "#e74c3c", "#111111"),
    skin("AK-47 Bloodsport", 1168.37, "#ff2b2b", "#2c3e50"),
    skin("AK-47 Frontside Misty", 417.63, "#3498db", "#ffffff"),
    skin("AK-47 Phantom Disruptor", 563.28, "#8e44ad", "#2c3e50"),
    skin("AK-47 Aquamarine Revenge", 981.54, "#00c2ff", "#145a32"),
    skin("AK-47 Case Hardened", 2763.45, "#3498db", "#f39c12"),
    skin("AK-47 Gold Arabesque", 16482.37, "#ffd700", "#8d6e00"),
    skin("AK-47 Hydroponic", 6432.18, "#2ecc71", "#145a32"),
    skin("AK-47 Jet Set", 3588.91, "#d35400", "#2c3e50"),
    skin("AK-47 Jaguar", 1386.42, "#f39c12", "#111111"),

    skin("M4A4 Neo-Noir", 794.63, "#ff4fd8", "#2b1055"),
    skin("M4A4 The Emperor", 1462.18, "#3498db", "#f1c40f"),
    skin("M4A4 Desolate Space", 324.56, "#8e44ad", "#111111"),
    skin("M4A4 In Living Color", 1124.82, "#ff00cc", "#00eaff"),
    skin("M4A4 Royal Paladin", 653.41, "#ecf0f1", "#34495e"),
    skin("M4A4 Buzz Kill", 497.76, "#f1c40f", "#111111"),
    skin("M4A4 X-Ray", 2148.39, "#00eaff", "#2c3e50"),
    skin("M4A4 Daybreak", 3816.55, "#ffd700", "#f39c12"),
    skin("M4A4 Griffin", 178.42, "#3498db", "#2c3e50"),
    skin("M4A4 Magnesium", 43.27, "#95a5a6", "#34495e"),

    skin("M4A1-S Hyper Beast", 962.81, "#ff00cc", "#00eaff"),
    skin("M4A1-S Golden Coil", 1418.64, "#ffd700", "#2c3e50"),
    skin("M4A1-S Chantico's Fire", 716.35, "#ff4500", "#8b0000"),
    skin("M4A1-S Nightmare", 534.73, "#2b1055", "#3498db"),
    skin("M4A1-S Player Two", 1286.52, "#ff4fd8", "#00ffff"),
    skin("M4A1-S Blue Phosphor", 4851.47, "#00bfff", "#1d3557"),
    skin("M4A1-S Mecha Industries", 654.84, "#ecf0f1", "#2c3e50"),
    skin("M4A1-S Decimator", 243.67, "#7b61ff", "#ff2bd6"),
    skin("M4A1-S Cyrex", 317.49, "#e74c3c", "#111111"),
    skin("M4A1-S Control Panel", 2864.38, "#00eaff", "#34495e"),
];