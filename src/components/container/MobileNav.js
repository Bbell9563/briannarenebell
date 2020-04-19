import React from 'react'
import { Link } from 'react-router-dom'
import { mobile } from '../../styles/ApplicationStyle'
import { Icon } from 'semantic-ui-react'

class MobileNavBar extends React.Component {

  render() {
    const {showSide, toggleSideBar} = this.props
    return (
      <div style={mobile.menuHolder}>
        <div style={mobile.left}>
          <Link to='/' style={{ color: 'white', ...mobile.item, }}>
            <div >
              <h1 style={{ paddingLeft: '10%', fontSize: '5vw' }}>Brianna Bell</h1>
            </div>
          </Link>
        </div>
        <div style={mobile.right}>

          <div onClick={this.props.toggleSideBar} style={{ margin: '3%', color: '#393d59' }}><Icon name='unordered list' size='huge' /></div>

          {/* <Link to='/portfolio' style={{...style.item, color: 'white'}}>
            <div><h4>Portfolio</h4></div>
          </Link>

          <Link to='/resume' style={{...style.item, color: 'white'}}>
            <div><h4>Resume</h4></div>
          </Link> */}



          {/* <div style={{ ...mobile.contactHolder, ...mobile.item }}>
            <Link to='/contactform' style={{ color: 'white' }}>
              <div style={{ padding: '1%'}}>
                <h4 style={{fontSize:'3vw'}}>Contact Me</h4>
              </div>
            </Link>
          </div> */}


        </div>

      </div>
    )
  }
}

export default MobileNavBar;