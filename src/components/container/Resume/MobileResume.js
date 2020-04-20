import React from 'react'
import { mobile, desktop } from '../../../styles/ResumeStyle'


class MobileResume extends React.Component {

  render() {
    return (
      <div style={desktop.container}>
        <div style={desktop.headerContainer}>
          <div style={desktop.header}>My Resume</div>
        </div>
      </div>
    )
  }
}

export default MobileResume