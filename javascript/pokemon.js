// Classes
class Pokemon {
    constructor(name, type1, type2, hp, att, def, satt, sdef, spd, moveset) {
        this.name = name;
        this.type1 = type1;
        this.type2 = type2;
        this.hp = hp;
        this. att = att;
        this.def = def;
        this. satt = satt;
        this.sdef = sdef;
        this.spd = spd;
        this.move1 = moveset[0];
        this.move2 = moveset[1];
        this.move3 = moveset[2];
        this.move4 = moveset[3];
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
    earthquake: ["Earthquake", "Ground", "physical", 10, 100, 100]
}