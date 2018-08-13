class Deck {
  constructor(numPacks,jokersPerPack,CardImpl) {
    this.cards = [];
    for(let i of Array(numPacks).keys()) {
      let tmpPack = new Pack(jokersPerPack,CardImpl);
      this.cards = this.cards.concat(tmpPack.getCards());
    }
  }

  shuffle() {
    let input = this.cards.slice();
    for (let i = input.length-1; i >=0; i--) {
      let randomIndex = Math.floor(Math.random()*(i+1));

      let itemAtIndex = input[randomIndex];
      input[randomIndex] = input[i];
      input[i] = itemAtIndex;
    }
    this.cards = input;
  }

  deal(n) {
    let dealtCards = this.cards.slice(0,n);
    this.cards = this.cards.slice(n);
    return dealtCards;
  }

  toString() {
    let str = "";
    for(let card of this.cards)
      str += card.toString()+"\n";
    return str;
  }
}

module.exports = Deck;

let deck = new Deck(2,1,PokerCard);
deck.shuffle();
//console.log(deck.toString());
