import React from 'react'
import {getPath} from './GameComponents'

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const images = importAll(require.context('./CardImages', false, /\.(png|jpe?g|svg)$/));


class Card extends React.Component {



  render(){
    const {card} = this.props
    return(
      <div>
        <img src={images[getPath(card)]} style={{width:'50px', height:'80px'}}/>
      </div>
    )
  }
}

export default Card