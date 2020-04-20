import React from 'react'
import HomeDesktop from './container/DesktopHome'
import HomeMobile from './container/MobileHome'


const Home = ({isMobile, showSide, toggleSideBar}) =>  (
  <>
    {!isMobile ?  
    <HomeDesktop />
    :
    <HomeMobile showSide={showSide} toggleSideBar={toggleSideBar}/>
    }
  </>
)

export default Home

