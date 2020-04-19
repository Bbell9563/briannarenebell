import React from 'react'
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
  
  handleResize = () => {
    this.setState({
      width: window.innerWidth
    })
  }

  render() {
    const { width } = this.state
    if (width > 1000) {
      return (
        <DesktopNav />
      )
    }
    else {
      return (
        <MobileNav showSide={this.props.showSide} toggleSideBar={this.props.toggleSideBar} />
      )
    }
  }

}

export default NavBar;

