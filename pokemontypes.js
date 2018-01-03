// Pick a pokemon type and see which other types are most powerful against it.
// all 18 pokemon types (as of January 2018)
var PokemonType;
(function (PokemonType) {
    PokemonType["Bug"] = "Fire, Flying, Rock";
    PokemonType["Electric"] = "Ground";
    PokemonType["Fire"] = "Water, Ground, Rock";
    PokemonType["Grass"] = "Fire, Ice, Poison, Flying, Bug";
    PokemonType["Normal"] = "Fighting";
    PokemonType["Rock"] = "Water, Grass, Fighting, Ground, Steel";
    PokemonType["Dark"] = "Fighting, Bug, Fairy";
    PokemonType["Fairy"] = "Poison, Steel";
    PokemonType["Flying"] = "Electric, Ice, Rock";
    PokemonType["Ground"] = "Water, Grass, Ice";
    PokemonType["Poison"] = "Ground, Psychic";
    PokemonType["Steel"] = "Fire, Fight, Ground";
    PokemonType["Dragon"] = "Ice, Dragon, Fairy";
    PokemonType["Fighting"] = "Fying, Psychic, Fairy";
    PokemonType["Ghost"] = "Ghost, Dark";
    PokemonType["Ice"] = "Fire, Fight, Rock, Steel";
    PokemonType["Psychic"] = "Bug, Ghost, Dark";
    PokemonType["Water"] = "Electric, Grass";
})(PokemonType || (PokemonType = {}));
var p = PokemonType.Poison;
alert(p);
var PokemonWeaknesses = /** @class */ (function () {
    function PokemonWeaknesses(pokemontype) {
        this.pokemontype = pokemontype;
    }
    PokemonWeaknesses.prototype.getWeaknesses = function (pokemontype) {
        var weakagainst; // get the right weakness when given the type.
        return weakagainst;
    };
    return PokemonWeaknesses;
}());
