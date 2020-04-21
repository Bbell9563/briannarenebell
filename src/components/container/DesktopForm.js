import React from "react";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <div style={style.holder}>
        <form
          onSubmit={this.submitForm}
          action="https://formspree.io/xgeljjny"
          method="POST"
        >
          <div style={style.header}>Contact Me!</div>
          
          <div>
            <label style={style.label}>Name</label>
            <input style={style.input} type="name" name="name" placeholder='Name'/>
          </div>
          <div>
            <label style={style.label}>Email</label>
            <input style={style.input} type="email" name="email" placeholder='Email' />
          </div>
          <div>
            <label style={style.label}>Message</label>
            <textarea style={style.input} rows="4" cols="50" type="text" name="message" placeholder='Your Message...'/>
          </div>
          <div style={style.buttonHolder}>
            <a href='/' style={style.cancel}><div >Cancel</div></a>
            <button style={style.button}>Submit</button>
          </div>
        </form>
      </div>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}

const style = {
  label: {
    color: 'white',
    margin:'2% 0px',

  },
  holder: {
    margin: '5% 20%',
    backgroundColor:'rgba(25, 27, 41, .5)',
    borderRadius:'30px',
    padding:'5%'
  },
  input:{
    width:'100%',
    border:'none',
    margin:'2% 0px',
    padding:'2%',
    borderRadius:'10px',
    outline:'none'
  },
  header:{
    fontSize:'5vw',
    textAlign:'center',
    color:'white',
    marginBottom:'5%'
  },
  buttonHolder:{
    display:'flex',
    justifyContent:'space-between',
    marginTop:'3%'
  },
  button:{
    width:'48%',
    color:'white',
    backgroundColor:'#495191',
    border:'none',
    borderRadius:'10px',
    padding:'1%',
    margin:'0px',
    cursor:'pointer'

  },
  cancel:{
    width:'48%',
    color:'white',
    backgroundColor:'#9c2c19',
    border:'none',
    borderRadius:'10px',
    padding:'1%',
    textAlign:'center',
    cursor:'pointer'
  }
}