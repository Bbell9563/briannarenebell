import React from 'react'
import { 
  Card,
  Header, 
  Information,
  GameHolder,
  TextHolder
} from '../CardStyle'
import { Image } from 'semantic-ui-react'

class BlackJack extends React.Component {
  render(){
    return(
      <Card>
        <Header>Black Jack</Header>
        <Information>
          <GameHolder>
            <Image 
            src={'https://images.freeimages.com/images/large-previews/4dc/free-casino-table-cloth-texture-1637741.jpg'}
            style={{position:'relative'}}
            />
          </GameHolder>
          <TextHolder>About the process</TextHolder>
        </Information>
      </Card>
    )
  }
}

export default BlackJack