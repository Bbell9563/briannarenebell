import React from 'react'
import { homeMobile} from '../../styles/ApplicationStyle'
import HomePhoto from '../../images/croppedUniform.png'
import { Image, Icon } from 'semantic-ui-react'
import Keyboard from '../../images/keyboard.jpg'
import { Link } from 'react-router-dom'


export default class MobileDesktop extends React.Component {
  state = {photoHeight: (window.innerWidth/1.1)}

  componentDidMount() { window.addEventListener('resize', this.handleResize) }

  handleResize = () => {
    this.setState({
      photoHeight: (window.innerWidth /1.1),
    })
  }

  render() {
    const { photoHeight} = this.state
    return (
      <div style={{display:'flex'}}>
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

          <div style={homeMobile.mainInfo}>
            <div style={homeMobile.description}>
              <div>
                <h1 style={{ fontSize: '7vw'}}>Brianna Bell</h1>
                <h3 style={{ fontSize: '4vw', margin: '0px' }}>Full-Stack Web Developer/</h3>
                <h3 style={{ fontSize: '4vw', margin: '0px' }}>Geospatial Engineer </h3>
              </div>
              <div style={{marginTop:'4%'}}>
                <a style={{ color: 'white' }} href='https://github.com/Bbell9563'>
                  <Icon id='git' name='github' size='huge'/>
                </a>
                <a style={{ color: 'white' }} href='https://www.linkedin.com/in/briannarenebell/'>
                  <Icon id='link' name='linkedin' size='huge'/>
                </a>
              </div>
            </div>
            <div style={{ ...homeMobile.photoHolder, height: photoHeight }}>
              <div style={homeMobile.crop}>
                <Image style={homeMobile.photo} src={HomePhoto} />
              </div>
            </div>
          </div>


        </div>
        <div style={homeMobile.extraInfo}>
          <div style={homeMobile.about}>
            <h2>A Little About Me</h2>
          </div>
          <div style={homeMobile.skills}>
            <h2>Skills</h2>
          </div>

        </div>
      </div>
      {this.props.showSide ? 
      <div style={{fontSize:'5vw', color:'#393d59', backgroundColor:'#1a1b2b'}}>
        <Link style={{color:'#393d59'}} to='/portfolio' onClick={this.props.toggleSideBar}>
          <div style={style.sideBar}>Portfolio</div>
          </Link>
        <Link style={{color:'#393d59'}} to='/resume' onClick={this.props.toggleSideBar}>
          <div style={style.sideBar}>Resume</div>
          </Link>
        <Link style={{color:'#393d59'}} to='/contactform' onClick={this.props.toggleSideBar}>
          <div style={style.sideBar}>Contact</div>
          </Link>
      </div> 
      
      : <></>}
      </div>
    )
  }
}

const style={
  sideBar:{
    padding:'20%'
  }
}