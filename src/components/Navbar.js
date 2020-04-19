import React from 'react'
import { Link } from 'react-router-dom'
import { style } from '../styles/ApplicationStyle'
import DesktopNav from './container/DesktopNav'
import MobileNav from './container/MobileNav'


class NavBar extends React.Component {
  state = {
    width: window.innerWidth
  }

  componentDidMount() { window.addEventListener('resize', this.handleResize) }


toggleSideBar = () => {
  console.log('here')
  this.props.toggleSideBar()
}

  render() {
    const {width } = this.state
    if (width > 1100) {
      return (
        <DesktopNav />
      )
    }
    else{
      return(
        <MobileNav showSide={this.props.showSide} toggleSideBar={this.props.toggleSideBar} />
      )
    }
  }
    
}

export default NavBar;

