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

module.exports = Pack;

// let pack = new Pack(2,PokerCard);
// console.log(pack.toString());
