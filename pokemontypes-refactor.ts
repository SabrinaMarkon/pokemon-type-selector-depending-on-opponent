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

//// REFACTOR 1 (again, I'm practicing so excuse the mess)
//// "If tomorrow I write another program, will I be able to reuse some of this code?"


/**
 * Interface Responsibility: Defines types of elements and their properties that should be used.
 */
interface PageElements {
    'elementtype': string;
    'elementid': string;
    'styles': string;
}

/**
 * Class Responsibility: Show default display and select.
 */
class DisplayElements implements PageElements {
    elementtype: string;
    elementid: string;
    styles: string;
    constructor(elementtype: string, elementid: string, styles: string) {
        this.elementtype = elementtype;
        // create wrapper div on page.
        let wrapperdiv: Element = document.createElement('div');
        document.body.appendChild(wrapperdiv);
    }
    displayElement(elementtype: string, elementid: string, styles: string) : string {
        let printtopage: Element = document.createElement(elementtype);
        printtopage.id = elementid;
        (printtopage as HTMLElement).style.cssText = styles;
        document.getElementById('wrapper').appendChild(printtopage);
        return elementtype;
    }
}

/**
 * Class Responsibility: Show weaknesses of selected pokemon type.
 */
class ShowWeakneses {

}