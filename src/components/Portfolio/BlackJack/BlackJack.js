import React from 'react'
import Game from './Game'
import { 
  Card,
  Header, 
  Information,
  GameHolder,
  TextHolder
} from '../CardStyle'

class BlackJack extends React.Component {
  render(){
    return(
      <Card>
        <Header>Black Jack</Header>
        <Information>
          <GameHolder>
            <Game style={{position:'absolute', top:'0', left:'0'}}/>

            
          </GameHolder>
          <TextHolder>About the process</TextHolder>
        </Information>
      </Card>
    )
  }
}

export default BlackJack