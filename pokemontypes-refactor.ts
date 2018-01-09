/**
 * @author Sabrina Markon
 * @version 2.0
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
    Fighting = 'Flying, Psychic, Fairy',
    Ghost = 'Ghost, Dark',
    Ice = 'Fire, Fight, Rock, Steel',
    Psychic = 'Bug, Ghost, Dark',
    Water = 'Electric, Grass'
}

enum CatTypes {
    Squeebz, Benji, Nigel, Bean
}
//// REFACTOR 1 to try to make oop code more reuseable.
//// "If tomorrow I write another program, will I be able to reuse some of this code?"


/**
 * Interface Responsibility: Defines types of elements and their properties that should be used.
 * 
 * Classes can use these to build page elements and display them.
 */
interface AllElementsRequire {
    elementtype: string;
    elementidname: string;
    styles: string;
    options: AllOptionsRequire;
}

/**
 * Interface Responsibility: Defines the two fields needed to customize
 * an html element, such as options for a select box, text for a div, etc.
 * 
 * The AllElementsRequire interface includes these in the optional options field.
 */
interface AllOptionsRequire {
    optiontype: string;
    optiondata?: any;
}

/**
 * Interface Responsibility: Defines the attributes needed for an image.
 * 
 * The AllOptionsRequire interface includes these in the optional optiondata field. 
 * Well..we'll see about this..if I can manage it.
 */
interface AllImagesRequire {
    imgsrc: string;
    imgalt: string;
}

/**
 * Class Responsibility: Populating fields to build the html element, and
 * build the wrapper div that encloses all other html elements. 
 * Abstract classes are base classes from which other classes may be derived. They may not be instantiated directly.
 */
abstract class DisplayElements {
    elementtype: string;
    elementidname: string;
    styles: string;
    options: AllOptionsRequire;
    imgsrc: AllImagesRequire;
    imgalt: AllImagesRequire;
    constructor(myelementrequires: AllElementsRequire) {
        this.elementtype = myelementrequires.elementtype;
        this.elementidname = myelementrequires.elementidname;
        this.styles = myelementrequires.styles;
        this.options = myelementrequires.options;
        if (this.elementtype === 'img') {
            this.imgsrc = myelementrequires.options.optiondata.imgsrc;
            this.imgalt = myelementrequires.options.optiondata.imgalt;
        }
    }
    makeWrapperDiv() {
        // create wrapper div on page to contain everything else on the page.
        let wrapperdiv: HTMLElement = document.createElement('div');
        wrapperdiv.id = 'wrapper';
        //wrapperdiv.style.cssText = 'margin: 0 auto; width: 300px; padding-top: 50px;'; - maybe don't want here.
        document.body.appendChild(wrapperdiv);
    }
    addAllToPage(addtopage) {
        // print all the html elements in the array to the page.


        

    }
}

/**
 * Class Responsibility: Create a select box.
 */
class makeSelectBox extends DisplayElements {
    addElement(): HTMLElement {
        let addtopage: HTMLElement = document.createElement(this.elementtype); // select
        addtopage.id = this.elementidname;
        // make the top default option in the select box:
        let defaultoption = document.createElement('option');
        defaultoption.value = '';
        defaultoption.text = 'Select one...';
        addtopage.appendChild(defaultoption);
        // make all the other options in the select box:
        for (var enumItemName in this.options.optiondata) {
            // only use the names in the enum.
            if (isNaN(parseInt(enumItemName, 10))) {
                let option = document.createElement('option');
                option.value = enumItemName;
                option.text = enumItemName;
                addtopage.appendChild(option);     
            }
        }
        // add the styles:
        addtopage.style.cssText = this.styles; 
        document.getElementById('wrapper').appendChild(addtopage);
        return addtopage;
    }
}

 /**
  * Class Responsibility: Create a div.
  */
