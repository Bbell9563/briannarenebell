import React from 'react'
import { desktop } from '../../../styles/ResumeStyle'


class DesktopResume extends React.Component {
  state = { holderHeight: window.innerHeight / 1.4 }

  componentDidMount() {
    this.changeActive('contact')
  }

  changeActive = (id) => {
    document.getElementById('contact').style.backgroundColor = 'rgba(25, 27, 41, .7)'
    document.getElementById('skills').style.backgroundColor = 'rgba(25, 27, 41, .7)'
    document.getElementById('experience').style.backgroundColor = 'rgba(25, 27, 41, .7)'
    document.getElementById('education').style.backgroundColor = 'rgba(25, 27, 41, .7)'

    document.getElementById(id).style.backgroundColor = 'rgba(73, 87, 138, .3)'
  }

  render() {
    const { holderHeight } = this.state
    return (
      <div style={desktop.container}>
        <div style={desktop.headerContainer}>
          <div style={desktop.header}>My Resume</div>
        </div>
        <div style={{ ...desktop.holder, height: holderHeight }}>
          <div style={desktop.tabHolder}>
            <div
              onMouseEnter={()=> this.changeActive('contact')}
              id='contact'
              style={desktop.tabs}
            >
              Contact Info
            </div>
            <div
              onMouseEnter={()=> this.changeActive('skills')}
              id='skills'
              style={{ ...desktop.tabs, borderTop: '1px solid #3b4763' }}
            >
              Skills
            </div>
            <div
              onMouseEnter={()=> this.changeActive('experience')}
              id='experience'
              style={{ ...desktop.tabs, borderTop: '1px solid #3b4763' }}
            >
              Experience
            </div>
            <div
              onMouseEnter={()=> this.changeActive('education')}
              id='education'
              style={{ ...desktop.tabs, borderTop: '1px solid #3b4763' }}
            >
              Education
            </div>
          </div>
          <div style={desktop.info}>

          </div>
        </div>
      </div>
    )
  }
}

export default DesktopResume