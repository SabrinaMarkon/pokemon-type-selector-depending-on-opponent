/**
 * @author Sabrina Markon
 * @version 2.0
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
    PokemonTypes["Fighting"] = "Flying, Psychic, Fairy";
    PokemonTypes["Ghost"] = "Ghost, Dark";
    PokemonTypes["Ice"] = "Fire, Fight, Rock, Steel";
    PokemonTypes["Psychic"] = "Bug, Ghost, Dark";
    PokemonTypes["Water"] = "Electric, Grass";
})(PokemonTypes || (PokemonTypes = {}));
/**
 * Class Responsibility: Show default display and select.
 */
var DisplayElements = /** @class */ (function () {
    function DisplayElements(elementtype, elementid, styles) {
        this.elementtype = elementtype;
        // create wrapper div on page.
        var wrapperdiv = document.createElement('div');
        document.body.appendChild(wrapperdiv);
    }
    DisplayElements.prototype.displayElement = function (elementtype, elementid, styles) {
        var printtopage = document.createElement(elementtype);
        printtopage.id = elementid;
        printtopage.style.cssText = styles;
        document.getElementById('wrapper').appendChild(printtopage);
        return elementtype;
    };
    return DisplayElements;
}());
/**
 * Class Responsibility: Show weaknesses of selected pokemon type.
 */
var ShowWeakneses = /** @class */ (function () {
    function ShowWeakneses() {
    }
    return ShowWeakneses;
}());
