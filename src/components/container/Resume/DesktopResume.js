import React from 'react'
import { desktop } from '../../../styles/ResumeStyle'
import Resume from '../../../images/resume.png'
import { Image } from 'semantic-ui-react'


class DesktopResume extends React.Component {

  render() {
    return (
      <div style={desktop.container}>
        <div style={desktop.headerContainer}>
          <div style={desktop.header}>My Resume</div>
        </div>
        <div style={{display:'flex'}}>
        <div style={style.photoHolder}>
          <Image style={style.photo} src={Resume} />
        </div>
        </div>
      </div>
    )
  }
}

const style={
  photo:{
    width:'500px',
    height:'auto',
  },
  photoHolder:{
    borderRadius:'20px',
    marginLeft: '5%',
    marginTop:'-3%',
    overflow:'hidden'
  }
}

export default DesktopResume