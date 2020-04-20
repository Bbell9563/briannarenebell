import React from 'react'
import { Link } from 'react-router-dom'
import { style } from '../../styles/ApplicationStyle'


class DesktopNavBar extends React.Component {

  render() {
    return (
      <div style={style.menuHolder}>
        <div style={style.left}>
          <Link to='/' style={{ color: 'white',...style.item,}}>
            <div >
              <h1 style={{paddingLeft:'3%', fontSize:'2vw', fontFamily:'Russo One'}}>Brianna Bell</h1>
            </div>
          </Link>
        </div>
        <div style={style.right}>

          <Link to='/portfolio' style={{...style.item, color: 'white'}}>
            <div><h4 style={{fontFamily:'Russo One'}}>Portfolio</h4></div>
          </Link>

          <Link to='/resume' style={{...style.item, color: 'white'}}>
            <div><h4 style={{fontFamily:'Russo One'}}>Resume</h4></div>
          </Link>



          <div style={{ ...style.contactHolder, ...style.item }}>
            <Link to='/contactform' style={{ color: 'white' }}>
              <div style={{ padding: '1%'}}>
                <h4 style={{fontFamily:'Russo One'}}>Contact Me</h4>
              </div>
            </Link>
          </div>


        </div>

      </div>
    )
  }
}

export default DesktopNavBar;