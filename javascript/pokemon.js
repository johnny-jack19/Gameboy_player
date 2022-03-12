// Classes
class Pokemon {
    constructor(name, type1, type2, hp, att, def, satt, sdef, spd, moveset) {
        this.name = name;
        this.level = 100;
        this.type1 = type1;
        this.type2 = type2;
        this.hp = hp;
        this.maxHp = hp;
        this. att = att;
        this.def = def;
        this. satt = satt;
        this.sdef = sdef;
        this.spd = spd;
        this.move1 = [...moves[moveset[0]]];
        this.move1.push(moves[moveset[0]][3]);
        this.move2 = [...moves[moveset[1]]];
        this.move2.push(moves[moveset[1]][3]);
        this.move3 = [...moves[moveset[2]]];
        this.move3.push(moves[moveset[2]][3]);
        this.move4 = [...moves[moveset[3]]];
        this.move4.push(moves[moveset[3]][3]);
    }
}

class Trainer {
    constructor(name, pokemon) {
        this.name = name;
        this.pokemon1 = pokemon[0];
        this.pokemon2 = pokemon[1];
        this.pokemon3 = pokemon[2];
        this.pokemon4 = pokemon[3];
        this.pokemon5 = pokemon[4];
        this.pokemon6 = pokemon[5];
    }
}


//Type match ups
const attackTypes = {
    "Normal": {weak: ["Rock", "Steel"], strong: [], immune: ["Ghost"]},
    "Fire": {weak: ["Fire", "Water", "Rock", "Dragon"], strong: ["Grass", "Ice", "Bug", "Steel"], immune: []},
    "Water": {Weak: ["Water", "Grass", "Dragon"], strong: ["Fire", "Ground", "Rock"], immune: []},
    "Electric": {weak: ["Electric", "Grass", "Dragon"], strong: ["Water", "Flying"], immune: ["Ground"]},
    "Grass": {weak: ["Fire", "Grass", "Poison", "Flying", "Bug", "Dragon"], strong: ["Water", "Ground", "Rock"], immune: []},
    "Ice": {weak: ["Fire", "Water", "Ice", "Steel"], strong: ["Grass", "Ground", "Flying", "Dragon"], immune:[]},
    "Fighting": {weak : ["Poison", "Flying", "Psychic", "Bug"], strong: ["Normal", "Ice", "Rock", "Dark", "Steel"], immune: ["Ghost"]},
    "Poison": {weak: ["Poison", "Ground", "Rock", "Ghost"], strong: ["Grass"], immune: ["Steel"]},
    "Ground": {weak: ["Grass", "Bug"], strong: ["Fire", "Electric", "Poison", "Rock", "Steel"], immune: ["Flying"]},
    "Flying": {weak: ["Electric", "Rock", "Steel"], strong: ["Grass", "Fighting", "Bug"], immune: []},
    "Psychic": {weak: ["Psychic", "Steel"], strong: ["Fighting", "Poison"], immune: ["Dark"]},
    "Bug": {weak: ["Fire", "Fighting", "Poison", "Flying", "Ghost", "Steel"], strong: ["Grass", "Psychic", "Dark"], immune: []},
    "Rock": {weak: ["Fighting", "Ground", "Steel"], strong: ["Fire", "Ice", "Flying", "Bug"], immune: []},
    "Ghost": {weak: ["Dark"], strong: ["Psychic", "Ghost"], immune: ["Normal"]},
    "Dragon": {weak: ["Steel"], strong: ["Dragon"], immune: []},
    "Dark": {weak: ["Fighting", "Dark"], strong: ["Psychic", "Ghost"], immune: []},
    "Steel": {weak: ["Fire", "Water", "Electric", "Steel"], strong: ["Ice", "Rock"], immune: []}
}


