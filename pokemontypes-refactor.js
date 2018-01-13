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
 * Abstract classes are base classes from which other classes may be derived. They may not be instantiated directly.
 */
var DisplayElements = /** @class */ (function () {
    function DisplayElements(myelementrequires) {
        this.elementtype = myelementrequires.elementtype;
        this.elementidname = myelementrequires.elementidname;
        this.styles = myelementrequires.styles;
        this.options = myelementrequires.options;
        if (this.elementtype === 'img') {
            this.imgsrc = myelementrequires.options.optiondata.imgsrc;
            this.imgalt = myelementrequires.options.optiondata.imgalt;
        }
    }
    DisplayElements.prototype.makeWrapperDiv = function () {
        // create wrapper div on page to contain everything else on the page.
        var wrapperdiv = document.createElement('div');
        wrapperdiv.id = 'wrapper';
        wrapperdiv.style.cssText = 'margin: 0 auto; width: 800px; padding-top: 50px;';
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
        return addtopage;
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
        var optiondata = this.options.optiondata; // ?? not sure this is right to enforce the interface ???????? figure out!
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
var ShowWeaknesses = /** @class */ (function () {
    function ShowWeaknesses(selectvalue, weaknessdiv) {
        this.alltypes = PokemonTypes;
        this.selectvalue = selectvalue;
        this.weaknessdiv = weaknessdiv;
        this.weakagainst = this.alltypes[this.selectvalue];
        //console.log(this.weakagainst);
    }
    ShowWeaknesses.prototype.replaceWeaknessDiv = function () {
        // if there is already a weakness div showing, remove it to make way for the new one.
        // if we wanted to append instead, comment out below if block.
        if (document.getElementById('weaknessdiv')) {
            var element_1 = document.getElementById('weaknessdiv');
            element_1.parentNode.removeChild(element_1);
        }
        divobj = { elementtype: 'div', elementidname: this.weaknessdiv, styles: 'font: 18px Tahoma #000; margin: auto; padding: 20px;', options: { optiontype: 'text', optiondata: 'Weak Against:' + this.weakagainst } };
        var weaknessdivcreate = new makeDiv(divobj);
        weaknessdivcreate.addElement();
        var imageelement = document.getElementById('typeimagediv');
        imageelement.parentNode.removeChild(imageelement);
        var pokemonimgsrc = 'img/' + this.selectvalue + '.png';
        var pokemonimgalt = this.selectvalue;
        var imgobj = { elementtype: 'img', elementidname: 'typeimagediv', styles: 'width: 480px; margin: auto; padding: 20px;', options: { optiontype: 'attributes', optiondata: { imgsrc: pokemonimgsrc, imgalt: pokemonimgalt } } };
        var imgtest = new makeImage(imgobj);
        imgtest.addElement();
        ///////////////////////////////////////////////////////// START
        // fooling around because they're just cute. This block at the moment is pointless otherwise:
        // if (this.selectvalue === 'Electric') {
        //     let element = document.getElementById('testimg1');
        //     element.parentNode.removeChild(element);
        //     let imgobj: AllElementsRequire = {elementtype: 'img', elementidname: 'testimg1', styles: 'width: 480px; margin: auto; padding: 20px;', options: {optiontype: 'attributes', optiondata: {imgsrc: 'pikachu.jpg', imgalt: 'Pikachu'}}};
        //     let imgtest: makeImage = new makeImage(imgobj);
        //     imgtest.addElement();
        // } 
        // else if (this.selectvalue === 'Fairy') {
        //     let element = document.getElementById('testimg1');
        //     element.parentNode.removeChild(element);
        //     let imgobj: AllElementsRequire = {elementtype: 'img', elementidname: 'testimg1', styles: 'width: 480px; margin: auto; padding: 20px;', options: {optiontype: 'attributes', optiondata: {imgsrc: 'sylveon.png', imgalt: 'Sylveon'}}};
        //     let imgtest: makeImage = new makeImage(imgobj);
        //     imgtest.addElement();
        // } 
        // else if (this.selectvalue === 'Poison') {
        //     let element = document.getElementById('testimg1');
        //     element.parentNode.removeChild(element);
        //     let imgobj: AllElementsRequire = {elementtype: 'img', elementidname: 'testimg1', styles: 'width: 480px; margin: auto; padding: 20px;', options: {optiontype: 'attributes', optiondata: {imgsrc: 'koffing.png', imgalt: 'Koffing'}}};
        //     let imgtest: makeImage = new makeImage(imgobj);
        //     imgtest.addElement();
        // } 
        // else {
        //     let element = document.getElementById('testimg1');
        //     element.parentNode.removeChild(element);
        //     let imgobj: AllElementsRequire = {elementtype: 'img', elementidname: 'testimg1', styles: 'width: 480px; margin: auto; padding: 20px;', options: {optiontype: 'attributes', optiondata: {imgsrc: 'eevee.png', imgalt: 'Eevee'}}};
        //     let imgtest: makeImage = new makeImage(imgobj);
        //     imgtest.addElement();
        // }
        ///////////////////////////////////////////////////////// END 
    };
    return ShowWeaknesses;
}());
// testing things out:
///////////////// SELECT BOX
// Using interface type as arguments:
var selectobj = { elementtype: 'select', elementidname: 'pokemonselect', styles: 'font: 18px Tahoma #000; margin: auto; padding: 20px;', options: { optiontype: 'selectoptions', optiondata: PokemonTypes } };
var selecttest = new makeSelectBox(selectobj);
// Using regular boring arguments except one uses interface type:
// let selecttest: makeSelectBox = new makeSelectBox('select', 'testselect1', 'font: 18px Tahoma #000; margin: auto; padding: 20px;', {optiontype: 'selectoptions', optiondata: PokemonTypes});
selecttest.makeWrapperDiv(); // we need the wrapper div first that everything else nests in. Only need to do once.
selecttest.addElement();
// get the pokemon weaknesses for the selected value.
var element = document.getElementById(selecttest.elementidname);
element.onchange = function () {
    var selectvalue = document.getElementById(selecttest.elementidname).value;
    //console.log(selectvalue);
    var weaknesses = new ShowWeaknesses(selectvalue, 'weaknessdiv');
    weaknesses.replaceWeaknessDiv();
};
///////////////// DIV
// Using interface type as arguments:
var divobj = { elementtype: 'div', elementidname: 'testdiv1', styles: 'font: 18px Tahoma #000; margin: auto; padding: 20px;', options: { optiontype: 'text', optiondata: ' ' } };
var divtest = new makeDiv(divobj);
// Using regular boring arguments except one uses interface type:
// let divtest: makeDiv = new makeDiv('div', 'testdiv1', 'font: 18px Tahoma #000; margin: auto; padding: 20px;', {optiontype: 'text', optiondata: 'I like cats'});
divtest.addElement();
///////////////// IMAGE
// Using interface type as arguments:
var imgobj = { elementtype: 'img', elementidname: 'typeimagediv', styles: 'width: 480px; margin: auto; padding: 20px;', options: { optiontype: 'attributes', optiondata: { imgsrc: 'Pikachu.png', imgalt: 'Pikachu' } } };
var imgtest = new makeImage(imgobj);
// Using regular boring arguments except one uses interface type:
// let imgtest: makeImage = new makeImage('img', 'testimg1', 'margin: auto; padding: 20px;', {optiontype: 'attributes', optiondata: {imgsrc: 'pikachu.jpg', imgalt: 'Pikachu'}});
imgtest.addElement();
