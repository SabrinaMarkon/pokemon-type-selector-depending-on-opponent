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
 * Class Responsibility: Show default page display.
 *
 * In this particular app, the select box
 * for the pokemon types and the div where the weaknesses will show should be created.
 * Code could be reused, however, to build other elements.
 */
var DisplayElements = /** @class */ (function () {
    function DisplayElements() {
        // create wrapper div on page.
        var wrapperdiv = document.createElement('div');
        wrapperdiv.id = 'wrapper';
        wrapperdiv.style.cssText = 'margin: 0 auto; width: 300px; padding-top: 50px;';
        document.body.appendChild(wrapperdiv);
    }
    DisplayElements.prototype.displayElement = function (elementtype, elementid, styles, options) {
        var printtopage = document.createElement(elementtype);
        printtopage.id = elementid;
        // if the element type is a select box and there is an options enum with items in it, use
        // them to populate the select box with its options.
        if (elementtype === 'select') {
            for (var enumItemName in options) {
                var option = document.createElement('option');
                option.value = enumItemName;
                option.text = enumItemName;
                printtopage.appendChild(option);
            }
        }
        // the Element type does not support the 'style' property so cast to HTMLElement.
        // Could have done in the first place, but wanted to practice type casting.
        printtopage.style.cssText = styles;
        document.getElementById('wrapper').appendChild(printtopage);
        return;
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
// works:
var test = new DisplayElements();
test.displayElement('select', 'testselect', 'font: 18px Tahoma #000; margin: auto; padding: 20px;', PokemonTypes);
