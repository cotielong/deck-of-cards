var drawNumber = 1;
var colors = {
    "diams": "red",
    "hearts": "red",
    "clubs": "black",
    "spades": "black"
};

function snapToDroppable(event, ui){
    // When item is dropped, snap it to the droppable area
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
});
