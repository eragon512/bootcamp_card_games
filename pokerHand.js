const Card = require('./card');
const Rule = require('./Rule');

const ranking = ['2','3','4','5','6','7','8','9','10','J','Q','K','A'];

function getObjectValues(obj) {
  return Object.keys(obj).map(key => obj[key]);
}

function ruleSetPass(rules) {
  let satisfied = [];
  for(let rule of rules) {
    if(rule.expr) {
      satisfied.push({
        ruleName: rule.name,
        priority: rule.priority,
        components: rule.components
      });
    }
  }
  satisfied.sort(function (a,b) {
    return a.priority - b.priority;
  });
  return satisfied;
}

class PokerHand {
  constructor(cards) {
    this.cards = cards;
  }

  evaluate() {
    if(this.cards.length !== 5)
      return "INVALID";

    let rule = new Rule(this.cards,ranking);

    let countDict = rule.getCountByValue();
    let countTwos = getObjectValues(countDict).filter(x => x === 2).length;
    let countThrees = getObjectValues(countDict).filter(x => x === 3).length;
    let countFours = getObjectValues(countDict).filter(x => x === 4).length;
    let isInOrder = rule.isInOrder();
    let isFlush = getObjectValues(rule.getCountBySuit()).filter(x => x === 5).length;

    return ruleSetPass([
      { expr: true,
        name: "HIGH CARD", priority: 10,
        components: [rule.getMaxCard().denom]
      },
      { expr: countTwos === 1,
        name: "ONE PAIR", priority: 9,
        components: rule.getPairs(countDict)
      },
      { expr: countTwos === 2,
        name: "TWO PAIR", priority: 8,
        components: rule.getPairs(countDict)
      },
      { expr: countThrees === 1,
        name: "THREE OF A KIND", priority: 7,
        components: [rule.getComponents(countDict,3)]
      },
      { expr: isInOrder,
        name: "STRAIGHT", priority: 6,
        components: [rule.getMaxCard().denom]
      },
      { expr: isFlush,
        name: "FLUSH", priority: 5,
        components: [rule.getMaxCard().denom]
      },
      { expr: countThrees === 1 && countTwos === 1,
        name: "FULL HOUSE", priority: 4,
        components: [rule.getComponents(countDict,3),rule.getComponents(countDict,2)]
      },
      { expr: countFours === 1,
        name: "FOUR OF A KIND", priority: 3,
        components: [rule.getComponents(countDict,4)]
      },
      { expr: isInOrder && isFlush,
        name: "STRAIGHT FLUSH", priority: 2,
        components: [rule.getMaxCard().denom]
      },
      { expr: isInOrder && isFlush && rule.getMinCard().denom === "10",
        name: "ROYAL FLUSH", priority: 1,
        components: [rule.getMaxCard().denom]
      },
    ]);
  }
}

module.exports = PokerHand;
