console.log("Hello World!");

function rand(m,n){
    return m + Math.floor((n-m+1)*Math.random());
}

function randFace(){
    return["crown","anchor","heart","spade","club","diamond"]
    rand[(0,5)];
}

let funds = 50;
let round =0;

while(funds > 1 && funds < 100){

    round++;
    console.log(`\tround: ${round}`);
    //placing bets 
    const bets = { crown :0, anchor :0, heart :0, spade:0, club:0, diamond:0};
    let totalBet = rand(1,funds);
    if(totalBet === 7){
        totalBet = funds;
        bets.heart = totalBet;
    } else{
        // ditributed bet
        let remaining = totalBet;
        do{
            let bet = rand(1,remaining);
            let face = randFace();
            bets[face] = bets[face]+bet;
            remaining = remaining - bet;
        } while(remaining > 0);
    }
    funds = funds - totalBet;

    // rolling dice
    const hand = [];
    for(let roll = 0; roll < 3;roll++){
        hand.push(randFace());
    }

    // collect winning
    let winnings = 0;
    for(let die = 0; die < hand.length; die++){
        let face = hand[die];
        if(bets[face]>0) winnings = winnings + bets[face];
    }
    funds = funds + winnings; 
    console.log(`\twinnigs: ${winnings}`);
    console.log(`\tending funds: ${funds}`);

