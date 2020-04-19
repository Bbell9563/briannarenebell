import React, { Component } from 'react'
import { Form} from 'semantic-ui-react'
import { mobile } from '../../styles/FormStyle'
import { Link } from 'react-router-dom'

class MobileContactForm extends Component {

  defaultValues = {
    f_name: '',
    l_name: '',
    email_address: '',
    message: '',
  }
  state = { ...this.defaultValues }

  handleChange = (e, { name, value }) => {
    this.setState({ ...this.state, [name]: value });

  };
  handleSubmit = () => {
    this.setState({ ...this.defaultValues })
  }

  render() {
    const { f_name, l_name, email_address, message } = this.state
    return (
      <div style={{ display: 'flex' }}>
        <div style={{ width: '100%' }}>
          <Form style={mobile.container} onSubmit={this.handleSubmit}>
            <div style={mobile.header}>
              <h1 style={{fontSize:'8vw'}}>Contact Me!</h1>
            </div>
            <Form.Input style={mobile.input}
              placeholder='First Name'
              label='First Name'
              autoFocus
              name='f_name' value={f_name}
            />
            <Form.Input style={mobile.input}
              placeholder='Last Name'
              label='Last Name'
              name='l_name'
              value={l_name}
              onChange={this.handleChange}
            />
            <Form.Input style={mobile.input}
              label='Email'
              placeholder='Email'
              name='email_address'
              value={email_address}
              onChange={this.handleChange}
            />
            <Form.TextArea style={mobile.input}
              label='Message'
              placeholder='Your Message ...'
              name='message'
              value={message}
              onChange={this.handleChange}
            />
            <div style={mobile.buttonHolder}>
              <Link to='/' style={{ color: '#a33636', ...mobile.button, backgroundColor: '#cccccc' }}><div>Cancel</div></Link>
              <div style={{ ...mobile.button, backgroundColor: '#32247d', color: 'white' }} onClick={this.handleSubmit}>Submit</div>
            </div>
          </Form>
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
      </div>
    )
  }
}

const style = {
  sideBar: {
    padding: '20%'
  }
}

export default MobileContactForm