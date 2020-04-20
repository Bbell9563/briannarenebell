import React from 'react'
import DesktopNav from './container/DesktopNav'
import MobileNav from './container/MobileNav'


class NavBar extends React.Component {
  componentDidMount() { window.addEventListener('resize', this.handleResize) }


  toggleSideBar = () => {
    console.log('here')
    this.props.toggleSideBar()
  }

  render() {
    return (
      <>
        {this.props.isMobile ?
          <MobileNav showSide={this.props.showSide} toggleSideBar={this.props.toggleSideBar} />
          :
          <DesktopNav />
        }
      </>
    )
  }
}

export default NavBar;

