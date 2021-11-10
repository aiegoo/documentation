// returns a random integer in the range [m, n] (inclusive)
function rand(m, n) {
    return m + Math.floor((n - m + 1) * Math.random());
}
// randomly returns a string representing one of the six
// Crown and Anchor faces
function randFace() {
    return ["crown", "anchor", "heart", "spade", "club", "diamond"]
    [rand(0, 5)];
}

const bets = {
    crown: 0, anchor: 0, heart: 0,
    spade: 0, club: 0, diamond: 0
};
let totalBet = rand(1, funds);
if (totalBet === 7) {
    totalBet = funds;
    bets.heart = totalBet;
} else {
    // distribute total bet
}
funds = funds - totalBet;

let remaining = totalBet;
do {
    let bet = rand(1, remaining);
    let face = randFace();
    bets[face] = bets[face] + bet;
    remaining = remaining - bet;
} while (remaining > 0);

const hand = [];
for (let roll = 0; roll < 3; roll++) {
    hand.push(randFace());
}

