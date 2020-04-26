import React from 'react';
import './App.css';
import NavBar from './components/Navbar';
import { Switch, Route, Link } from 'react-router-dom';
import { appStyle } from './styles/ApplicationStyle'
import Home from './components/Home'
import ContactForm from './components/ContactForm'
import Resume from './components/Resume'
import Portfolio from './components/Portfolio'
import Layout from './components/Layout'

class App extends React.Component {
  state = { windowHeight: window.innerHeight,
     showSide: false,
     isMobile: true
    }

  componentDidMount() { 
    this.setState({isMobile: window.innerWidth < 1000})
    // window.addEventListener('resize', this.handleResize) 
  }

  handleResize = () => {
    this.setState({
      windowHeight: window.innerHeight,
      isMobile: window.innerWidth < 1000
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
          <Layout >
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
          </Layout>
        </div>
          
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
