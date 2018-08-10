class Card {
  constructor(denom,suit) {
    this.denom = denom;
    this.suit = suit;
    if(denom === "JOKER")
      this.suit = denom;
  }

  get suit() {
    return this.suit;
  }
  get denom() {
    return this.denom;
  }

  set suit(suit) {
    this.suit = suit;
  }

  set denom(denom) {
    this.denom = denom;
  }

  color() {
    const colorSuitMap = {
      "SPADE" : "BLACK",
      "CLUB" : "BLACK",
      "HEART" : "RED",
      "DIAMOND": "RED",
      "JOKER" : "NOCOLOR"
    }
    return colorSuitMap[this.suit];
  }
}

module.exports = Card;
