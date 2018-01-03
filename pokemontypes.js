/**
 * @author Sabrina Markon
 * @version 1.0
 * January 2, 2018 Happy New Year! :)
 * Pick a pokemon type and see which other types are most powerful against it.
 */
// all 18 pokemon types (as of January 2018)
var PokemonTypes;
(function (PokemonTypes) {
    PokemonTypes["Bug"] = "Fire, Flying, Rock";
    PokemonTypes["Electric"] = "Ground";
    PokemonTypes["Fire"] = "Water, Ground, Rock";
    PokemonTypes["Grass"] = "Fire, Ice, Poison, Flying, Bug";
    PokemonTypes["Normal"] = "Fighting";
    PokemonTypes["Rock"] = "Water, Grass, Fighting, Ground, Steel";
    PokemonTypes["Dark"] = "Fighting, Bug, Fairy";
    PokemonTypes["Fairy"] = "Poison, Steel";
    PokemonTypes["Flying"] = "Electric, Ice, Rock";
    PokemonTypes["Ground"] = "Water, Grass, Ice";
    PokemonTypes["Poison"] = "Ground, Psychic";
    PokemonTypes["Steel"] = "Fire, Fight, Ground";
    PokemonTypes["Dragon"] = "Ice, Dragon, Fairy";
    PokemonTypes["Fighting"] = "Fying, Psychic, Fairy";
    PokemonTypes["Ghost"] = "Ghost, Dark";
    PokemonTypes["Ice"] = "Fire, Fight, Rock, Steel";
    PokemonTypes["Psychic"] = "Bug, Ghost, Dark";
    PokemonTypes["Water"] = "Electric, Grass";
})(PokemonTypes || (PokemonTypes = {}));
// get all pokemon type names to populate the dropdown box and store in array.
//let allpokemontypes: Array<string> = [];
// make select box:
var selectbox = document.createElement('select');
selectbox.id = 'pokemontype';
// empty default option:
var option = document.createElement('option');
option.value = 'none';
option.text = "Select a Pokemon Type!";
selectbox.appendChild(option);
for (var enumPokemonName in PokemonTypes) {
    //allpokemontypes.push(enumPokemonName);
    var option_1 = document.createElement('option');
    option_1.value = enumPokemonName;
    option_1.text = enumPokemonName;
    selectbox.appendChild(option_1);
}
//console.log(selectbox);
document.body.appendChild(selectbox);
selectbox.onchange = function (event) {
    var selectvalue = document.getElementById(selectbox.id).value;
    if (selectvalue === 'none') {
        // console.log('none');
        // nothing should happen
    }
    else {
        console.log(selectvalue);
    }
};
var Weaknesses = /** @class */ (function () {
    function Weaknesses(pokemontype) {
        this.pokemontype = pokemontype;
    }
    Weaknesses.prototype.getWeaknesses = function (pokemontype) {
        var weakagainst; // get the right weakness when given the type.
        return weakagainst;
    };
    Weaknesses.alltypes = PokemonTypes;
    return Weaknesses;
}());
