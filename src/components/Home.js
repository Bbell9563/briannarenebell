import React from 'react'
import HomeDesktop from './container/DesktopHome'
import HomeMobile from './container/MobileHome'



export default class Home extends React.Component {
  state = {
    width: window.innerWidth
  }

  componentDidMount() { window.addEventListener('resize', this.handleResize) }

  handleResize = () => {
    this.setState({
      width: window.innerWidth
    })
  }

  render() {
    const {width } = this.state
    if (width > 981) {
      return (
        <HomeDesktop />
      )
    }
    else{
      return(
        <HomeMobile showSide={this.props.showSide} toggleSideBar={this.props.toggleSideBar}/>
      )
    }
  }
}

