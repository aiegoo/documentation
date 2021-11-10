const sam3 = {
    name: 'Sam',
    classification: { // property values can
        kingdom: 'Anamalia', // be objects themselves
        phylum: 'Chordata',
        class: 'Mamalia',
        order: 'Carnivoria',
        family: 'Felidae',
        subfaimily: 'Felinae',
        genus: 'Felis',
        species: 'catus',
    },
};

console.log(sam3.classification.family) // "Felidae"
console.log(sam3["classification"].family) // "Felidae"
console.log(sam3.classification["family"]) // "Felidae"
console.log(sam3["classification"]["family"]) // "Felidae"

sam3.speak = function() { return "Meow!"; };
console.log(sam3.speak())

delete sam3.classification; // the whole classification tree is removed
console.log(sam3.classification.family)//TypeError: Cannot read property 'family' of undefined
