const words = ["Beachball", "Rodeo", "Angel",
    "Aardvark", "Xylophone", "November", "Chocolate",
    "Papaya", "Uniform", "Joker", "Clover", "Bali"];
const alphabetical = words.reduce((a, x) => {
    if (!a[x[0]]) a[x[0]] = [];
    a[x[0]].push(x);
    return a;
}, {});
console.log(alphabetical)

const words2 = ["Beachball", "Rodeo", "Angel",
"Aardvark", "Xylophone", "November", "Chocolate",
"Papaya", "Uniform", "Joker", "Clover", "Bali"];
const longWords = words2.reduce((a, w) => w.length>6 ? a+" "+w : a, "").trim();
console.log(longWords)
// longWords: "Beachball Aardvark Xylophone November Chocolate Uniform"