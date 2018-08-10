class Card {
  constructor(denom,suit) {
    this.suit = suit;
    this.denom = denom;
  }

  get suit() {
    return this.suit;
  }
  get denom() {
    return this.denom;
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
