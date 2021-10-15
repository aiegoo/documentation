const bruce = { name: "Bruce" };
const madeline = { name: "Madeline" };

function greet() { return `Hello, I'm ${this.name}!`; }

function life_story() {
  return `Hello, I'm ${this.name}. I was born in ${this.birthYear} and I work as a ${this.occupation}.`;
}


function update(birthYear, occupation) {
  this.birthYear  = birthYear;
  this.occupation = occupation;
}

console.log(greet());
console.log(greet.call(bruce));
console.log(greet.call(madeline));

update.call(bruce, 1949, 'singer');
update.call(madeline, [1942, 'actress']);
update.apply(bruce, [1955, 'actor']);
update.apply(madeline, [1918, 'writer']);

console.log(life_story.call(madeline));

const newBruce = [1940, "karate dude"]
update.call(bruce, ...newBruce);

const updateBruce = update.bind(bruce);
updateBruce(1904,"actor");
console.log(updateBruce.call(madeline,1274,"king"));

arr = [0,-5,15,7,8]
console.log(Math.min(...arr));
