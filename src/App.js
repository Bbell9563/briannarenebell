import React from 'react';
import './App.css';
import NavBar from './components/Navbar';
import { Switch, Route } from 'react-router-dom';
import { appStyle } from './styles/ApplicationStyle'
import Home from './components/Home'
import ContactForm from './components/ContactForm'
import Resume from './components/Resume'
import Portfolio from './components/Portfolio'

class App extends React.Component {
  state = { windowHeight: window.innerHeight,showSide: false }

  componentDidMount() {window.addEventListener('resize', this.handleResize)}

  handleResize = () => {
    this.setState({
      windowHeight: window.innerHeight
    })
  }

  toggleSideBar = () => {
    const { showSide } = this.state
    this.setState({ showSide: !showSide })
  }

  render() {
    const { windowHeight, showSide} = this.state
    return (
      <div style={{ ...appStyle.window, minHeight: windowHeight }}>
        <div style={appStyle.navContainer}>
          <NavBar toggleSideBar={this.toggleSideBar} showSide={showSide}/>
        </div>
        <div style={appStyle.pageContainer}>
          <Switch>
            <Route exact path='/' component={()=> <Home toggleSideBar={this.toggleSideBar} showSide={showSide}/>}/>
            <Route exact path='/contactform' component={()=> <ContactForm toggleSideBar={this.toggleSideBar} showSide={showSide} />} />
            <Route exact path='/portfolio' component={()=> <Portfolio toggleSideBar={this.toggleSideBar} showSide={showSide} />} />
            <Route exact path='/resume' component={()=> <Resume toggleSideBar={this.toggleSideBar} showSide={showSide} />} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
