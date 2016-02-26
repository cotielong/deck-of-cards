describe("Test card toString function", function() {
  it("card toString works", function() {
    var card = new Card('king', 'spades')
    expect(card.toString()).toBe('king of spades')
  });
});


describe("Test whether the card id is correct given the inputs", function() {
  it("has the correct id", function() {
    var card = new Card('ace', 'diams')
    expect(card.getElementId()).toBe('card-ace-diams')
  });
});

describe("Test whether card colors are being calculated correctly", function() {
  it("shows the right color", function() {
    var card = new Card('2', 'clubs')
    expect(card.getColor()).toBe('black')
    var card = new Card('3', 'spades')
    expect(card.getColor()).toBe('black')
    var card = new Card('4', 'hearts')
    expect(card.getColor()).toBe('red')
    var card = new Card('4', 'diams')
    expect(card.getColor()).toBe('red')
  });
});

describe("Test whether the card attributes are working", function() {

  it('shows the right number and suit', function(){
    var mycard = new Card('2', 'clubs')
    expect(mycard.number).toBe('2')
    expect(mycard.suit).toBe('clubs')
  })
});

