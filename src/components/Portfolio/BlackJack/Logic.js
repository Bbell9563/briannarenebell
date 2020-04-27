
import React from 'react'
import { getDeck, deal } from './GameComponents'
import Card from './Card'

class Logic extends React.Component {
  state = {
    deck: [],
    hand: [],
    dealerHand: [],
    score: 0,
    showDealer: false
  }

  componentDidMount() {
    let deck = getDeck()
    let temp1 = deal(deck, 2)
    let temp2 = deal(temp1.deck, 2)
    this.setState({
      deck: temp2.deck,
      hand: temp1.hand,
      dealerHand: temp2.hand
    })
  }

  dealCards = (times) => {
    const {hand, deck} = this.state
    let temp = deal(deck, 1)
    this.setState({
      deck: temp.deck,
      hand: [...hand, temp.hand]
    })
  }

  render() {
    const { showDealer, dealerHand, hand, deck } = this.state
    let dealerCards = []
    for(var i = 1; i < dealerHand.length; i++){
      dealerCards.push(dealerHand[i])
    }
    return (
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{width:'50%'}}>
            <div style={{textAlign:'center', marginBottom:"2%"}}>DealerCards</div>
            <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%'}}>
              {showDealer ?
                <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%'}}>
                  {dealerHand.map(card => <Card key={`${card.suit}-${card.rank}`} card={card} />)}
                </div> :
                <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%'}}>
                  <img src={"https://i.pinimg.com/originals/74/0b/df/740bdfde43a6acc7dd91ae8818ad4f7d.jpg"} style={{width:'50px', borderRadius:'5px', height:'80px'}}/>
                  {dealerCards.map(card => <Card key={`${card.suit}-${card.rank}`} card={card} />)}
                </div>}
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{width:'50%'}}>
            <div style={{textAlign:'center', marginBottom:"2%"}}>PlayerCards</div>
            <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%'}}>
              {hand.map(card => <Card key={`${card.suit}-${card.rank}`} card={card} />)}
            </div>
          </div>
        </div>
        <div style={{display:'flex', justifyContent:'space-around', textAlign:'center'}}>
          <div style={{padding:'1%', borderRadius:'10px', color:'white', backgroundColor:'purple', width:'30%', margin:'3%',}}
          >Stay</div>
          <div style={{padding:'1%', borderRadius:'10px', color:'white', backgroundColor:'blue', width:'30%', margin:'3%', cursor:'pointer'}}
            onClick={()=> this.dealCards(1)}
          >Hit</div>
        </div>
      </div>
    )
  }
}

export default Logic