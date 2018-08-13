
function getCountByValue() {
    let countByValue= {};
    for (let card of this.cards) {
        if(countByValue.hasOwnProperty(card.denom)){
            countByValue[card.denom]++;
        }else {
            countByValue[card.denom] = 1;
        }
    }
    return countByValue;
}
function getCountBySuit() {
    let countBySuit= {};
    for (let card of this.cards) {
        if(countBySuit.hasOwnProperty(card.suit)){
            countBySuit[card.suit]++;
        }else {
            countBySuit[card.suit] = 1;
        }
    }
    return countBySuit;
}
function isInOrder() {
    let indexArray = [];
    for (let card of this.cards){
        indexArray.push(this.ranking.indexOf(card.denom));
    }
    indexArray.sort(function (a,b) {
        return a - b;
    });

    if(indexArray[this.cards.length -1] === 12){
        if (indexArray[0] === 0)
            return indexArray[this.cards.length - 2] - indexArray[0] + 2 === this.cards.length;
    }
    return indexArray[this.cards.length -1] - indexArray[0] + 1 === this.cards.length;
}
function getMaxCard() {
    let maxIndex = -1;
    let maxCard;
    if (this.isInOrder()){
        for (let card of this.cards){
            if(card.denom!='A' && this.ranking.indexOf(card.denom) > maxIndex){
                maxIndex = this.ranking.indexOf(card.denom);
                maxCard = card;
            }
        }
    } else {
        for (let card of this.cards){
            if(this.ranking.indexOf(card.denom) > maxIndex){
                maxIndex = this.ranking.indexOf(card.denom);
                maxCard = card;
            }
        }
    }
    return maxCard;
}

function getMinCard() {
    let minIndex = this.ranking.length;
    let minCard;
    for (let card of this.cards){
        if(this.ranking.indexOf(card.denom) < minIndex){
            minIndex = this.ranking.indexOf(card.denom);
            minCard = card;
        }
    }

    return minCard;
}

function getPairs(Dict){
    let denoms=[];
    for(var key in Dict){
      if(Dict[key]==2)
        denoms.push(key);
    }
    return denoms;
}

function getComponents(object, value) {
  return Object.keys(object).find(key => object[key] === value);
}

class Rules {
    constructor(cards,ranking){
        this.ranking = ranking;
        this.cards = cards;
        this.getCountByValue = getCountByValue;
        this.getCountBySuit = getCountBySuit;
        this.isInOrder = isInOrder;
        this.getMaxCard = getMaxCard;
        this.getMinCard = getMinCard;
        this.getPairs=getPairs;
        this.getComponents=getComponents;
    }
}

module.exports = Rules;
