import React from 'react'
import { desktop , mobile} from '../styles/ResumeStyle'
import { Skills, Contact, Experience, Education } from './container/ResumeComponent'

class Resume extends React.Component {
  state = { holderHeight: window.innerHeight / 1.4, component: '',}

  componentDidMount() { this.changeActive('skills') }

  changeActive = (id) => {
    document.getElementById('contact').style.backgroundColor = 'rgba(25, 27, 41, .7)'
    document.getElementById('skills').style.backgroundColor = 'rgba(25, 27, 41, .7)'
    document.getElementById('experience').style.backgroundColor = 'rgba(25, 27, 41, .7)'
    document.getElementById('education').style.backgroundColor = 'rgba(25, 27, 41, .7)'
    document.getElementById(id).style.backgroundColor = 'rgba(73, 87, 138, .3)'
    this.setState({ component: id })
  }

  render() {
    const { holderHeight , component, mobileContainer} = this.state
    const {isMobile} = this.props
    return (
      <div style={isMobile ? mobile.container:  desktop.container}>
        <div style={isMobile ? mobile.headerContainer : desktop.headerContainer}>
          <div style={isMobile ? mobile.header :desktop.header}>My Resume</div>
        </div>
        <div style={isMobile ?  {...mobile.holder ,height: holderHeight} :{ ...desktop.holder, height: holderHeight }}>
          <div style={desktop.tabHolder}>
            <div onClick={() => this.changeActive('contact')} onMouseEnter={() => this.changeActive('contact')} id='contact' style={isMobile ? { ...mobile.tabs, border: 'none' } : { ...desktop.tabs, border: 'none' }}>
              Contact Info
            </div>
            <div onClick={() => this.changeActive('skills')} onMouseEnter={() => this.changeActive('skills')} id='skills' style={isMobile ? mobile.tabs : desktop.tabs}>
              Skills
            </div>
            <div onClick={() => this.changeActive('experience')} onMouseEnter={() => this.changeActive('experience')} id='experience' style={isMobile ? mobile.tabs : desktop.tabs}>
              Experience
            </div>
            <div onClick={() => this.changeActive('education')} onMouseEnter={() => this.changeActive('education')} id='education' style={isMobile ? mobile.tabs : desktop.tabs}>
              Education
            </div>
          </div>
          <div style={desktop.info}>
            {component === 'skills'? <Skills isMobile={this.props.isMobile}/> : <></>}
            {component === 'contact'? <Contact isMobile={this.props.isMobile}/> : <></>}
            {component === 'experience'? <Experience isMobile={this.props.isMobile}/> : <></>}
            {component === 'education'? <Education isMobile={this.props.isMobile}/> : <></>}
          </div>

        </div>
      </div>
    )
  }
}

export default Resume