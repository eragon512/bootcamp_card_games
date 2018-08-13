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

module.exports = Card;
