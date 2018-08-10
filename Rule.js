
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
        if(countByValue.hasOwnProperty(card.suit)){
            countByValue[card.suit]++;
        }else {
            countByValue[card.suit] = 1;
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

    return indexArray[this.cards.length -1] - indexArray[0] + 1 === this.cards.length;
}
function getMaxCard() {
    let maxIndex = -1;
    for (let card of this.cards){
        if(this.ranking.indexOf(card.denom) > maxIndex)
            maxIndex = this.ranking.indexOf(card.denom);
    }

    return this.cards[maxIndex];
}

function getMinCard() {
    let minIndex = this.cards.length;
    for (let card of this.cards){
        if(this.ranking.indexOf(card.denom) < minIndex)
            minIndex = this.ranking.indexOf(card.denom);
    }

    return this.cards[minIndex];
}

class Rule {
    constructor(cards,ranking){
        this.ranking = ranking;
        this.cards = cards;
        this.getCountByValue = getCountByValue;
        this.getCountBySuit = getCountBySuit;
        this.isInOrder = isInOrder;
        this.getMaxCard = getMaxCard;
        this.getMinCard = getMinCard;
    }
}