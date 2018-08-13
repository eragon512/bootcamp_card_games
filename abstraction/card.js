class Card {
  constructor(num,PIPRANK,SUITRANK) {
    const JOKERVALUE = 52;

    const PIPS = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"];
    const SUITS = Object.keys(SUITRANK);
    const NUM_PIPS = PIPS.length;

    if(num >= JOKERVALUE) {
      this.pip = "JOKER";
      this.suit = "JOKER";
    } else {
      //console.log(PIPRANK);
      this.pip = PIPS[parseInt(num%NUM_PIPS)];
      this.suit = SUITS[parseInt(num/NUM_PIPS)];
    }
    this.PIPRANK = PIPRANK;
    this.SUITRANK = SUITRANK;
  }

  compareSuit(anyCard) {
    return this.SUITRANK[this.suit] -
      this.SUITRANK[anyCard.suit];
  };
  compareRank(anyCard) {
    return this.PIPRANK[this.pip] -
      this.PIPRANK[anyCard.pip];
  };

  compare(anyCard) {
    return this.compareSuit(anyCard) ?
      this.compareSuit(anyCard) :
      this.compareRank(anyCard);
  }

  toString() {
    return JSON.stringify(
      {pip: this.pip,suit: this.suit}
    );
  }
}

function orderToRank(orderArray) {
  let rankObject = {};
  orderArray.forEach(function(item,index) {
    rankObject[item] = index
  });
  return rankObject;
}

class BridgeCard extends Card {
  constructor(num) {
    const SUITRANK = {
      "CLUB": 1, "DIAMOND": 2, "HEART": 3, "SPADE": 4
    };
    const PIPORDER = ["JOKER","2","3","4","5","6","7","8","9","10","J","Q","K","A"];

    super(num,orderToRank(PIPORDER),SUITRANK);
  }
}

class PokerCard extends Card {
  constructor(num) {
    const SUITRANK = {
      "CLUB": 0, "DIAMOND": 0, "HEART": 0, "SPADE": 0
    };
    const PIPORDER = ["JOKER","2","3","4","5","6","7","8","9","10","J","Q","K","A"];
    //console.log(PIPRANK);

    super(num,orderToRank(PIPORDER),SUITRANK);
  }

  toString() {
    return super.toString();
  }
}

 let c = new BridgeCard(12);
 let d = new BridgeCard(26);
 console.log(c.toString(),d.toString());
 console.log(c.compare(d));
// console.log(c.toString());


class Pack {
  constructor(numJokers,CardImpl) {
    const NUM_CARDS = 52;
    this.cards = [];
    for(let i of Array(NUM_CARDS+numJokers).keys())
      this.cards.push(new CardImpl(i));
  }
  getCards() {
    return this.cards;
  }

  toString() {
    let str = "";
    for(let card of this.cards)
      str += card.toString()+"\n";
    return str;
  }
}

// let pack = new Pack(2,PokerCard);
// console.log(pack.toString());

class Deck {
  constructor(numPacks,jokersPerPack,CardImpl) {
    this.cards = [];
    for(let i of Array(numPacks).keys()) {
      let tmpPack = new Pack(jokersPerPack,CardImpl);
      this.cards = this.cards.concat(tmpPack.getCards());
    }
  }

  shuffle() {
    let input = this.cards.slice();
    for (let i = input.length-1; i >=0; i--) {
      let randomIndex = Math.floor(Math.random()*(i+1));

      let itemAtIndex = input[randomIndex];
      input[randomIndex] = input[i];
      input[i] = itemAtIndex;
    }
    this.cards = input;
  }

  deal(n) {
    let dealtCards = this.cards.slice(0,n);
    this.cards = this.cards.slice(n);
    return dealtCards;
  }

  toString() {
    let str = "";
    for(let card of this.cards)
      str += card.toString()+"\n";
    return str;
  }
}

let deck = new Deck(2,1,PokerCard);
deck.shuffle();
//console.log(deck.toString());
