import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Resume extends Component {

  render() {
    return (
      <div style={{ display: 'flex' }}>
        <div style={{ textAlign: 'center', color: 'white', marginTop: '10%', width:'100%'}}>
          <h1>Resume Under Construction</h1>
        </div>

        {this.props.showSide ?
          <div style={{ fontSize: '5vw', color: '#393d59', backgroundColor: '#1a1b2b' }}>
            <Link style={{ color: '#393d59' }} to='/portfolio' onClick={this.props.toggleSideBar}>
              <div style={style.sideBar}>Portfolio</div>
            </Link>
            <Link style={{ color: '#393d59' }} to='/resume' onClick={this.props.toggleSideBar}>
              <div style={style.sideBar}>Resume</div>
            </Link>
            <Link style={{ color: '#393d59' }} to='/contactform' onClick={this.props.toggleSideBar}>
              <div style={style.sideBar}>Contact</div>
            </Link>
          </div> : <></>
        }
      </div >
    )
  }
}

const style={
  sideBar:{
    padding:'20%'
  }
}

export default Resume