const u1 = { name: 'Cynthia' };
const u2 = { name: 'Jackson' };
const u3 = { name: 'Olive' };
const u4 = { name: 'James' };

const userRoles = new Map();

userRoles
.set(u1, 'User')
.set(u2, 'User')
.set(u3, 'Admin');

console.log(userRoles.get(u2)); // "User"

console.log(userRoles.has(u1)); // true
console.log(userRoles.has(u4)); // false
console.log(userRoles.get(u4)); // undefined

userRoles.set(u1, 'Admin');
console.log(userRoles.get(u1)); // 'Admin'

console.log(userRoles.size); // 3

console.log(userRoles.keys(),userRoles.values(),userRoles.entries())

// note that we can use destructuring to make
// this iteration even more natural:
for(let [u, r] of userRoles.entries())
console.log(`${u.name}: ${r}`);

// the entries() method is the default iterator for
// a Map, so you can shorten the previous example to:
for(let [u, r] of userRoles)
console.log(`${u.name}: ${r}`);

console.log([...userRoles.values()]); // [ "User", "User", "Admin" ]

userRoles.delete(u2);
console.log(userRoles.size); // 2

userRoles.clear();
console.log(userRoles.size); // 0