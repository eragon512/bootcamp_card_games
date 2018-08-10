const Card = require('./card');
const Rule = require('./Rule');

function ruleSetPass(rules) {
  let satisfied = [];
  for(let rule of rules) {
    if(rule.expr) {
      satisfied.push({
        ruleName: rule.name,
        priority: rule.priority
        components = rule.components.slice()
      });
    }
  }

  satisfied.sort(function (a,b) {
    return a.priority - b.priority;
  });
  console.log(satisfied);
  return satisfied;
}

class PokerHand {
  constructor(cards) {
    this.cards = cards;
  }

  evaluate() {
    if(this.cards.length !== 5)
      return "INVALID";

    let rule = new Rule(this.cards);

    let countDict = rule.getCountByValue();
    let countTwos = countDict.filter(x => x === 2).length;
    let countThrees = countDict.filter(x => x === 3).length;
    let countFours = countDict.filter(x => x === 4).length;
    let isInOrder = rule.isInOrder();
    let isFlush = rule.getCountBySuit.filter(x => x === 5).length;

    ruleSetPass([
      { expr: true,
        name: "HIGH CARD", priority: 10,
        components: []
      },
      { expr: countTwos === 1,
        name: "ONE PAIR", priority: 9,
        components: []
      },
      { expr: countTwos === 2,
        name: "TWO PAIR", priority: 8,
        components: []
      },
      { expr: countThrees === 1,
        name: "THREE OF A KIND", priority: 7,
        components: []
      },
      { expr: isInOrder,
        name: "STRAIGHT", priority: 6,
        components: []
      },
      { expr: isFlush,
        name: "FLUSH", priority: 5,
        components: []
      },
      { expr: countThrees === 1 && countTwos === 1,
        name: "FULL HOUSE", priority: 4,
        components: []
      },
      { expr: countFours === 1,
        name: "FOUR OF A KIND", priority: 3,
        components: []
      },
      { expr: isInOrder && isFlush,
        name: "STRAIGHT FLUSH", priority: 2,
        components: []
      },
      { expr: isInOrder && isFlush && rule.getMinCard().denom === "10",
        name: "ROYAL FLUSH", priority: 1,
        components: []
      },
    ]);
  }
}

module.exports = PokerHand;
