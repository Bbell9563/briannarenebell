import React from 'react'
import { Link } from 'react-router-dom'
import { mobile } from '../../styles/ApplicationStyle'
import { Icon } from 'semantic-ui-react'

class MobileNavBar extends React.Component {

  checkToggle = () => {
    if(this.props.showSide === true){
      this.props.toggleSideBar()
    }
  }

  render() {
    return (
      <div style={mobile.menuHolder}>
        <div style={mobile.left}>
          <Link to='/' style={{ color: 'white', ...mobile.item, }} onClick={this.checkToggle}>
            <div >
              <h1 style={{ paddingLeft: '10%', fontSize: '5vw'}}>Brianna Bell</h1>
            </div>
          </Link>
        </div>
        <div style={mobile.right}>
          <div onClick={this.props.toggleSideBar} style={{ margin: '3%', color: '#393d59' }}><Icon name='unordered list' size='huge' /></div>
        </div>

      </div>
    )
  }
}

export default MobileNavBar;