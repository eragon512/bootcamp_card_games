const Card = require('./card');

class BridgeCard extends Card {
  constructor(num) {
    const SUITRANK = {
      "CLUB": 1, "DIAMOND": 2, "HEART": 3, "SPADE": 4
    };
    const PIPORDER = ["JOKER","2","3","4","5","6","7","8","9","10","J","Q","K","A"];

    super(num,orderToRank(PIPORDER),SUITRANK);
  }
}

 let c = new BridgeCard(12);
 let d = new BridgeCard(26);
 console.log(c.toString(),d.toString());
 console.log(c.compare(d));
// console.log(c.toString());

module.exports = BridgeCard;
