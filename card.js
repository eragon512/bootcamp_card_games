class Card {
  constructor(denom,suit) {
    this.denom = denom;
    this.suit = suit;
    if(denom === "JOKER")
      this.suit = denom;
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
