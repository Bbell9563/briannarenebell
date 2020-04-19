import React from 'react'
import { homeStyle } from '../styles/ApplicationStyle'
import HomePhoto from '../images/uniform.jpg'
import { Image } from 'semantic-ui-react'
import Keyboard from '../images/keyboard.jpg'

export default class Home extends React.Component {
  state = { photoHeight: (window.innerWidth / 4) }

  componentDidMount() { window.addEventListener('resize', this.handleResize) }

  handleResize = () => {
    this.setState({
      photoHeight: (window.innerWidth / 4)
    })
  }

  render() {
    const { photoHeight } = this.state
    return (
      <div style={homeStyle.container}>
        <div style={homeStyle.header}>
          <div style={homeStyle.backgroundImage}>
            <Image src={Keyboard} />
          </div>
          <div style={homeStyle.mainInfo}>
            <div style={{ ...homeStyle.photoHolder, height: photoHeight }}>
              <div style={homeStyle.crop}>
                <Image style={homeStyle.photo} src={HomePhoto} />
              </div>
            </div>
            <div style={homeStyle.description}>
              <h1 style={{ fontSize: '4vw', }}>Brianna Bell</h1>
              <h3 style={{ fontSize: '1.5vw', margin: '0px' }}>Full-Stack Web Developer/</h3>
              <h3 style={{ fontSize: '1.5vw', margin: '0px' }}>Geospatial Engineer </h3>

            </div>
          </div>
        </div>
        <div>
          <h3>More Stuff</h3>
        </div>
      </div>
    )
  }
}