import React from 'react'
import Logic from './Logic'

class Game extends React.Component {
  state={
    playing: false
  }

  startGame = () => {
    this.setState({
      playing: true
    })
  }

  render() {
    const {playing} = this.state
    return (
      <div style={{display:'flex', justifyContent:'center'}}>
        
        {!playing ? 
        <div id='playButton' onClick={this.startGame} style={style.playBtn}>PlayGame</div> 
        : 
        <Logic />
        }
        
      </div>
    )
  }
}

const style = {
  playBtn:{
    padding:'1%',
    backgroundColor:'green',
    color:'white',
    borderRadius:'10px',
    width:'50%',
    margin:'20% 25%',
    textAlign:'center'
  }
}

export default Game