//Moves
//[Name, Type, Cat,	PP,	Att, Acc]
const moves = {
    earthquake: ["Earthquake", "Ground", "physical", 10, 100, 100],
    flameThrower: ["Flame Thrower", "Fire", "special", 15, 95, 100],
    airSlash: ["Air Slash", "Flying", "special", 20, 75, 95],
    fireBlast: ["Fire Blast", "Fire", "special", 5, 120, 85],
    dragonPulse: ["Dragon Pulse", "Dragon", "special", 10, 90, 100],
    petalDance: ["Petal Dance", "Grass", "special", 20, 90, 100],
    razorLeaf: ["Razor Leaf", "Grass", "physical", 25, 55, 95],
    sludgeBomb: ["Sludge Bomb", "Poison", "special", 10, 90, 100],
    strength: ["Strength", "Normal", "physical", 15, 80, 100],
    surf: ["Surf", "Water", "special", 15, 95, 100],
    waterfall: ["Waterfall", "Water", "physical", 15, 80, 100],
    bite: ["Bite", "Dark", "physical", 25, 60, 100],
    headbutt: ["Headbutt", "Normal", "physical", 15, 70, 100],
    psychic: ["Psychic", "Psychic", "special", 10, 90, 100],
    shadowball: ["Shadowball", "Ghost", "special", 15, 80, 100],
    thunderbolt: ["Thunderbolt", "Electric", "special", 15, 95, 100],
    brickBreak: ["Brick Break", "Fighting", "physical", 15, 75, 100],
    suckerPunch: ["Sucker Punch", "Dark", "physical", 5, 80, 100],
    icePunch: ["Ice Punch", "Ice", "physical", 15, 75, 100],
    outrage: ["Outrage", "Dragon", "physical", 15, 120, 100],
    firePunch: ["Fire Punch", "Fire", "physical", 15, 75, 100],
    thunderPunch: ["Thunder Punch", "Electric", "physical", 15, 75, 100],
    rockSlide: ["Rock Slide", "Rock", "physical", 10, 75, 90],
    metalClaw: ["Metal Claw", "Steel", "physical", 35, 50, 95],
    ironHead: ["Iron Head", "Steel", "physical", 15, 80, 100],
    drillPeck: ["Drill Peck", "Flying", "physical", 20, 80, 100],
    steelWing: ["Steel Wing", "Steel", "physical", 25, 70, 90],
    nightSlash: ["Nigth Slash", "Dark", "physical", 15, 70, 100],
    ironTail: ["Iron Tail", "Steel", "physical", 15, 100, 75],
    iceBeam: ["Ice Beam", "Ice", "special", 10, 95, 100],
    confusion: ["Confusion", "Psychic", "special", 25, 50, 100],
    thunder: ["Thunder", "Electric", "special", 10, 120, 70],
    flashCannon: ["Flash Cannon", "Steel", "special", 10, 80, 100],
    signalBeam: ["Signal Beam", "Bug", "special", 15, 75, 100],
    thunderFang: ["Thunder Fang", "Electric", "physical", 15, 65, 95],
    poisonJab: ["Poison Jab", "Poison", "physical", 20, 80, 100],
    bugBite: ["Bug Bite", "Bug", "physical", 20, 60, 100],
    poisonFang: ["Poison Fang", "Poison", "physical", 15, 50, 100],
    fireFang: ["Fire Fang", "Fire", "physical", 15, 65, 95],
    dragonClaw: ["Dragon Claw", "Dragon", "physical", 15, 80, 100]
}


