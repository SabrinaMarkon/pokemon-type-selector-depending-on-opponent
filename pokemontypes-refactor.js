/**
 * @author Sabrina Markon
 * @version 2.0
 * January 2, 2018 Happy New Year! :)
 * Pick a pokemon type and see which other types are most powerful against it.
 */
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var CatTypes;
(function (CatTypes) {
    CatTypes[CatTypes["Squeebz"] = 0] = "Squeebz";
    CatTypes[CatTypes["Benji"] = 1] = "Benji";
    CatTypes[CatTypes["Nigel"] = 2] = "Nigel";
    CatTypes[CatTypes["Bean"] = 3] = "Bean";
})(CatTypes || (CatTypes = {}));
/**
 * Class Responsibility: Show default page display.
 *
 * In this particular app, the select box
 * for the pokemon types and the div where the weaknesses will show should be created.
 * Code could be reused, however, to build other elements.
 */
var DisplayElements = /** @class */ (function () {
    function DisplayElements() {
        // create wrapper div on page to contain the rest of it.
        var wrapperdiv = document.createElement('div');
        wrapperdiv.id = 'wrapper';
        wrapperdiv.style.cssText = 'margin: 0 auto; width: 300px; padding-top: 50px;';
        document.body.appendChild(wrapperdiv);
    }
    return DisplayElements;
}());
/**
 * Class Responsibility: Create a select box.
 */
var makeSelectBox = /** @class */ (function (_super) {
    __extends(makeSelectBox, _super);
    function makeSelectBox() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    makeSelectBox.prototype.addElement = function (elementidname, styles, options) {
        var elementtype = 'select';
        var addtopage = document.createElement(elementtype);
        addtopage.id = elementidname;
        var defaultoption = document.createElement('option');
        defaultoption.value = '';
        defaultoption.text = 'Select one...';
        addtopage.appendChild(defaultoption);
        for (var enumItemName in options) {
            // only use the names in the enum.
            if (isNaN(parseInt(enumItemName, 10))) {
                var option = document.createElement('option');
                option.value = enumItemName;
                option.text = enumItemName;
                addtopage.appendChild(option);
            }
        }
        addtopage.style.cssText = styles;
        document.getElementById('wrapper').appendChild(addtopage);
        return;
    };
    return makeSelectBox;
}(DisplayElements));
/**
 * Class Responsibility: Create a div.
 */
var makeDiv = /** @class */ (function (_super) {
    __extends(makeDiv, _super);
    function makeDiv() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return makeDiv;
}(DisplayElements));
/**
 * Class Responsibility: Show weaknesses of selected pokemon type.
 */
var ShowWeakneses = /** @class */ (function () {
    function ShowWeakneses() {
    }
    return ShowWeakneses;
}());
// works:
//let wrappertest: DisplayElements = new DisplayElements();
var selecttest = new makeSelectBox();
// for each item we want to add, execute displayElement()
selecttest.addElement('testselect', 'font: 18px Tahoma #000; margin: auto; padding: 20px;', PokemonTypes);
//selecttest.addElement('div1', 'font: 18px Tahoma #000; margin: auto; padding: 20px;', null); // need to pass content!
selecttest.addElement('testselect2', 'font: 18px Tahoma #000; margin: auto; padding: 20px;', CatTypes);
//selecttest.addElement('div2', 'font: 18px Tahoma #000; margin: auto; padding: 20px;', null); 
