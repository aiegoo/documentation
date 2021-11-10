function getSentence({ subject, verb, object }) {
    console.log( `${subject} ${verb} ${object}`);
}
const o = {
    subject: "I",
    verb: "love",
    object: "JavaScript",
};
getSentence(o); // "I love JavaScript"