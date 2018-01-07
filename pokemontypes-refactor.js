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
 * Class Responsibility: Populating fields to build the html element, and
 * build the wrapper div that encloses all other html elements.
 */
var DisplayElements = /** @class */ (function () {
    function DisplayElements(myelementrequires) {
        this.elementtype = myelementrequires.elementtype;
        this.elementidname = myelementrequires.elementidname;
        this.styles = myelementrequires.styles;
        this.options = myelementrequires.options;
    }
    // old way: passed arguments directly into constructor rather than interface parameter.
    // constructor(elementtype: string, elementidname: string, styles: string, options: AllOptionsRequire) {
    //         this.elementtype = elementtype;
    //         this.elementidname = elementidname;
    //         this.styles = styles;
    //         this.options = options;
    //         this.options.optiontype = options.optiontype; 
    //         this.options.optiondata = options.optiondata;
    // }
    DisplayElements.prototype.makeWrapperDiv = function () {
        // create wrapper div on page to contain everything else on the page.
        var wrapperdiv = document.createElement('div');
        wrapperdiv.id = 'wrapper';
        //wrapperdiv.style.cssText = 'margin: 0 auto; width: 300px; padding-top: 50px;'; - maybe don't want here.
        document.body.appendChild(wrapperdiv);
    };
    DisplayElements.prototype.addAllToPage = function (addtopage) {
        // print all the html elements in the array to the page.
    };
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
    makeSelectBox.prototype.addElement = function () {
        var addtopage = document.createElement(this.elementtype); // select
        addtopage.id = this.elementidname;
        // make the top default option in the select box:
        var defaultoption = document.createElement('option');
        defaultoption.value = '';
        defaultoption.text = 'Select one...';
        addtopage.appendChild(defaultoption);
        // make all the other options in the select box:
        for (var enumItemName in this.options.optiondata) {
            // only use the names in the enum.
            if (isNaN(parseInt(enumItemName, 10))) {
                var option = document.createElement('option');
                option.value = enumItemName;
                option.text = enumItemName;
                addtopage.appendChild(option);
            }
        }
        // add the styles:
        addtopage.style.cssText = this.styles;
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
    makeDiv.prototype.addElement = function () {
        var addtopage = document.createElement(this.elementtype); // div
        addtopage.id = this.elementidname;
        // write the text, which is in optiondata, into the div.
        addtopage.textContent = this.options.optiondata;
        // add the styles:
        addtopage.style.cssText = this.styles;
        document.getElementById('wrapper').appendChild(addtopage);
        return;
    };
    return makeDiv;
}(DisplayElements));
/**
 * Class Responsibility: Create an image.
 */
var makeImage = /** @class */ (function (_super) {
    __extends(makeImage, _super);
    function makeImage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    makeImage.prototype.addElement = function () {
        var addtopage = document.createElement(this.elementtype); // img
        addtopage.id = this.elementidname;
        // add the styles:
        addtopage.style.cssText = this.styles;
        // add the src and alt attributes, which ar e contained in an AllImagesRequire object in optiondata.
        var optiondata = this.options.optiondata; // ?? not sure this is right to enforce the intaerface.
        addtopage.setAttribute('src', optiondata.imgsrc);
        addtopage.setAttribute('alt', optiondata.imgalt);
        document.getElementById('wrapper').appendChild(addtopage);
        return;
    };
    return makeImage;
}(DisplayElements));
/**
 * Class Responsibility: Show weaknesses of selected pokemon type.
 */
var ShowWeakneses = /** @class */ (function () {
    function ShowWeakneses() {
    }
    return ShowWeakneses;
}());
// testing things out:
///////////////// SELECT BOX
// Using interface type as arguments:
var selectobj = { elementtype: 'select', elementidname: 'testselect1', styles: 'font: 18px Tahoma #000; margin: auto; padding: 20px;', options: { optiontype: 'selectoptions', optiondata: PokemonTypes } };
var selecttest = new makeSelectBox(selectobj);
// Using regular boring arguments except one uses interface type:
// let selecttest: makeSelectBox = new makeSelectBox('select', 'testselect1', 'font: 18px Tahoma #000; margin: auto; padding: 20px;', {optiontype: 'selectoptions', optiondata: PokemonTypes});
selecttest.makeWrapperDiv(); // we need the wrapper div first that everything else nests in. Only need to do once.
selecttest.addElement();
///////////////// DIV
// Using interface type as arguments:
var divobj = { elementtype: 'div', elementidname: 'testdiv1', styles: 'font: 18px Tahoma #000; margin: auto; padding: 20px;', options: { optiontype: 'text', optiondata: 'I like cats!' } };
var divtest = new makeDiv(divobj);
// Using regular boring arguments except one uses interface type:
// let divtest: makeDiv = new makeDiv('div', 'testdiv1', 'font: 18px Tahoma #000; margin: auto; padding: 20px;', {optiontype: 'text', optiondata: 'I like cats'});
divtest.addElement();
///////////////// IMAGE
// Using interface type as arguments:
var imgobj = { elementtype: 'img', elementidname: 'testimg1', styles: 'margin: auto; padding: 20px;', options: { optiontype: 'attributes', optiondata: { imgsrc: 'pikachu.jpg', imgalt: 'Pikachu' } } };
var imgtest = new makeImage(imgobj);
// Using regular boring arguments except one uses interface type:
// let imgtest: makeImage = new makeImage('img', 'testimg1', 'margin: auto; padding: 20px;', {optiontype: 'attributes', optiondata: {imgsrc: 'pikachu.jpg', imgalt: 'Pikachu'}});
imgtest.addElement();
