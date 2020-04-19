import React from 'react'
import { Link } from 'react-router-dom'
import { style } from '../styles/ApplicationStyle'

class NavBar extends React.Component {

  render() {
    return (
      <div style={style.menuHolder}>
        <div style={style.left}>
          <Link to='/' style={{ color: 'white',...style.item,}}>
            <div>
              <h2 style={{paddingLeft:'3%', fontSize:'2vw'}}>Brianna Bell</h2>
            </div>
          </Link>
        </div>
        <div style={style.right}>

          <Link to='/portfolio' style={{ ...style.item, color: 'white', fontSize: '1vw' }}>
            <div>Portfolio</div>
          </Link>

          <Link to='/resume' style={{ ...style.item, color: 'white', fontSize: '1vw' }}>
            <div>Resume</div>
          </Link>



          <div style={{ ...style.contactHolder, ...style.item }}>
            <Link to='/contactform' style={{ color: 'white' }}>
              <div style={{ padding: '1%', fontSize:'1vw' }}>
                Contact Me
              </div>
            </Link>
          </div>


        </div>

      </div>
    )
  }
}

export default NavBar;

