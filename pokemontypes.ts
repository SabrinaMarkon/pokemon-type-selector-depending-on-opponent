/**
 * @author Sabrina Markon
 * @version 1.0
 * January 2, 2018 Happy New Year! :)
 * Pick a pokemon type and see which other types are most powerful against it.
 */ 

// all 18 pokemon types and weaknesses (as of January 2018)
enum PokemonTypes {
    Bug = 'Fire, Flying, Rock',
    Electric = 'Ground',
    Fire = 'Water, Ground, Rock',
    Grass = 'Fire, Ice, Poison, Flying, Bug',
    Normal = 'Fighting',
    Rock = 'Water, Grass, Fighting, Ground, Steel',
    Dark = 'Fighting, Bug, Fairy',
    Fairy = 'Poison, Steel',
    Flying = 'Electric, Ice, Rock',
    Ground = 'Water, Grass, Ice',
    Poison = 'Ground, Psychic',
    Steel = 'Fire, Fight, Ground',
    Dragon = 'Ice, Dragon, Fairy',
    Fighting = 'Fying, Psychic, Fairy',
    Ghost = 'Ghost, Dark',
    Ice = 'Fire, Fight, Rock, Steel',
    Psychic = 'Bug, Ghost, Dark',
    Water = 'Electric, Grass'
}

// interface for describing elements we need.
// select box is to pick the pokemon type.
interface Pokemon {
    'pokemontype': string;
    getWeaknesses(pokemontype: string, weaknessdiv: string): string;
}

class Weaknesses implements Pokemon {
    static alltypes = PokemonTypes;
    pokemontype: string;
    weaknessdiv: string;
    constructor(pokemontype: string, weaknessdiv: string) {
        this.pokemontype = pokemontype;
        this.weaknessdiv = weaknessdiv;
    }
    getWeaknesses(pokemontype: string, weaknessdiv: string) : string {
        // get the right weakness when given the type.
        let weakagainst: string = Weaknesses.alltypes[pokemontype];
        console.log(weakagainst);
        document.getElementById(weaknessdiv).textContent = weakagainst;
        return weakagainst;
    }
}

let wrapperdiv: HTMLElement = document.createElement('div');
wrapperdiv.id = 'wrapper';
document.body.appendChild(wrapperdiv);
wrapperdiv.style.cssText = 'margin: 0 auto; width: 300px;';

// get all pokemon type names to build the dropdown box.
// make select box:
let selectboxdiv: HTMLElement = document.createElement('select');
selectboxdiv.id = 'pokemontype';
selectboxdiv.style.cssText = 'font: 18px Tahoma #000; margin: auto; padding: 20px;';
// add default option:
let option = document.createElement('option');
option.value = 'none';
option.text = "Select a Pokemon Type!";
selectboxdiv.appendChild(option);
// add each pokemon option:
for (var enumPokemonName in PokemonTypes) {
    //allpokemontypes.push(enumPokemonName);
    let option = document.createElement('option');
    option.value = enumPokemonName;
    option.text = enumPokemonName;
    selectboxdiv.appendChild(option);    
 }
 // put the select box on the page.
 //console.log(selectboxdiv);
document.getElementById(wrapperdiv.id).appendChild(selectboxdiv);

let div: HTMLElement = document.createElement('div');
let weaknessdiv: string = 'weaknessdiv';
div.id = weaknessdiv;
document.getElementById(wrapperdiv.id).appendChild(div);
div.style.cssText = 'font: 18px Tahoma #000; margin: auto; padding: 20px;';

// when the user changes the pokemon type in the dropdown box.
 selectboxdiv.onchange = (event) => {
    let selectvalue: string = (<HTMLInputElement>document.getElementById(selectboxdiv.id)).value;
    if (selectvalue === 'none') {
        // console.log('none');
        // nothing should happen
    } else {
        //console.log(selectvalue);
        let weaknesses: Weaknesses = new Weaknesses(selectvalue, weaknessdiv);
        weaknesses.getWeaknesses(selectvalue, weaknessdiv);
    }
 }
