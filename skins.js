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

    skin("AWP Containment Breach", 1837.54, "#7aff00", "#1d1d1d"),
    skin("AWP Graphite", 1296.42, "#444444", "#111111"),
    skin("AWP BOOM", 482.76, "#ff9900", "#222222"),
    skin("AWP Electric Hive", 734.15, "#ffee00", "#3f0071"),
    skin("AWP Silk Tiger", 2174.91, "#ff9900", "#111111"),
    skin("AWP Oni Taiji", 4218.66, "#e74c3c", "#ffffff"),
    skin("AWP Hyper Beast", 982.31, "#ff00cc", "#00eaff"),
    skin("AWP Man-o'-war", 1184.42, "#1d3557", "#ffd700"),
    skin("AWP Redline", 724.68, "#e74c3c", "#111111"),
    skin("AWP Neo-Noir", 936.18, "#ff4fd8", "#2b1055"),
    
    skin("AK-47 Fuel Injector", 1862.34, "#ffd800", "#111111"),
    skin("AK-47 Legion of Anubis", 746.28, "#ffd700", "#2c3e50"),
    skin("AK-47 Ice Coaled", 513.47, "#00d4ff", "#005577"),
    skin("AK-47 Leet Museo", 1782.63, "#ff4fd8", "#00aaff"),
    skin("AK-47 Slate", 186.45, "#444444", "#111111"),
    skin("AK-47 Point Disarray", 724.81, "#ff4fd8", "#3498db"),
    skin("AK-47 Cartel", 641.29, "#8e44ad", "#2c3e50"),
    skin("AK-47 Orbit Mk01", 396.44, "#e74c3c", "#111111"),
    skin("AK-47 Blue Laminate", 317.86, "#3498db", "#1d3557"),
    skin("AK-47 Red Laminate", 528.24, "#c1121f", "#111111"),
    
    skin("M4A4 Evil Daimyo", 213.75, "#e74c3c", "#111111"),
    skin("M4A4 龍王 Dragon King", 589.31, "#3498db", "#e74c3c"),
    skin("M4A4 Bullet Rain", 874.52, "#3498db", "#ff2b2b"),
    skin("M4A4 Asiimov", 1684.72, "#ff7a00", "#ffffff"),
    skin("M4A4 Zirka", 348.91, "#3498db", "#f39c12"),
    skin("M4A4 Radiation Hazard", 441.27, "#f1c40f", "#145a32"),
    skin("M4A4 Tooth Fairy", 629.38, "#ff4fd8", "#2b1055"),
    skin("M4A4 Spider Lily", 297.64, "#e74c3c", "#2c3e50"),
    skin("M4A4 Temukau", 1874.42, "#ff69b4", "#ffffff"),
    skin("M4A4 Poly Mag", 48.19, "#95a5a6", "#34495e"),
    
    skin("M4A1-S Moss Quartz", 74.38, "#2ecc71", "#145a32"),
    skin("M4A1-S Nitro", 68.24, "#ff9900", "#2c2c2c"),
    skin("M4A1-S Basilisk", 141.77, "#145a32", "#2c3e50"),
    skin("M4A1-S Flashback", 98.63, "#95a5a6", "#145a32"),
    skin("M4A1-S Leaded Glass", 538.42, "#00bbff", "#2b1055"),
    skin("M4A1-S Atomic Alloy", 482.16, "#f39c12", "#34495e"),
    skin("M4A1-S Master Piece", 2476.91, "#3498db", "#ffffff"),
    skin("M4A1-S Briefing", 52.48, "#95a5a6", "#2c3e50"),
    skin("M4A1-S Emphorosaur-S", 184.62, "#2ecc71", "#111111"),
    skin("M4A1-S Black Lotus", 681.37, "#8e44ad", "#111111"),
    
    skin("USP-S Dark Water", 218.44, "#34495e", "#111111"),
    skin("USP-S Orion", 782.36, "#ff9900", "#ffffff"),
    skin("USP-S The Traitor", 617.29, "#e74c3c", "#2c3e50"),
    skin("USP-S Neo-Noir", 739.41, "#ff4fd8", "#2b1055"),
    skin("USP-S Ticket to Hell", 87.26, "#ecf0f1", "#111111"),
    skin("USP-S Monster Mashup", 482.11, "#2ecc71", "#ff4fd8"),
    skin("USP-S Whiteout", 1428.63, "#ffffff", "#dcdcdc"),
    skin("USP-S Stainless", 361.74, "#bdc3c7", "#2c3e50"),
    skin("USP-S Road Rash", 824.55, "#95a5a6", "#c1121f"),
    skin("USP-S Blueprint", 216.38, "#3498db", "#1d3557"),
    
    skin("Glock-18 Dragon Tattoo", 518.73, "#ecf0f1", "#111111"),
    skin("Glock-18 Water Elemental", 348.29, "#3498db", "#e74c3c"),
    skin("Glock-18 Vogue", 286.42, "#ff4fd8", "#00eaff"),
    skin("Glock-18 Bullet Queen", 734.68, "#ff2b2b", "#111111"),
    skin("Glock-18 Wasteland Rebel", 412.57, "#d35400", "#111111"),
    skin("Glock-18 Moonrise", 96.35, "#8e44ad", "#2c3e50"),
    skin("Glock-18 Twilight Galaxy", 684.21, "#7b61ff", "#111111"),
    skin("Glock-18 Reactor", 223.89, "#f1c40f", "#111111"),
    skin("Glock-18 Nuclear Garden", 274.63, "#2ecc71", "#145a32"),
    skin("Glock-18 Neo-Noir", 516.84, "#ff4fd8", "#2b1055"),
    
    skin("Desert Eagle Hypnotic", 1428.33, "#ecf0f1", "#111111"),
    skin("Desert Eagle Printstream", 2486.71, "#ffffff", "#111111"),
    skin("Desert Eagle Code Red", 1148.92, "#e74c3c", "#111111"),
    skin("Desert Eagle Kumicho Dragon", 497.66, "#8e44ad", "#2c3e50"),
    skin("Desert Eagle Mecha Industries", 384.29, "#ecf0f1", "#34495e"),
    skin("Desert Eagle Ocean Drive", 736.51, "#ff00cc", "#00eaff"),
    skin("Desert Eagle Fennec Fox", 1829.38, "#f39c12", "#d35400"),
    skin("Desert Eagle Night Heist", 214.68, "#34495e", "#111111"),
    skin("Desert Eagle Golden Koi", 924.77, "#ffd700", "#8d6e00"),
    skin("Desert Eagle Heirloom", 442.19, "#bdc3c7", "#8b0000"),
    
    skin("SSG 08 Dragonfire", 314.86, "#ff4500", "#111111"),
    skin("SSG 08 Bloodshot", 286.55, "#e74c3c", "#111111"),
    skin("SSG 08 Turbo Peek", 174.63, "#ff00cc", "#00eaff"),
    skin("SSG 08 Ghost Crusader", 128.92, "#3498db", "#ecf0f1"),
    skin("SSG 08 Death's Head", 92.47, "#95a5a6", "#111111"),
    skin("SSG 08 Big Iron", 184.76, "#d35400", "#2c3e50"),
    skin("SSG 08 Fever Dream", 206.34, "#ff4fd8", "#00eaff"),
    skin("SSG 08 Parallax", 118.25, "#7b61ff", "#111111"),
    skin("SSG 08 Mainframe 001", 42.81, "#00ff66", "#111111"),
    skin("SSG 08 Sea Calico", 392.18, "#00b4d8", "#005f99"),
    
    skin("FAMAS Afterimage", 448.61, "#3498db", "#ff4fd8"),
    skin("FAMAS Djinn", 317.72, "#f39c12", "#2c3e50"),
    skin("FAMAS Eye of Athena", 586.49, "#00eaff", "#f1c40f"),
    skin("FAMAS Valence", 86.35, "#3498db", "#2c3e50"),
    skin("FAMAS ZX Spectron", 164.94, "#ff00cc", "#00ffff"),
    skin("FAMAS Waters of Nephthys", 1274.86, "#00bfff", "#ffd700"),
    skin("FAMAS Neural Net", 114.43, "#f1c40f", "#111111"),
    skin("FAMAS Meow 36", 57.26, "#ff69b4", "#ffffff"),
    skin("FAMAS Dark Water", 224.64, "#34495e", "#111111"),
    skin("FAMAS Styx", 338.79, "#2ecc71", "#111111"),
    
    skin("Galil AR Cerberus", 742.31, "#2ecc71", "#111111"),
    skin("Galil AR Stone Cold", 184.64, "#3498db", "#ecf0f1"),
    skin("Galil AR Chromatic Aberration", 139.27, "#ff00cc", "#00eaff"),
    skin("Galil AR Rocket Pop", 64.82, "#e74c3c", "#3498db"),
    skin("Galil AR Signal", 93.46, "#f1c40f", "#111111"),
    skin("Galil AR Phoenix Blacklight", 216.74, "#8e44ad", "#ff4fd8"),
    skin("Galil AR Connexion", 121.38, "#3498db", "#2c3e50"),
    skin("Galil AR Kami", 58.17, "#ecf0f1", "#111111"),
    skin("Galil AR Firefight", 147.29, "#e74c3c", "#111111"),
    skin("Galil AR Sandstorm", 88.52, "#d35400", "#2c3e50"),
    
    skin("P250 See Ya Later", 524.31, "#2ecc71", "#111111"),
    skin("P250 Muertos", 168.27, "#8e44ad", "#2c3e50"),
    skin("P250 Mehndi", 681.42, "#f39c12", "#8b0000"),
    skin("P250 Undertow", 834.91, "#3498db", "#111111"),
    skin("P250 Wingshot", 72.83, "#3498db", "#ecf0f1"),
    skin("P250 Steel Disruption", 384.18, "#95a5a6", "#34495e"),
    skin("P250 Supernova", 108.57, "#3498db", "#ff4fd8"),
    skin("P250 Visions", 196.44, "#ff00cc", "#00eaff"),
    skin("P250 X-Ray", 97.33, "#00eaff", "#2c3e50"),
    skin("P250 Contaminant", 46.81, "#2ecc71", "#145a32"),
    
    skin("CZ75-Auto Victoria", 316.48, "#3498db", "#f1c40f"),
    skin("CZ75-Auto Xiangliu", 274.29, "#00b4d8", "#111111"),
    skin("CZ75-Auto Crimson Web", 438.62, "#8b0000", "#111111"),
    skin("CZ75-Auto Eco", 121.54, "#2ecc71", "#145a32"),
    skin("CZ75-Auto Emerald", 86.92, "#2ecc71", "#0b5345"),
    skin("CZ75-Auto Nitro", 63.45, "#ff9900", "#111111"),
    skin("CZ75-Auto Poison Dart", 94.73, "#8e44ad", "#2c3e50"),
    skin("CZ75-Auto Pole Position", 58.91, "#e74c3c", "#111111"),
    skin("CZ75-Auto Yellow Jacket", 182.34, "#f1c40f", "#111111"),
    skin("CZ75-Auto Syndicate", 416.87, "#ecf0f1", "#2c3e50"),
    
    skin("Five-SeveN Angry Mob", 472.18, "#ff00cc", "#00ffff"),
    skin("Five-SeveN Fairy Tale", 713.94, "#ff69b4", "#ffffff"),
    skin("Five-SeveN Hyper Beast", 654.28, "#ff00cc", "#00eaff"),
    skin("Five-SeveN Fowl Play", 148.52, "#8e44ad", "#2c3e50"),
    skin("Five-SeveN Triumvirate", 194.76, "#3498db", "#111111"),
    skin("Five-SeveN Retrobution", 124.63, "#f39c12", "#111111"),
    skin("Five-SeveN Capillary", 37.54, "#e74c3c", "#3498db"),
    skin("Five-SeveN Violent Daimyo", 52.48, "#ff4fd8", "#2b1055"),
    skin("Five-SeveN Copper Galaxy", 587.63, "#d35400", "#111111"),
    skin("Five-SeveN Boost Protocol", 214.37, "#00b4d8", "#111111"),
    
    skin("Tec-9 Fuel Injector", 396.24, "#ffd700", "#111111"),
    skin("Tec-9 Remote Control", 217.68, "#3498db", "#ff2bd6"),
    skin("Tec-9 Decimator", 248.74, "#7b61ff", "#ff2bd6"),
    skin("Tec-9 Avalanche", 97.52, "#ecf0f1", "#3498db"),
    skin("Tec-9 Bamboo Forest", 48.39, "#2ecc71", "#145a32"),
    skin("Tec-9 Bamboozle", 54.61, "#2ecc71", "#111111"),
    skin("Tec-9 Brother", 63.44, "#3498db", "#2c3e50"),
    skin("Tec-9 Re-Entry", 82.56, "#e74c3c", "#111111"),
    skin("Tec-9 Toxic", 71.48, "#2ecc71", "#145a32"),
    skin("Tec-9 Sandstorm", 86.91, "#d35400", "#2c3e50"),
    
    skin("Dual Berettas Cobra Strike", 782.66, "#2ecc71", "#111111"),
    skin("Dual Berettas Dualing Dragons", 148.53, "#3498db", "#e74c3c"),
    skin("Dual Berettas Hydro Strike", 224.69, "#00b4d8", "#111111"),
    skin("Dual Berettas Melondrama", 312.48, "#ff69b4", "#2b1055"),
    skin("Dual Berettas Flora Carnivora", 248.83, "#2ecc71", "#145a32"),
    skin("Dual Berettas Balance", 93.62, "#3498db", "#111111"),
    skin("Dual Berettas Hemoglobin", 164.57, "#8b0000", "#111111"),
    skin("Dual Berettas Marina", 117.25, "#3498db", "#ecf0f1"),
    skin("Dual Berettas Royal Consorts", 201.74, "#8e44ad", "#ffffff"),
    skin("Dual Berettas Ventilators", 38.46, "#95a5a6", "#34495e"),
    
    skin("MAC-10 Toybox", 516.39, "#ff69b4", "#3498db"),
    skin("MAC-10 Allure", 84.62, "#3498db", "#111111"),
    skin("MAC-10 Button Masher", 73.81, "#e74c3c", "#2c3e50"),
    skin("MAC-10 Classic Crate", 61.27, "#d35400", "#111111"),
    skin("MAC-10 Aloha", 42.56, "#2ecc71", "#f1c40f"),
    skin("MAC-10 Calf Skin", 36.91, "#d35400", "#2c3e50"),
    skin("MAC-10 Lapis Gator", 54.38, "#3498db", "#145a32"),
    skin("MAC-10 Malachite", 236.48, "#2ecc71", "#0b5345"),
    skin("MAC-10 Pipe Down", 118.62, "#95a5a6", "#111111"),
    skin("MAC-10 Sakkaku", 327.91, "#ff00cc", "#00ffff"),
    
    skin("MP9 Mount Fuji", 514.74, "#3498db", "#ffffff"),
    skin("MP9 Starlight Protector", 862.55, "#ecf0f1", "#3498db"),
    skin("MP9 Food Chain", 286.34, "#2ecc71", "#ff4fd8"),
    skin("MP9 Ruby Poison Dart", 194.83, "#e74c3c", "#3498db"),
    skin("MP9 Rose Iron", 217.49, "#ff69b4", "#34495e"),
    skin("MP9 Pandora's Box", 128.71, "#8e44ad", "#2c3e50"),
    skin("MP9 Goo", 44.57, "#2ecc71", "#145a32"),
    skin("MP9 Dart", 31.48, "#3498db", "#111111"),
    skin("MP9 Bioleak", 27.36, "#2ecc71", "#111111"),
    skin("MP9 Hot Rod", 3186.22, "#e74c3c", "#111111"),
    
    skin("MP7 Bloodsport", 386.52, "#e74c3c", "#111111"),
    skin("MP7 Fade", 1648.37, "#ffd700", "#ff69b4"),
    skin("MP7 Whiteout", 472.61, "#ecf0f1", "#dcdcdc"),
    skin("MP7 Powercore", 74.83, "#f39c12", "#2c3e50"),
    skin("MP7 Abyssal Apparition", 281.47, "#7b61ff", "#111111"),
    skin("MP7 Special Delivery", 143.52, "#3498db", "#ecf0f1"),
    skin("MP7 Impire", 117.38, "#ff4fd8", "#111111"),
    skin("MP7 Neon Ply", 68.94, "#ff00cc", "#00ffff"),
    skin("MP7 Guerrilla", 39.48, "#2ecc71", "#145a32"),
    skin("MP7 Armor Core", 21.57, "#95a5a6", "#34495e"),
    
    skin("UMP-45 Blaze", 624.91, "#ff9900", "#111111"),
    skin("UMP-45 Momentum", 213.82, "#3498db", "#ff4fd8"),
    skin("UMP-45 Delusion", 61.47, "#3498db", "#2c3e50"),
    skin("UMP-45 Exposure", 104.29, "#00b4d8", "#111111"),
    skin("UMP-45 Scaffold", 72.16, "#95a5a6", "#34495e"),
    skin("UMP-45 Plastique", 84.77, "#ff69b4", "#2c3e50"),
    skin("UMP-45 Moonrise", 47.93, "#8e44ad", "#111111"),
    skin("UMP-45 Riot", 34.65, "#95a5a6", "#2c3e50"),
    skin("UMP-45 Bone Pile", 28.41, "#d35400", "#111111"),
    skin("UMP-45 Grand Prix", 58.36, "#e74c3c", "#ecf0f1"),
    
    skin("P90 Trigon", 382.41, "#f39c12", "#111111"),
    skin("P90 Blind Spot", 214.68, "#3498db", "#ecf0f1"),
    skin("P90 Death by Kitty", 1742.58, "#ff69b4", "#111111"),
    skin("P90 Cold Blooded", 642.13, "#3498db", "#145a32"),
    skin("P90 Asiimov", 896.27, "#ff9900", "#ffffff"),
    skin("P90 Elite Build", 74.61, "#3498db", "#2c3e50"),
    skin("P90 Grim", 32.84, "#111111", "#95a5a6"),
    skin("P90 Module", 21.57, "#95a5a6", "#34495e"),
    skin("P90 Freight", 18.42, "#3498db", "#111111"),
    skin("P90 Vent Rush", 97.63, "#00b4d8", "#2c3e50"),
    
    skin("PP-Bizon High Roller", 274.84, "#f39c12", "#111111"),
    skin("PP-Bizon Fuel Rod", 154.62, "#2ecc71", "#145a32"),
    skin("PP-Bizon Blue Streak", 73.91, "#3498db", "#1d3557"),
    skin("PP-Bizon Embargo", 117.24, "#e74c3c", "#111111"),
    skin("PP-Bizon Osiris", 81.33, "#f1c40f", "#2c3e50"),
    skin("PP-Bizon Antique", 136.58, "#d35400", "#784212"),
    skin("PP-Bizon Space Cat", 98.17, "#ff4fd8", "#00ffff"),
    skin("PP-Bizon Brass", 46.92, "#b8860b", "#111111"),
    skin("PP-Bizon Rust Coat", 27.61, "#8b4513", "#111111"),
    skin("PP-Bizon Urban Dashed", 12.73, "#95a5a6", "#34495e"),
    
    skin("Nova Antique", 184.36, "#d35400", "#784212"),
    skin("Nova Hyper Beast", 516.48, "#ff00cc", "#00ffff"),
    skin("Nova Bloomstick", 243.87, "#e74c3c", "#111111"),
    skin("Nova Koi", 162.74, "#3498db", "#f39c12"),
    skin("Nova Sobek's Bite", 96.38, "#2ecc71", "#145a32"),
    skin("Nova Tempest", 61.84, "#3498db", "#ecf0f1"),
    skin("Nova Ranger", 38.19, "#2ecc71", "#34495e"),
    skin("Nova Walnut", 14.26, "#8b4513", "#111111"),
    skin("Nova Candy Apple", 21.38, "#c1121f", "#111111"),
    skin("Nova Windblown", 52.44, "#95a5a6", "#2c3e50"),
    
    skin("XM1014 Tranquility", 248.56, "#3498db", "#ffffff"),
    skin("XM1014 XOXO", 482.73, "#ff69b4", "#111111"),
    skin("XM1014 Entombed", 194.37, "#2ecc71", "#145a32"),
    skin("XM1014 Incinegator", 214.62, "#ff4500", "#111111"),
    skin("XM1014 Seasons", 174.49, "#2ecc71", "#f39c12"),
    skin("XM1014 Heaven Guard", 92.75, "#3498db", "#ecf0f1"),
    skin("XM1014 Ziggy", 58.24, "#ff00cc", "#3498db"),
    skin("XM1014 Blue Steel", 43.91, "#34495e", "#111111"),
    skin("XM1014 Red Leather", 31.68, "#8b0000", "#111111"),
    skin("XM1014 Black Tie", 86.43, "#111111", "#ecf0f1"),
    
    skin("MAG-7 Justice", 417.83, "#ff69b4", "#3498db"),
    skin("MAG-7 Bulldozer", 1286.41, "#f1c40f", "#111111"),
    skin("MAG-7 BI83 Spectrum", 84.74, "#00b4d8", "#2c3e50"),
    skin("MAG-7 Cinquedea", 2948.17, "#d4af37", "#8b0000"),
    skin("MAG-7 Monster Call", 143.28, "#2ecc71", "#111111"),
    skin("MAG-7 Heat", 74.91, "#ff4500", "#111111"),
    skin("MAG-7 Firestarter", 53.64, "#e74c3c", "#2c3e50"),
    skin("MAG-7 Core Breach", 96.72, "#7b61ff", "#111111"),
    skin("MAG-7 SWAG-7", 38.92, "#f39c12", "#111111"),
    skin("MAG-7 Petroglyph", 62.15, "#95a5a6", "#34495e")
];
