import React from 'react'
import { homeMobile } from '../../styles/ApplicationStyle'
import HomePhoto from '../../images/croppedUniform.png'
import { Image, Icon } from 'semantic-ui-react'
import Keyboard from '../../images/keyboard.jpg'


export default class MobileHome extends React.Component {
  state = { photoHeight: (window.innerWidth / 1.1), maxHeight: window.innerHeight - 100 }

  componentDidMount() { window.addEventListener('resize', this.handleResize) }
  componentWillUnmount() {window.removeEventListener('resize', this.handleResize) }

  handleResize = () => {
    this.setState({
      photoHeight: (window.innerWidth / 1.1),
      maxHeight: window.innerHeight - 100
    })
  }

  render() {
    const { photoHeight, maxHeight } = this.state
    return (
      <div style={{ display: 'flex' }}>
        <div style={homeMobile.container}>
          <div style={{ ...homeMobile.header, height: window.innerHeight }}>
            <div style={{ ...homeMobile.backgroundImage, height: window.innerHeight }}>
              <div style={homeMobile.imagePartial}>
                <div style={homeMobile.crop}>
                  <Image src={Keyboard} style={{ ...homeMobile.photo, objectFit: 'cover' }} />
                </div>
              </div>
              <div style={homeMobile.partial}></div>
            </div>

            <div style={{ ...homeMobile.mainInfo, maxHeight }}>
              <div style={homeMobile.description}>
                <div>
                  <h1 style={{ fontSize: '50px' }}>Brianna Bell</h1>
                  <h3 style={{ fontSize: '25px', margin: '0px' }}>Full-Stack Web Developer/</h3>
                  <h3 style={{ fontSize: '25px', margin: '0px' }}>Geospatial Engineer </h3>
                </div>
                <div style={{ marginTop: '4%' }}>
                  <a style={{ color: 'white' }} href='https://github.com/Bbell9563'>
                    <Icon id='git' name='github' size='huge' />
                  </a>
                  <a style={{ color: 'white' }} href='https://www.linkedin.com/in/briannarenebell/'>
                    <Icon id='link' name='linkedin' size='huge' />
                  </a>
                </div>
              </div>
              <div style={{ ...homeMobile.photoHolder, height: photoHeight }}>
                <div style={homeMobile.crop}>
                  <Image style={{ ...homeMobile.photo, }} src={HomePhoto} />
                </div>
              </div>
            </div>


          </div>
          <div style={homeMobile.extraInfo}>
            <div style={homeMobile.about}>
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
      </div>
    )
  }
}