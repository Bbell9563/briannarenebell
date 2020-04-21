import React, { Component } from 'react'
import { Form } from 'semantic-ui-react'
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
  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({ ...this.defaultValues })
  }

  render() {
    const { f_name, l_name, email_address, message } = this.state
    return (
      <Form style={mobile.container} onSubmit={this.handleSubmit}>
        <div style={mobile.header}>
          <h1 style={{ fontSize: '8vw' }}>Contact Me!</h1>
        </div>
        <Form.Input style={mobile.input}
          placeholder='First Name'
          label='First Name'
          autoFocus
          name='f_name' 
          value={f_name}
          onChange={this.handleChange}
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
        <Form.TextArea
          label='Message'
          placeholder='Your Message ...'
          name='message'
          value={message}
          onChange={this.handleChange}
          style={{marginTop:'3%'}}
        />
        <div style={mobile.buttonHolder}>
          <Link to='/' style={{ color: '#a33636', ...mobile.button, backgroundColor: '#cccccc' }}><div>Cancel</div></Link>
          <div style={{ ...mobile.button, backgroundColor: '#32247d', color: 'white' }} onClick={this.handleSubmit}>Submit</div>
        </div>
      </Form>
    )
  }
}


export default MobileContactForm