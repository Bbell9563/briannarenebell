import React from 'react'
import { homeStyle } from '../../styles/ApplicationStyle'
import HomePhoto from '../../images/croppedUniform.png'
import { Image, Icon } from 'semantic-ui-react'
import Keyboard from '../../images/keyboard.jpg'


export default class HomeDesktop extends React.Component {
  state = {
    photoHeight: (window.innerWidth / 2.5),
    photoWidth: (window.innerWidth / 1.7)
  }

  componentDidMount() { window.addEventListener('resize', this.handleResize) }
  componentWillUnmount() {window.removeEventListener('resize', this.handleResize) }

  handleResize = () => {
    this.setState({
      photoHeight: (window.innerWidth / 2.5),
      photoWidth: (window.innerWidth / 1.7)
    })
  }

  makeIconBigger = (id) => { document.getElementById(id).style.transform = 'scale(1.1)' }
  makeIconSmaller = (id) => { document.getElementById(id).style.transform = 'scale(.9)' }

  render() {
    const { photoHeight, photoWidth } = this.state
    return (
      <div style={homeStyle.container}>
        <div style={{ ...homeStyle.header, height: window.innerHeight }}>
          <div style={{ ...homeStyle.backgroundImage, height: window.innerHeight }}>
            <div style={homeStyle.imagePartial}>
              <div style={homeStyle.crop}>
                <Image src={Keyboard} style={{ ...homeStyle.photo, objectFit: 'cover' }} />
              </div>
            </div>
            <div style={homeStyle.partial}></div>
          </div>
          <div style={homeStyle.mainInfo}>
            <div style={homeStyle.description}>
              <div>
                <h1 style={{ fontSize: '5vw', fontFamily: 'Russo One'}}>Brianna Bell</h1>
                <h3 style={{ fontSize: '1.5vw', margin: '0px' }}>Full-Stack Web Developer/</h3>
                <h3 style={{ fontSize: '1.5vw', margin: '0px' }}>Geospatial Engineer </h3>
              </div>
              <div>
                <a style={{ color: 'white' }} href='https://github.com/Bbell9563'>
                  <Icon id='git' name='github' size='huge'
                    onMouseEnter={() => this.makeIconBigger('git')}
                    onMouseOut={() => this.makeIconSmaller('git')}
                  />
                </a>
                <a style={{ color: 'white' }} href='https://www.linkedin.com/in/briannarenebell/'>
                  <Icon id='link' name='linkedin' size='huge'
                    onMouseEnter={() => this.makeIconBigger('link')}
                    onMouseOut={() => this.makeIconSmaller('link')}
                  />
                </a>
              </div>
            </div>
            <div style={{ ...homeStyle.photoHolder, width: photoWidth, height: photoHeight }}>
              <div style={homeStyle.crop}>
                <Image style={homeStyle.photo} src={HomePhoto} />
              </div>
            </div>
          </div>


        </div>
        <div style={homeStyle.extraInfo}>
          <div style={homeStyle.about}>
            <h2>A Little About Me</h2>
            <p>
              I grew up in a military family, moved around a lot growing up. In ended up in kansas, where I
              completed my first year of college. I then decided to move to Utah to give me more options.
              After a couple month of being in Utah, I joined the military as a geospatial engineer. I went to 
              training, when I came back I started working as a geospatial with the Engineering department of 
              Camp Williams DPW. After that, my partner suggested doing a coding bootcamp. I thought it was a 
              good idea and started DevPoint Labs Full-Stack Bootcamp. This is when I learned that I am super 
              passionate about software engineering. I had tons of fun and enjoy learning these new things everyday.
            </p>
          </div>

        </div>
      </div>
    )
  }
}