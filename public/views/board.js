var cards = [
    {
        "number": "A",
        "suit": "clubs",
        "rank": 1
    },
    {
        "number": "2",
        "suit": "clubs",
        "rank": 2
    },
    {
        "number": "3",
        "suit": "clubs",
        "rank": 3
    },
    {
        "number": "4",
        "suit": "clubs",
        "rank": 4
    },
    {
        "number": "5",
        "suit": "clubs",
        "rank": 5
    },
    {
        "number": "6",
        "suit": "clubs",
        "rank": 6
    },
    {
        "number": "7",
        "suit": "clubs",
        "rank": 7
    },
    {
        "number": "8",
        "suit": "clubs",
        "rank": 8
    },
    {
        "number": "9",
        "suit": "clubs",
        "rank": 9
    },
    {
        "number": "10",
        "suit": "clubs",
        "rank": 10
    },
    {
        "number": "J",
        "suit": "clubs",
        "rank": 11
    },
    {
        "number": "Q",
        "suit": "clubs",
        "rank": 12
    },
    {
        "number": "K",
        "suit": "clubs",
        "rank": 13
    },
    {
        "number": "A",
        "suit": "spades",
        "rank": 14
    },
    {
        "number": "2",
        "suit": "spades",
        "rank": 15
    },
    {
        "number": "3",
        "suit": "spades",
        "rank": 16
    },
    {
        "number": "4",
        "suit": "spades",
        "rank": 17
    },
    {
        "number": "5",
        "suit": "spades",
        "rank": 18
    },
    {
        "number": "6",
        "suit": "spades",
        "rank": 19
    },
    {
        "number": "7",
        "suit": "spades",
        "rank": 20
    },
    {
        "number": "8",
        "suit": "spades",
        "rank": 21
    },
    {
        "number": "9",
        "suit": "spades",
        "rank": 22
    },
    {
        "number": "10",
        "suit": "spades",
        "rank": 23
    },
    {
        "number": "J",
        "suit": "spades",
        "rank": 24
    },
    {
        "number": "Q",
        "suit": "spades",
        "rank": 25
    },
    {
        "number": "K",
        "suit": "spades",
        "rank": 26
    },
    {
        "number": "A",
        "suit": "hearts",
        "rank": 27
    },
    {
        "number": "2",
        "suit": "hearts",
        "rank": 28
    },
    {
        "number": "3",
        "suit": "hearts",
        "rank": 29
    },
    {
        "number": "4",
        "suit": "hearts",
        "rank": 30
    },
    {
        "number": "5",
        "suit": "hearts",
        "rank": 31
    },
    {
        "number": "6",
        "suit": "hearts",
        "rank": 32
    },
    {
        "number": "7",
        "suit": "hearts",
        "rank": 33
    },
    {
        "number": "8",
        "suit": "hearts",
        "rank": 34
    },
    {
        "number": "9",
        "suit": "hearts",
        "rank": 35
    },
    {
        "number": "10",
        "suit": "hearts",
        "rank": 36
    },
    {
        "number": "J",
        "suit": "hearts",
        "rank": 37
    },
    {
        "number": "Q",
        "suit": "hearts",
        "rank": 38
    },
    {
        "number": "K",
        "suit": "hearts",
        "rank": 39
    },
    {
        "number": "A",
        "suit": "diams",
        "rank": 40
    },
    {
        "number": "2",
        "suit": "diams",
        "rank": 41
    },
    {
        "number": "3",
        "suit": "diams",
        "rank": 42
    },
    {
        "number": "4",
        "suit": "diams",
        "rank": 43
    },
    {
        "number": "5",
        "suit": "diams",
        "rank": 44
    },
    {
        "number": "6",
        "suit": "diams",
        "rank": 45
    },
    {
        "number": "7",
        "suit": "diams",
        "rank": 46
    },
    {
        "number": "8",
        "suit": "diams",
        "rank": 47
    },
    {
        "number": "9",
        "suit": "diams",
        "rank": 48
    },
    {
        "number": "10",
        "suit": "diams",
        "rank": 49
    },
    {
        "number": "J",
        "suit": "diams",
        "rank": 50
    },
    {
        "number": "Q",
        "suit": "diams",
        "rank": 51
    },
    {
        "number": "K",
        "suit": "diams",
        "rank": 52
    },
];

var deck = [];
var deckElement = document.getElementById("deck");
var card;
var cardElement;
var stack;
var pileElement = document.getElementById("pile");

var Card = function(number, suit){
    this.number = number;
    this.suit = suit;
    
    this.getColor = function(){
        if(this.suit == "spades" || this.suit == "clubs"){
            return "black";
        } else {
            return "red";
        }
    };
    
    this.getElementId = function(){
        return "card-" + this.number + "-" + this.suit;
    }
    
    this.toString = function(){
        return this.number + " of " + this.suit;
    }
};

// Create the cards
for(var i=0; i < cards.length; i++){
    card = new Card(cards[i].number, cards[i].suit);
    deck.push(card);
}

// Shuffle the "deck"
deck = shuffle(deck);

// Stack deck
for(var c in deck){
    card = deck[c];
    cardElement = document.getElementById(card.getElementId());
    cardElement.className = cardElement.className + " flipped";
    deckElement.appendChild(cardElement);    
}

// Sort the "deck"
var cardnames = [];
var suits = ['clubs', 'spades', 'hearts', 'diams'];
var ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
for (var isuit in suits){
  for (var irank in ranks){
      cardnames.push('card-' + ranks[irank] + '-' + suits[isuit]);
  }
}

function sort() {
    
console.log(cardnames);

var pile = document.getElementById( 'pile' );

[].map.call( pile.children, Object ).sort( function ( a, b ) {
    return cardnames.indexOf(a.id) - cardnames.indexOf(b.id);
}).forEach( function ( elem ) {
    pile.appendChild( elem );
    console.log(pile);
});
};
/*var pileDivs = document.getElementsByClassName("pile");
for(i = 0; i < pileDivs.length;i++)
{
    pileDivs[i]
}*/
