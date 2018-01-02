// Pick a pokemon type and see which other types are most powerful against it.

// list of all 18 pokemon types (as of January 2018)
enum allTypes {
    Bug,
    Electric,
    Fire,
    Grass,
    Normal,
    Rock,
    Dark,
    Fairy,
    Flying,
    Ground,
    Poison,
    Steel,
    Dragon,
    Fighting,
    Ghost,
    Ice,
    Psychic,
    Water
}

// interface for describing elements we need.
// select box is to pick the pokemon type.
interface Elements {
    'div': Element,
    'button': Element,
    'select': Element
}

class pickPokemon implements Elements {
    div: Element;
    button: Element;
    select: Element;
    constructor(div: Element, button: Element, select: Element) {
        this.div = div;
        this.button = button;
        this.select = select;
    }
}

class pokemonPicker extends pickPokemon {
    constructor(div: Element, button: Element, select: Element) {
      super(div, button, select);
    }
}