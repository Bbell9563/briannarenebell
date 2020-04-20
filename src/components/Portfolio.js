import React from 'react'
import DesktopPortfolio from '../components/container/Portfolio/DesktopPortfolio'
import MobilePortfolio from '../components/container/Portfolio/MobilePortfolio'


const Resume = ({ isMobile }) => (
  <>
    {isMobile ?
      <MobilePortfolio />
      :
      <DesktopPortfolio />
    }
  </>
)

export default Resume