/**
 * @author Sabrina Markon
 * @version 1.0
 * January 2, 2018 Happy New Year! :)
 * Pick a pokemon type and see which other types are most powerful against it.
 */
// all 18 pokemon types and weaknesses (as of January 2018)
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
var Weaknesses = /** @class */ (function () {
    function Weaknesses(pokemontype, weaknessdiv) {
        this.pokemontype = pokemontype;
        this.weaknessdiv = weaknessdiv;
    }
    Weaknesses.prototype.getWeaknesses = function (pokemontype, weaknessdiv) {
        // get the right weakness when given the type.
        var weakagainst = Weaknesses.alltypes[pokemontype];
        console.log(weakagainst);
        document.getElementById(weaknessdiv).textContent = weakagainst;
        return weakagainst;
    };
    Weaknesses.alltypes = PokemonTypes;
    return Weaknesses;
}());
// get all pokemon type names to build the dropdown box.
// make select box:
var selectbox = document.createElement('select');
selectbox.id = 'pokemontype';
// add default option:
var option = document.createElement('option');
option.value = 'none';
option.text = "Select a Pokemon Type!";
selectbox.appendChild(option);
// add each pokemon option:
for (var enumPokemonName in PokemonTypes) {
    //allpokemontypes.push(enumPokemonName);
    var option_1 = document.createElement('option');
    option_1.value = enumPokemonName;
    option_1.text = enumPokemonName;
    selectbox.appendChild(option_1);
}
// put the select box on the page.
//console.log(selectbox);
document.body.appendChild(selectbox);
var div = document.createElement('div');
var weaknessdiv = 'weaknessdiv';
div.id = weaknessdiv;
document.body.appendChild(div);
// when the user changes the pokemon type in the dropdown box.
selectbox.onchange = function (event) {
    var selectvalue = document.getElementById(selectbox.id).value;
    if (selectvalue === 'none') {
        // console.log('none');
        // nothing should happen
    }
    else {
        //console.log(selectvalue);
        var weaknesses = new Weaknesses(selectvalue, weaknessdiv);
        weaknesses.getWeaknesses(selectvalue, weaknessdiv);
    }
};
