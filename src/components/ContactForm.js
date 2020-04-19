import React, { Component } from 'react'
import { Form, Input } from 'semantic-ui-react'
import { form } from '../styles/FormStyle'
import { Link } from 'react-router-dom'

class ContactForm extends Component {

  defaultValues ={
    f_name: '',
    l_name:'',
    email_address:'',
    message:'',
  }
  state= {...this.defaultValues}

  handleChange = (e, { name, value }) => {
    this.setState({ ...this.state, [name]: value });

  };
  handleSubmit = () => {
      this.setState({...this.defaultValues})
  }

  render() {
    const {f_name, l_name, email_address, message} = this.state
    return (
      <Form style={form.container} onSubmit={this.handleSubmit}>
        <div style={form.header}>
          Contact Me!
        </div>
        <Form.Group widths='equal'>
          <Form.Field style={form.input}>
            <label style={{ color: 'white' }}>First Name</label>
            <Input 
              placeholder='First Name'
              autoFocus
              name='f_name' value={f_name} 
              onChange={this.handleChange}
            />
          </Form.Field>
          <Form.Field style={form.input}>
            <label style={{ color: 'white' }}>Last Name</label>
            <Input 
              placeholder='Last Name' 
              name='l_name' 
              value={l_name} 
              onChange={this.handleChange}
              />
          </Form.Field>
        </Form.Group>
        <Form.Field style={form.input}> 
          <label style={{ color: 'white' }}>Email</label>
          <Input 
            placeholder='Email' 
            name='email_address' 
            value={email_address} 
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field style={form.input}>
          <label style={{ color: 'white' }}>Message</label>
          <Form.TextArea 
            placeholder='Your Message ...' 
            name='message' 
            value={message} 
            onChange={this.handleChange}
          />
        </Form.Field>
        <div style={form.buttonHolder}>
          <Link to='/' style={{ color:'#a33636',...form.button, backgroundColor:'#cccccc'}}><div>Cancel</div></Link>
          <div style={{...form.button, backgroundColor:'#8fa5d9', color:'white'}} onClick={this.handleSubmit}>Submit</div>
        </div>
      </Form>
    )
  }
}

export default ContactForm