const pt = require('periodic-table');

const ELEMENTS = pt.all();

ELEMENTS.forEach(ELEMENT => {ELEMENT.id = ELEMENT.atomicNumber})

export default ELEMENTS;
