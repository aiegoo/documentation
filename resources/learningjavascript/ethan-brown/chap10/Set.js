const roles = new Set();

roles.add("User"); // Set [ "User" ]
console.log(roles)

roles.add("Admin"); // Set [ "User", "Admin" ]
console.log(roles)

console.log(roles.size); // 2

roles.add("User"); // Set [ "User", "Admin" ]
console.log(roles)
console.log(roles.size); // 2

console.log(roles.delete("Admin")); // true
console.log(roles); // Set [ "User" ]
console.log(roles.delete("Admin")); // false

console.log(typeof roles) //object