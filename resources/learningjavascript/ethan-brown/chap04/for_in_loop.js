const player = { name: 'Thomas', rank: 'Midshipman', age: 25 };
for (let prop in player) {
    if (!player.hasOwnProperty(prop)) continue; // see explanation below
    console.log(prop + ': ' + player[prop]);
}

//The for...in loop is designed to loop over the property keys of an object. 