class makeDiv extends DisplayElements {
    addElement(): void {
        let addtopage: HTMLElement = document.createElement(this.elementtype); // div
        addtopage.id = this.elementidname;
        // write the text, which is in optiondata, into the div.
        addtopage.textContent = this.options.optiondata;
        // add the styles:
        addtopage.style.cssText = this.styles;
        document.getElementById('wrapper').appendChild(addtopage);
        return;
    }
}

 /**
  * Class Responsibility: Create an image.
  */
  class makeImage extends DisplayElements {
    addElement(): void {
        let addtopage: HTMLElement = document.createElement(this.elementtype); // img
        addtopage.id = this.elementidname;
        // add the styles:
        addtopage.style.cssText = this.styles;
        // add the src and alt attributes, which ar e contained in an AllImagesRequire object in optiondata.
        let optiondata: AllImagesRequire = this.options.optiondata; // ?? not sure this is right to enforce the interface ???????? figure out!
        addtopage.setAttribute('src', optiondata.imgsrc);
        addtopage.setAttribute('alt', optiondata.imgalt);
        document.getElementById('wrapper').appendChild(addtopage);
        return;
    }
}

/**
 * Class Responsibility: Show weaknesses of selected pokemon type.
 */
class ShowWeaknesses {
    alltypes: object = PokemonTypes;
    selectvalue: string;
    weaknessdiv: string;
    weakagainst: string;
    constructor(selectvalue: string, weaknessdiv: string) {
        this.selectvalue = selectvalue;
        this.weaknessdiv = weaknessdiv;
        this.weakagainst = this.alltypes[this.selectvalue];
        console.log(this.weakagainst);
    }
    makeWeaknessDiv() : void {
        divobj = <AllElementsRequire>{elementtype: 'div', elementidname: this.weaknessdiv, styles: 'font: 18px Tahoma #000; margin: auto; padding: 20px;', options: {optiontype: 'text', optiondata: this.weakagainst}};
        let weaknessdivcreate: makeDiv = new makeDiv(divobj);
        weaknessdivcreate.addElement();
    }
}


// testing things out:


///////////////// SELECT BOX

// Using interface type as arguments:
let selectobj: AllElementsRequire = {elementtype: 'select', elementidname: 'pokemonselect', styles: 'font: 18px Tahoma #000; margin: auto; padding: 20px;', options: {optiontype: 'selectoptions', optiondata: PokemonTypes}};

let selecttest: makeSelectBox = new makeSelectBox(selectobj);

// Using regular boring arguments except one uses interface type:
// let selecttest: makeSelectBox = new makeSelectBox('select', 'testselect1', 'font: 18px Tahoma #000; margin: auto; padding: 20px;', {optiontype: 'selectoptions', optiondata: PokemonTypes});

selecttest.makeWrapperDiv(); // we need the wrapper div first that everything else nests in. Only need to do once.
selecttest.addElement();

// get the pokemon weaknesses for the selected value.
let element: HTMLElement = document.getElementById(selecttest.elementidname);

element.onchange = function () {
    let selectvalue: string = (<HTMLInputElement>document.getElementById(selecttest.elementidname)).value;
    //console.log(selectvalue);
    let weaknesses: ShowWeaknesses = new ShowWeaknesses(selectvalue, 'weaknessdiv');
    weaknesses.makeWeaknessDiv();
}

///////////////// DIV

// Using interface type as arguments:
let divobj: AllElementsRequire = {elementtype: 'div', elementidname: 'testdiv1', styles: 'font: 18px Tahoma #000; margin: auto; padding: 20px;', options: {optiontype: 'text', optiondata: 'I like cats!'}};

let divtest: makeDiv = new makeDiv(divobj);

// Using regular boring arguments except one uses interface type:
// let divtest: makeDiv = new makeDiv('div', 'testdiv1', 'font: 18px Tahoma #000; margin: auto; padding: 20px;', {optiontype: 'text', optiondata: 'I like cats'});

divtest.addElement();

///////////////// IMAGE

// Using interface type as arguments:
let imgobj: AllElementsRequire = {elementtype: 'img', elementidname: 'testimg1', styles: 'margin: auto; padding: 20px;', options: {optiontype: 'attributes', optiondata: {imgsrc: 'pikachu.jpg', imgalt: 'Pikachu'}}};

let imgtest: makeImage = new makeImage(imgobj);

// Using regular boring arguments except one uses interface type:
// let imgtest: makeImage = new makeImage('img', 'testimg1', 'margin: auto; padding: 20px;', {optiontype: 'attributes', optiondata: {imgsrc: 'pikachu.jpg', imgalt: 'Pikachu'}});

imgtest.addElement();


