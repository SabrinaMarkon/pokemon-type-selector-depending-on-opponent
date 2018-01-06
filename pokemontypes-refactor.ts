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
    'elementtype': string;
    'elementidname': string;
    'styles': string;
    'options'?: AllOptionsRequire;
}

/**
 * Interface Responsibility: Defines the two fields needed to customize
 * an html element, such as options for a select box, text for a div, etc.
 * 
 * The AllElementsRequire interface includes these in the optional options field.
 */
interface AllOptionsRequire {
    optiontype: string;
    optiondata: object;
}

/**
 * Class Responsibility: Populating fields to build the html element, and
 * build the wrapper div that encloses all other html elements. 
 */
class DisplayElements {
    elementtype: string;
    elementidname: string;
    styles: string;
    options: AllOptionsRequire;
    constructor(myelementrequires: AllElementsRequire) {
        this.elementtype = myelementrequires.elementtype;
        this.elementidname = myelementrequires.elementidname;
        this.styles = myelementrequires.styles;
        this.options = myelementrequires.options;
    }
    makeWrapperDiv() {
        // create wrapper div on page to contain everything else on the page.
        let wrapperdiv: HTMLElement = document.createElement('div');
        wrapperdiv.id = 'wrapper';
        //wrapperdiv.style.cssText = 'margin: 0 auto; width: 300px; padding-top: 50px;'; - maybe don't want here.
        document.body.appendChild(wrapperdiv);
    }
}

/**
 * Class Responsibility: Create a select box.
 */
class makeSelectBox extends DisplayElements {
    addElement(elementidname: string, styles: string, options: object): void {
        let elementtype: string = 'select';
        let addtopage: HTMLElement = document.createElement(elementtype);
        addtopage.id = elementidname;
        let defaultoption = document.createElement('option');
        defaultoption.value = '';
        defaultoption.text = 'Select one...';
        addtopage.appendChild(defaultoption);
        for (var enumItemName in options) {
            // only use the names in the enum.
            if (isNaN(parseInt(enumItemName, 10))) {
                let option = document.createElement('option');
                option.value = enumItemName;
                option.text = enumItemName;
                addtopage.appendChild(option);     
            }
        }
        addtopage.style.cssText = styles; 
        document.getElementById('wrapper').appendChild(addtopage);
        return;
    }
}

 /**
  * Class Responsibility: Create a div.
  */
class makeDiv extends DisplayElements {
}


/**
 * Class Responsibility: Show weaknesses of selected pokemon type.
 */
class ShowWeakneses {

}


// works:
let selecttest: makeSelectBox = new makeSelectBox();
// for each item we want to add, execute displayElement()
selecttest.addElement('testselect', 'font: 18px Tahoma #000; margin: auto; padding: 20px;', PokemonTypes);

//selecttest.addElement('div1', 'font: 18px Tahoma #000; margin: auto; padding: 20px;', null); // need to pass content!

selecttest.addElement('testselect2', 'font: 18px Tahoma #000; margin: auto; padding: 20px;', CatTypes);

//selecttest.addElement('div2', 'font: 18px Tahoma #000; margin: auto; padding: 20px;', null);