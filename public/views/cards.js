suits = ['clubs', 'spades', 'hearts', 'diamonds']
ranks = ['2','3','4','5','6','7','8','9','10','jack','queen','king','ace']

var Deck = {}
Deck.cards = []
Deck.drawn_cards = []

isort_id = 0
for (var isuit in suits){
  for (var irank in ranks){
    Deck.cards.push([suits[isuit], ranks[irank], isort_id])
    isort_id += 1
  }
}

Deck.draw = function(){
  Deck.drawn_cards.push(Deck.cards.pop())
}

Deck.shuffle = function(){
  Deck.drawn_cards = shuffle(Deck.drawn_cards)
}

Deck.sort = function(){
  Deck.drawn_cards = Deck.drawn_cards.sort(function(obj1, obj2) {
    return obj1[2] - obj2[2];
});

}

Deck.draw()
Deck.draw()
Deck.draw()
Deck.shuffle()
Deck.sort()

for (var i in Deck.drawn_cards){
  console.log(Deck.drawn_cards[i])
}



function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}
