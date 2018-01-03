/**
 * @author Sabrina Markon
 * @version 1.0
 * January 2, 2018 Happy New Year! :)
 * Pick a pokemon type and see which other types are most powerful against it.
 */ 

// all 18 pokemon types (as of January 2018)
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

// get all pokemon type names to populate the dropdown box and store in array.
//let allpokemontypes: Array<string> = [];

// make select box:
let selectbox: HTMLElement = document.createElement('select');
selectbox.id = 'pokemontype';
// empty default option:
let option = document.createElement('option');
option.value = 'none';
option.text = "Select a Pokemon Type!";
selectbox.appendChild(option);

for (var enumPokemonName in PokemonTypes) {
    //allpokemontypes.push(enumPokemonName);
    let option = document.createElement('option');
    option.value = enumPokemonName;
    option.text = enumPokemonName;
    selectbox.appendChild(option);    
 }

 //console.log(selectbox);
document.body.appendChild(selectbox);

 selectbox.onchange = (event) => {
    let selectvalue: string = (<HTMLInputElement>document.getElementById(selectbox.id)).value;
    if (selectvalue === 'none') {
        // console.log('none');
        // nothing should happen
    } else {
        console.log(selectvalue);
    }
 }

// interface for describing elements we need.
// select box is to pick the pokemon type.
interface Pokemon {
    'pokemontype': string;
    getWeaknesses(pokemontype: string): string;
}

class Weaknesses implements Pokemon {
    static alltypes = PokemonTypes;
    pokemontype: string;
    constructor(pokemontype: string) {
        this.pokemontype = pokemontype;
    }
    getWeaknesses(pokemontype: string) : string {
        let weakagainst: string; // get the right weakness when given the type.

        return weakagainst;
    }
}
