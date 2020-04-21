import React from 'react'
import { desktop } from '../../../styles/ResumeStyle'
import { Icon, Image } from 'semantic-ui-react'
import { Skills, Contact, Experience, Education } from './ResumeComponent'

class DesktopResume extends React.Component {
  state = { holderHeight: window.innerHeight / 1.4, component: '' }

  componentDidMount() { this.changeActive('contact') }

  changeActive = (id) => {
    document.getElementById('contact').style.backgroundColor = 'rgba(25, 27, 41, .7)'
    document.getElementById('skills').style.backgroundColor = 'rgba(25, 27, 41, .7)'
    document.getElementById('experience').style.backgroundColor = 'rgba(25, 27, 41, .7)'
    document.getElementById('education').style.backgroundColor = 'rgba(25, 27, 41, .7)'
    document.getElementById(id).style.backgroundColor = 'rgba(73, 87, 138, .3)'
    this.setState({ component: id })
  }

  render() {
    const { holderHeight , component} = this.state
    return (
      <div style={desktop.container}>
        <div style={desktop.headerContainer}>
          <div style={desktop.header}>My Resume</div>
        </div>
        <div style={{ ...desktop.holder, height: holderHeight }}>
          <div style={desktop.tabHolder}>
            <div onMouseEnter={() => this.changeActive('contact')} id='contact' style={{ ...desktop.tabs, border: 'none' }}>
              Contact Info
            </div>
            <div onMouseEnter={() => this.changeActive('skills')} id='skills' style={desktop.tabs}>
              Skills
            </div>
            <div onMouseEnter={() => this.changeActive('experience')} id='experience' style={desktop.tabs}>
              Experience
            </div>
            <div onMouseEnter={() => this.changeActive('education')} id='education' style={desktop.tabs}>
              Education
            </div>
          </div>
          <div style={desktop.info}>
            {component === 'skills'? <Skills /> : <></>}
            {component === 'contact'? <Contact /> : <></>}
            {component === 'experience'? <Experience /> : <></>}
            {component === 'education'? <Education /> : <></>}
          </div>

        </div>
      </div>
    )
  }
}

export default DesktopResume