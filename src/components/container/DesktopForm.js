import React, { Component } from 'react'
import { Form} from 'semantic-ui-react'
import { form } from '../../styles/FormStyle'
import { Link } from 'react-router-dom'

class DesktopContactForm extends Component {
  defaultValues = {
    f_name: '',
    l_name: '',
    email_address: '',
    message: '',
  }
  state = { ...this.defaultValues }

  handleChange = (e, { name, value }) => {
    console.log(name)
    console.log(value)
    this.setState({ ...this.state, [name]: value });

  };
  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({ ...this.defaultValues })
  }

  render() {
    const { f_name, l_name, email_address, message } = this.state
    return (
      <Form style={form.container} onSubmit={this.handleSubmit}>
        <div style={form.header}>
          <h1>Contact Me!</h1>
        </div>
        <Form.Input style={form.input}
          placeholder='First Name'
          label='First Name'
          autoFocus
          name='f_name' value={f_name}
          onChange={this.handleChange}
        />
        <Form.Input style={form.input}
          placeholder='Last Name'
          label='Last Name'
          name='l_name'
          value={l_name}
          onChange={this.handleChange}
        />
        <Form.Input style={form.input}
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
        />
        <div style={form.buttonHolder}>
          <Link to='/' style={{ color: '#a33636', ...form.button, backgroundColor: '#cccccc' }}><div>Cancel</div></Link>
          <div style={{ ...form.button, backgroundColor: '#32247d', color: 'white' }} onClick={this.handleSubmit}>Submit</div>
        </div>
      </Form>

    )
  }
}


export default DesktopContactForm