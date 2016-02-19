import random
 
class Deck(object):

  class Card(object):
    def __init__(self, suit, rank, sort_index):
      self.suit = suit 
      self.rank = rank
      self.sort_index = sort_index

    def __str__(self):
        return self.rank + ' of ' + self.suit

  def __init__(self):
    suits = ['clubs', 'spades', 'hearts', 'diamonds']
    ranks = ['2','3','4','5','6','7','8','9','10','jack','queen','king','ace']
    self.cards = []
    self.drawn_cards = []
    sort_index = 0
    for suit in suits:
      for rank in ranks:
        self.cards.append(self.Card(suit, rank, sort_index))
        sort_index += 1

  def draw(self):
    self.drawn_cards.append(self.cards.pop())
    return self.drawn_cards[-1]
  
  def shuffle(self, seed=None):
    if seed is not None: 
        random.Random(seed).shuffle(self.cards)
    else:
        shuffle(self.cards)

  def sort(self):
    self.cards.sort(key=lambda card: card.sort_index) 