//Player
let charizard = new Pokemon("Charizard", "Fire", "Flying", 266, 173, 161, 317, 175, 299, ["flameThrower", "airSlash", "fireBlast", "dragonPulse"]);
let venusaur = new Pokemon("Venusaur", "Grass", "Poison", 270, 169, 171, 299, 299, 165, ["petalDance", "sludgeBomb", "razorLeaf", "strength"]);
let blastoise = new Pokemon("Blastoise", "Water", "None", 268, 171, 299, 175, 309, 161, ["surf", "waterfall", "bite", "headbutt"]);
let gengar = new Pokemon("Gengar", "Ghost", "Poison", 230, 135, 125, 359, 155, 319, ["psychic", "sludgeBomb", "shadowball", "thunderbolt"]);
let machamp = new Pokemon("Machamp", "Fighting", "None", 384, 359, 165, 135, 175, 115, ["brickBreak", "suckerPunch", "earthquake", "icePunch"]);
let dragonite = new Pokemon("Dragonite", "Dragon", "Flying", 292, 367, 195, 205, 205, 259, ["outrage", "firePunch", "icePunch", "thunderPunch"]);
let player = new Trainer("Player", [charizard, venusaur, blastoise, gengar, machamp, dragonite]);

//Brock
let brockOnix = new Pokemon("Onix", "Rock", "Ground", 180, 95, 419, 65, 95, 239, ["rockSlide", "earthquake", "ironTail", "strength"]);
let brockGolem = new Pokemon("Golem", "Rock", "Ground", 270, 319, 359, 115, 135, 95, ["rockSlide", "earthquake", "ironHead", "brickBreak"]);
let brockRhydon = new Pokemon("Rhydon", "Ground", "Rock", 320, 359, 339, 95, 95, 95, ["rockSlide", "earthquake", "ironHead", "strength"]);
let brockOmastar = new Pokemon("Omastar", "Rock", "Water", 250, 125, 349, 329, 145, 115, ["rockSlide", "surf", "waterfall", "iceBeam"]);
let brockKabutops = new Pokemon("Kabutops", "Rock", "Water", 230, 329, 309, 135, 145, 165, ["rockSlide", "surf", "waterfall", "nightSlash"]);
let brockAerodactyl = new Pokemon("Aerodactyl", "Rock", "Flying", 270, 309, 135, 125, 155, 359, ["rockSlide", "drillPeck", "steelWing", "outrage"]);
let brock = new Trainer("Brock", [brockOnix, brockGolem, brockRhydon, brockOmastar, brockKabutops, brockAerodactyl]);

//Misty
let mistyStarmie = new Pokemon("Starmie", "Water", "Psychic", 230, 155, 175, 299, 175, 329, ["surf", "iceBeam", "thunderbolt", "psychic"]);
let mistyGolduck = new Pokemon("Golduck", "Water", "None", 270, 263, 161, 289, 165, 175, ["surf", "icePunch", "waterfall", "confusion"]);
let mistyDewgong = new Pokemon("Dewgong", "Water", "Ice", 290, 145, 249, 145, 289, 145, ["surf", "iceBeam", "waterfall", "headbutt"]);
let mistyVaporeon = new Pokemon("Vaporeon", "Water", "None", 464, 135, 125, 319, 195, 135, ["surf", "iceBeam", "waterfall", "bite"]);
let mistyGyarados = new Pokemon("Gyarados", "Water", "Flying", 394, 349, 163, 125, 205, 167, ["surf", "drillPeck", "waterfall", "outrage"]);
let mistyLapras = new Pokemon("Lapras", "Water", "Ice", 464, 175, 165, 175, 289, 125, ["surf", "iceBeam", "thunderbolt", "waterfall"]);
let misty =  new Trainer("Misty", [mistyStarmie, mistyGolduck, mistyDewgong, mistyVaporeon, mistyGyarados, mistyLapras]);

