import React from 'react';
import './App.css';
import NavBar from './components/Navbar';
import { Switch, Route, Link } from 'react-router-dom';
import { appStyle } from './styles/ApplicationStyle'
import Home from './components/Home'
import ContactForm from './components/ContactForm'
import Resume from './components/Resume'
import Portfolio from './components/Portfolio'

class App extends React.Component {
  state = { windowHeight: window.innerHeight,
     showSide: false,
     isMobile: false
    }

  componentDidMount() { window.addEventListener('resize', this.handleResize) }

  handleResize = () => {
    this.setState({
      windowHeight: window.innerHeight,
      isMobile: window.innerWidth < 981
    })
  }

  toggleSideBar = () => {
    const { showSide } = this.state
    this.setState({ showSide: !showSide })
  }

  render() {
    const { windowHeight, showSide, isMobile } = this.state
    return (
      <div style={{ minHeight: windowHeight ,...appStyle.window}}>
        <div style={{width:'100%'}}>
          <div>
            <NavBar isMobile={isMobile} toggleSideBar={this.toggleSideBar} showSide={showSide} />
          </div>
          <div>
            <Switch>
              <Route exact path='/' component={() => <Home isMobile={isMobile} toggleSideBar={this.toggleSideBar} showSide={showSide} />} />
              <Route exact path='/contactform' component={() => <ContactForm isMobile={isMobile} toggleSideBar={this.toggleSideBar} showSide={showSide} />} />
              <Route exact path='/portfolio' component={() => <Portfolio isMobile={isMobile} toggleSideBar={this.toggleSideBar} showSide={showSide} />} />
              <Route exact path='/resume' component={() => <Resume isMobile={isMobile} toggleSideBar={this.toggleSideBar} showSide={showSide} />} />
            </Switch>
          </div>
        </div>
        {showSide ?
          <div style={{ fontSize: '4vw', color: '#393d59', backgroundColor: '#1a1b2b', width:'35%' }}>
            <Link style={{ color: '#393d59' }} to='/' onClick={this.toggleSideBar}>
              <div style={style.sideBar}>Home</div>
            </Link>
            <Link style={{ color: '#393d59' }} to='/portfolio' onClick={this.toggleSideBar}>
              <div style={style.sideBar}>Portfolio</div>
            </Link>
            <Link style={{ color: '#393d59' }} to='/resume' onClick={this.toggleSideBar}>
              <div style={style.sideBar}>Resume</div>
            </Link>
            <Link style={{ color: '#393d59' }} to='/contactform' onClick={this.toggleSideBar}>
              <div style={style.sideBar}>Contact</div>
            </Link>
          </div>

          : <></>}
          
      </div>
    );
  }
}

const style = {
  sideBar: {
    padding: '20%'
  }
}

export default App;
