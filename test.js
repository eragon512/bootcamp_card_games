const Rules=require('./Rule');
const Card=require('./card');
const PokerHand=require('./PokerHand');

let a=new Card('A','SPADE');
let b=new Card('2','DIAMOND');
let c=new Card('3','HEART');
let d=new Card('4','CLUB');
let e=new Card('5','HEART');
let ranking=['2','3','4','5','6','7','8','9','10','J','Q','K','A'];
let obj=new Rules([a,b,c,d,e],ranking);
console.log(obj.getCountByValue());
console.log(obj.getCountBySuit());
console.log(obj.isInOrder());
console.log(obj.getMaxCard());
console.log(obj.getMinCard());


let ph=new PokerHand([a,b,c,d,e]);
console.log(ph.evaluate());