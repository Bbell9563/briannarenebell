

function shuffle(a) {
  var j, x, i;
  for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
  }
  return a;
}

export const getDeck = () => {
  let suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades']
  let ranks = ['A', 'K', 'Q', 'J', '2','3','4','5','6','7','8','9','10']
  let deck = []
  suits.forEach(suit => {
    ranks.forEach(rank=>{
      deck.push({suit: suit, rank: rank})
    })
  })
  return deck
}

export const deal = (deck, times) => {
  let shuffledDeck = shuffle(deck)
  let hand = shuffledDeck.splice(0,times)
  return {hand: hand, deck: shuffledDeck}
} 

export const getPath = (card) => {
  let suit = card.suit.split('')
  let cut = suit.splice(0,1)
  return `${card.rank}${cut[0]}.png`
}



// "https://i.pinimg.com/originals/74/0b/df/740bdfde43a6acc7dd91ae8818ad4f7d.jpg"