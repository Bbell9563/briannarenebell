import React, { Component } from 'react'
import DesktopForm from './container/DesktopForm'
import MobileForm from './container/MobileForm'


class ContactForm extends Component {
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
    if (width > 1100) {
      return (
        <DesktopForm />
      )
    }
    else{
      return(
        <MobileForm />
      )
    }
  }
}


export default ContactForm