class Deck {
  constructor(cardObject){
    this.cards = [];//array of all the cards 10*
    this.matchedCards = [];//array with each pair 5*
    this.selectedCards = [];//two user selected cards *2

  }
  shuffle() {
    //randomize placement of all cards (this.cards)
  }
  checkSelectedCards() {
    if (event.target.classList.contains('test')) {
      console.log("card selected");
    }
    


    //push card into this.selectedCards

    // console.log('check selected');
    //called after first card
    //checking for a match
    //match = the two cards disappear
    //no match = two cards flip back over after two seconds

  }
  moveToMatched() {
    //when a user matches two like cards
    //those cards are pushed to the matched array
    //also one picture representing that match is moved to matched boxes

  }

  fillDeck() {
  for(var i = 0; i < 10; i++) {
    var card = new Card();
    this.cards.push(card);
  }
  // console.log(this.cards.length);
  //push new cards to cards array
  }
}