//Surge
let surgeRaichu = new Pokemon("Raichu", "Electric", "None", 230, 185, 115, 279, 165, 299, ["thunderbolt", "thunder", "ironTail", "bite"]);
let surgePikachu = new Pokemon("Pikachu", "Electric", "None", 180, 209, 65, 105, 85, 279, ["thunderbolt", "thunder", "ironTail", "bite"]);
let surgeMagneton = new Pokemon("Magneton", "Electric", "Steel", 210, 125, 289, 339, 145, 145, ["thunderbolt", "thunder", "flashCannon", "signalBeam"]);
let surgeElectrode = new Pokemon("Electrode", "Electric", "None", 230, 105, 145, 259, 165, 379, ["thunderbolt", "thunder", "flashCannon", "suckerPunch"]);
let surgeElectabuzz = new Pokemon("Electabuzz", "Electric", "None", 240, 265, 119, 289, 175, 215, ["thunderbolt", "thunder", "thunderPunch", "icePunch"]);
let surgeJolteon = new Pokemon("Jolteon", "Electric", "None", 240, 135, 125, 319, 195, 359, ["thunderbolt", "thunder", "thunderFang", "shadowball"]);
let surge =  new Trainer("Lt. Surge", [surgeRaichu, surgePikachu, surgeMagneton, surgeElectrode, surgeElectabuzz, surgeJolteon]);

//Erika
let erikaTangela = new Pokemon("Tangela", "Grass", "None", 240, 115, 329, 299, 85, 125, ["petalDance", "razorLeaf", "confusion", "sludgeBomb"]);
let erikaExeggutor = new Pokemon("Exeggutor", "Grass", "Psychic", 394, 195, 175, 349, 135, 115, ["petalDance", "razorLeaf", "psychic", "headbutt"]);
let erikaParasect = new Pokemon("Parasect", "Bug", "Grass", 230, 289, 165, 125, 259, 65, ["petalDance", "razorLeaf", "poisonJab", "bugBite"]);
let erikaVictreebel = new Pokemon("Victreebel", "Grass", "Poison", 270, 309, 135, 299, 125, 145, ["petalDance", "razorLeaf", "poisonJab", "sludgeBomb"]);
let erikaVileplume = new Pokemon("Vileplume", "Grass", "Poison", 354, 165, 175, 299, 185, 105, ["petalDance", "razorLeaf", "poisonJab", "sludgeBomb"]);
let erikaVenusaur = new Pokemon("Venusaur", "Grass", "Poison", 270, 169, 171, 299, 299, 165, ["petalDance", "sludgeBomb", "razorLeaf", "strength"]);
let erika =  new Trainer("Erika", [erikaTangela, erikaExeggutor, erikaParasect, erikaVictreebel, erikaVileplume, erikaVenusaur]);

//Koga
let kogaWeezing = new Pokemon("Weezing", "Poison", "None", 240, 185, 339, 269, 145, 125, ["sludgeBomb", "headbutt", "thunderbolt", "fireBlast"]);
let kogaMuk = new Pokemon("Muk", "Poison", "None", 414, 309, 155, 135, 205, 105, ["sludgeBomb", "poisonJab", "strength", "icePunch"]);
let kogaGolbat = new Pokemon("Golbat", "Poison", "Flying", 260, 259, 145, 135, 155, 279, ["sludgeBomb", "poisonFang", "airSlash", "steelWing"]);
let kogaArbok = new Pokemon("Arbok", "Poison", "None", 230, 269, 143, 135, 163, 259, ["sludgeBomb", "poisonFang", "thunderFang", "bite"]);
let kogaTentacruel = new Pokemon("Tentacruel", "Water", "Poison", 270, 145, 135, 259, 245, 205, ["sludgeBomb", "poisonJab", "surf", "waterfall"]);
let kogaVenomoth = new Pokemon("Venomoth", "Bug", "Poison", 250, 135, 125, 279, 155, 279, ["sludgeBomb", "confusion", "signalBeam", "airSlash"]);
let koga =  new Trainer("Koga", [kogaWeezing, kogaMuk, kogaGolbat, kogaArbok, kogaTentacruel, kogaVenomoth]);

