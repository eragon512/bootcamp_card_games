const Card = require('./pokerCard');

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

module.exports = PokerCard;
