var cards = [
    {
        "number": "2",
        "suit": "hearts"
    },
    {
        "number": "3",
        "suit": "hearts"
    },
    {
        "number": "4",
        "suit": "hearts"
    },
    {
        "number": "5",
        "suit": "hearts"
    },
    {
        "number": "6",
        "suit": "hearts"
    },
    {
        "number": "7",
        "suit": "hearts"
    },
    {
        "number": "8",
        "suit": "hearts"
    },
    {
        "number": "9",
        "suit": "hearts"
    },
    {
        "number": "10",
        "suit": "hearts"
    },
    {
        "number": "J",
        "suit": "hearts"
    },
    {
        "number": "Q",
        "suit": "hearts"
    },
    {
        "number": "K",
        "suit": "hearts"
    },
    {
        "number": "A",
        "suit": "hearts"
    },
    {
        "number": "2",
        "suit": "clubs"
    },
    {
        "number": "3",
        "suit": "clubs"
    },
    {
        "number": "4",
        "suit": "clubs"
    },
    {
        "number": "5",
        "suit": "clubs"
    },
    {
        "number": "6",
        "suit": "clubs"
    },
    {
        "number": "7",
        "suit": "clubs"
    },
    {
        "number": "8",
        "suit": "clubs"
    },
    {
        "number": "9",
        "suit": "clubs"
    },
    {
        "number": "10",
        "suit": "clubs"
    },
    {
        "number": "J",
        "suit": "clubs"
    },
    {
        "number": "Q",
        "suit": "clubs"
    },
    {
        "number": "K",
        "suit": "clubs"
    },
    {
        "number": "A",
        "suit": "clubs"
    },
    {
        "number": "2",
        "suit": "diams"
    },
    {
        "number": "3",
        "suit": "diams"
    },
    {
        "number": "4",
        "suit": "diams"
    },
    {
        "number": "5",
        "suit": "diams"
    },
    {
        "number": "6",
        "suit": "diams"
    },
    {
        "number": "7",
        "suit": "diams"
    },
    {
        "number": "8",
        "suit": "diams"
    },
    {
        "number": "9",
        "suit": "diams"
    },
    {
        "number": "10",
        "suit": "diams"
    },
    {
        "number": "J",
        "suit": "diams"
    },
    {
        "number": "Q",
        "suit": "diams"
    },
    {
        "number": "K",
        "suit": "diams"
    },
    {
        "number": "A",
        "suit": "diams"
    },
    {
        "number": "2",
        "suit": "spades"
    },
    {
        "number": "3",
        "suit": "spades"
    },
    {
        "number": "4",
        "suit": "spades"
    },
    {
        "number": "5",
        "suit": "spades"
    },
    {
        "number": "6",
        "suit": "spades"
    },
    {
        "number": "7",
        "suit": "spades"
    },
    {
        "number": "8",
        "suit": "spades"
    },
    {
        "number": "9",
        "suit": "spades"
    },
    {
        "number": "10",
        "suit": "spades"
    },
    {
        "number": "J",
        "suit": "spades"
    },
    {
        "number": "Q",
        "suit": "spades"
    },
    {
        "number": "K",
        "suit": "spades"
    },
    {
        "number": "A",
        "suit": "spades"
    }
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