//Sabrina
let sabrinaAlakazam = new Pokemon("Alakazam", "Psychic", "None", 220, 105, 95, 369, 175, 339, ["psychic", "shadowball", "confusion", "signalBeam"]);
let sabrinaHypno = new Pokemon("Hypno", "Psychic", "None", 280, 245, 145, 245, 235, 139, ["psychic", "firePunch", "confusion", "thunderPunch"]);
let sabrinaMrMime = new Pokemon("Mr. Mime", "Psychic", "None", 190, 95, 135, 299, 339, 185, ["psychic", "shadowball", "confusion", "thunderbolt"]);
let sabrinaJynx = new Pokemon("Jynx", "Ice", "Psychic", 240, 105, 75, 329, 195, 289, ["psychic", "shadowball", "confusion", "iceBeam"]);
let sabrinaSlowbro = new Pokemon("Slowbro", "Water", "Psychic", 394, 155, 225, 299, 165, 65, ["psychic", "surf", "ironTail", "iceBeam"]);
let sabrinaExeggutor = new Pokemon("Exeggutor", "Grass", "Psychic", 394, 195, 175, 349, 135, 115, ["petalDance", "razorLeaf", "psychic", "headbutt"]);
let sabrina =  new Trainer("Sabrina", [sabrinaAlakazam, sabrinaHypno, sabrinaMrMime, sabrinaJynx, sabrinaSlowbro, sabrinaExeggutor]);

//Blaine
let blaineArcanine = new Pokemon("Arcanine", "Fire", "None", 290, 225, 165, 299, 165, 289, ["flameThrower", "fireBlast", "fireFang", "dragonPulse"]);
let blaineRapidash = new Pokemon("Rapidash", "Fire", "None", 240, 299, 145, 165, 165, 309, ["flameThrower", "fireBlast", "brickBreak", "poisonJab"]);
let blaineNinetales = new Pokemon("Ninetales", "Fire", "None", 256, 157, 155, 261, 205, 299, ["flameThrower", "fireBlast", "fireFang", "ironTail"]);
let blaineFlareon = new Pokemon("Flareon", "Fire", "None", 240, 359, 125, 289, 225, 135, ["flameThrower", "fireBlast", "fireFang", "strength"]);
let blaineMagmar = new Pokemon("Magmar", "Fire", "None", 240, 289, 119, 299, 175, 191, ["flameThrower", "fireBlast", "firePunch", "thunderPunch"]);
let blaineCharizard = new Pokemon("Charizard", "Fire", "Flying", 266, 173, 161, 317, 175, 299, ["flameThrower", "airSlash", "fireBlast", "dragonPulse"]);
let blaine =  new Trainer("Blaine", [blaineArcanine, blaineRapidash, blaineNinetales, blaineFlareon, blaineMagmar, blaineCharizard]);

//Giovanni
let giovanniDugtrio = new Pokemon("Dugtrio", "Ground", "None", 180, 259, 105, 105, 145, 339, ["earthquake", "sludgeBomb", "rockSlide", "suckerPunch"]);
let giovanniSandslash = new Pokemon("Sandslash", "Ground", "None", 260, 299, 319, 95, 115, 135, ["earthquake", "metalClaw", "nightSlash", "dragonClaw"]);
let giovanniMarowak = new Pokemon("Marowak", "Ground", "None", 230, 259, 319, 105, 165, 95, ["earthquake", "ironHead", "thunderPunch", "firePunch"]);
let giovanniRhydon = new Pokemon("Rhydon", "Ground", "Rock", 320, 359, 339, 95, 95, 95, ["rockSlide", "earthquake", "ironHead", "strength"]);
let giovanniNidoqueen = new Pokemon("Nidoqueen", "Poison", "Ground", 290, 263, 179, 155, 269, 157, ["earthquake", "poisonJab", "ironTail", "dragonClaw"]);
let giovanniNidoking = new Pokemon("Nidoking", "Poison", "Ground", 272, 283, 159, 175, 155, 269, ["earthquake", "poisonJab", "ironHead", "dragonClaw"]);
let giovanni =  new Trainer("Giovanni", [giovanniDugtrio, giovanniSandslash, giovanniMarowak, giovanniRhydon, giovanniNidoqueen, giovanniNidoking]);

//console.log(mistyStarmie.move1);
//console.log(moves.surf);