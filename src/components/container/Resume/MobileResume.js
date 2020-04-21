import React from 'react'
import { mobile } from '../../../styles/ResumeStyle'
import { Icon, Image } from 'semantic-ui-react'
import { Skills, Contact, Experience, Education } from './ResumeComponent'

class MobileResume extends React.Component {
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
      <div style={mobile.container}>
        <div style={mobile.headerContainer}>
          <div style={mobile.header}>My Resume</div>
        </div>
        <div style={{ ...mobile.holder, height: holderHeight }}>
          <div style={mobile.tabHolder}>
            <div onMouseEnter={() => this.changeActive('contact')} id='contact' style={{ ...mobile.tabs, border: 'none' }}>
              Contact Info
            </div>
            <div onMouseEnter={() => this.changeActive('skills')} id='skills' style={mobile.tabs}>
              Skills
            </div>
            <div onMouseEnter={() => this.changeActive('experience')} id='experience' style={mobile.tabs}>
              Experience
            </div>
            <div onMouseEnter={() => this.changeActive('education')} id='education' style={mobile.tabs}>
              Education
            </div>
          </div>
          <div style={mobile.info}>
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

export default MobileResume