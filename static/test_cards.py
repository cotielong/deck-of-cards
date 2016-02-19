from cards import *

if __name__ == "__main__":

  # Initialization 
  mydeck = Deck()
 
  # Shuffle
  mydeck.shuffle(1)

  # Draw
  top_card = mydeck.draw().__str__()
  assert(top_card == '8 of clubs') 

  # Sort
  mydeck.sort()
  top_card = mydeck.draw().__str__()
  assert(top_card == 'ace of diamonds') 

  # See all drawn cards
  mydeck.draw()
  assert(mydeck.drawn_cards[0].__str__() == '8 of clubs') 
  assert(mydeck.drawn_cards[1].__str__() == 'ace of diamonds') 
  assert(mydeck.drawn_cards[2].__str__() == 'king of diamonds') 
