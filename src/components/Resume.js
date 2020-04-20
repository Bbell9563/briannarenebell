import React from 'react'
import DesktopResume from '../components/container/Resume/DesktopResume'
import MobileResume from '../components/container/Resume/MobileResume'


const Resume = ({ isMobile }) => (
  <>
    {isMobile ?
      <MobileResume />
      :
      <DesktopResume />
    }
  </>
)

export default Resume