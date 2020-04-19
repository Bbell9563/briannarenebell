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
  state = { windowHeight: window.innerHeight}

  componentDidMount() {window.addEventListener('resize', this.handleResize)}

  handleResize = () => {
    this.setState({
      windowHeight: window.innerHeight
    })
  }

  render() {
    const { windowHeight} = this.state
    return (
      <div style={{ ...appStyle.window, minHeight: windowHeight }}>
        <div style={appStyle.navContainer}>
          <NavBar />
        </div>
        <div style={appStyle.pageContainer}>
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/contactform' component={ContactForm} />
            <Route exact path='/portfolio' component={Portfolio} />
            <Route exact path='/resume' component={Resume} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
