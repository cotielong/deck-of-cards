//setup drag and drop of cards; support dragging the bottom-most card with its stack
//setup rules for dropping
//work on animating "flipping" cards
//local storage
//offline mode? it's offline as soon as you hit the page...what else is needed?
//user configurable draw 1 or draw 3?
//scale text widget?
//game state is: what's in each stack, what's in each foundation, what cards are currently flipped up from deck, what remains in deck
//add "royal" faces
//siblings of card that is dragged from stack will need to be included
var drawNumber = 3;
var colors = {
    "diams": "red",
    "hearts": "red",
    "clubs": "black",
    "spades": "black"
};

function snapToDroppable(event, ui){
    // When item is dropped, snap it to the droppable area
    var draggedCard = ui.draggable;
    var droppedOnCard = $(this);
    
    var draggedCardSibling = draggedCard.prev();
    
    if (!draggedCardSibling.hasClass("empty-card-slot")) {
        draggedCardSibling.addClass("flip");
    }
    
    // Rather than just absolutely position it in place, move it in the DOM
    droppedOnCard.after(draggedCard);
    
    if (droppedOnCard.parents(".stack").length < 1) {
        draggedCard.css({ left:0, top:0 }); 
    } else {
        var additionalTop = parseInt(droppedOnCard.css("font-size")) * 1.75;
        var newTop = droppedOnCard.position().top + additionalTop;
        
        draggedCard.css({ left:0, top: newTop });        
    }
}

// Only the top most card flipped from deck can be dragged
$("#pile .card:last-child").draggable({
    
});

$(".stack .card:not(.flipped)").draggable({
    revert: "invalid",
    zIndex: 10000
});

// Only Aces can initially be dropped into the foundation areas
$(".foundation .empty-card-slot").droppable({
    accept: ".number-A",    
    drop: snapToDroppable 
});

// Accept only cards that are the same suit and one number lower in foundation areas
/*$(".stack .card:not(.flipped)").each(function(){
    var card = $(this);
    var id = card.attr("id");
    
    var matches = id.match(/card-([a-zA-Z0-9]+)-([a-z]+)/);
    var number = matches[1];
    var suit = matches[2];
    
    if (number == "A") {
        // Aces cannot be dropped on to any other stack
        return;
    }
    
    card.droppable({
        accept: function(target){
            var cardDroppedOn = $(target);
            var id = cardDroppedOn.attr("id");

            var matches = id.match(/card-([a-zA-Z0-9]+)-([a-z]+)/);
            var droppedOnNumber = matches[1];
            var droppedOnSuit = matches[2];
            
            return isValidDropOnStack(number, suit, droppedOnNumber, droppedOnSuit);
       },
       drop: snapToDroppable
    });
});*/

$(".stack .card:not(.flipped)").droppable({
    accept: function(dragged){
        var droppedOnCard = $(this);
        var draggedCard = $(dragged);
        
        var droppedOnId = droppedOnCard.attr("id");
        var draggedId = draggedCard.attr("id")
        
        var m = droppedOnId.match(/card-([a-zA-Z0-9]+)-([a-z]+)/);
        var droppedOnNumber = m[1];
        var droppedOnSuit = m[2];
        
        var m = draggedId.match(/card-([a-zA-Z0-9]+)-([a-z]+)/);
        var draggedNumber = m[1];
        var draggedSuit = m[2];
        
        console.log(draggedNumber, draggedSuit, droppedOnNumber, droppedOnSuit);

        return isValidDropOnStack(draggedNumber, draggedSuit, droppedOnNumber, droppedOnSuit);
    },
   drop: snapToDroppable 
});

//$(".card:not(.flipped)").droppable({});

// Get cards from deck
$("#deck").on("click", function(){
    if (deck.length < 1) {
        return;
    }
    var cards = deck.splice(-drawNumber, drawNumber);
    var card;
    var cardElements = [];
    
    for(var i = 0; i < cards.length; i++){
        
        card = $("#" + cards[i].getElementId());
        card.addClass("flip");
        
        // Once animated transition is done, move this to the #pile DOM element
        // This requires the transition CSS properties to match up with the final CSS properties on the new position
        card.bind("transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd", function(){
            $(this).appendTo(pileElement);    
        });
    }
    
    $(cards[0].getElementId()).draggable({});
});

function isValidDropOnStack(draggedNumber, draggedSuit, droppedOnNumber, droppedOnSuit){
    if (colors[draggedSuit] === colors[droppedOnSuit]) {
        return false;
    }
    if (draggedNumber === "A") {
        // Aces cannot be dropped on a card in the stack
        return false; 
    } else if(draggedNumber === "K" && droppedOnNumber === "A" ||
              draggedNumber === "Q" && droppedOnNumber === "K" ||
              draggedNumber === "J" && droppedOnNumber === "Q" ||
              draggedNumber === "10" && droppedOnNumber === "J"){
        return true;
    } else if (parseInt(droppedOnNumber) - parseInt(draggedNumber)  == 1) {
        return true;
    } else {
        return false;
    }
    
}