import React, { Component } from 'react';
import ReactDOM from "react-dom";
import axios from "axios";
import { TextField, Button, Container, Grid } from "@material-ui/core";
import './ContactForm.css'


class ContactForm extends Component {
 state = {
  name: '',
  email: '',
  phoneNumber: '',
  sent: false,
  buttonText: "Send Message",
  emailError: false,
  errors: {}
 };

 resetForm = () => {
  this.setState({
   name: "",
   email: "",
   phoneNumber: '',
   content: "",
   buttonText: "Message Sent",
  });

  setTimeout(() => {
   this.setState({ sent: false });
  }, 3000);
 };


 // validate name phone number and content
 validate = () => {
  let temp = [];
  temp.name = this.state.name ? '' : "This field is required"
  temp.phoneNumber = this.state.phoneNumber.length > 8 ? '' : "Minimum 9 number is required."
  temp.content = this.state.content ? '' : "This field is required"
  this.setState({
   errors: { ...temp }
  })
  return Object.values(temp).every(x => x === '')
 }

 //validate the email
 handleChangeEmail(e) {
  if (
   !e.target.value.match(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
   )
  ) {
   this.setState({
    email: e.target.value,
   });
   this.setState({ emailError: true });

   if (this.state.email === "") {
    // check if the input is empty
    this.setState({ emailError: false });
   }
  } else {
   this.setState({ email: e.target.value, emailError: false });
  }
 }



 // submit contact form
 formSubmit = async (e) => {
  e.preventDefault();

  let data = {
   name: this.state.name,
   email: this.state.email,
   phoneNumber: this.state.phoneNumber,
   content: this.state.content,
  };

  if (this.validate()) {
   this.setState({
    buttonText: "...sending",
   });

   try {
    await axios.post("http://localhost:5000/contact_form/entries", data);
    this.setState({ sent: true }, this.resetForm());
    this.setState({
     buttonText: "Success Send",
    });
   } catch (error) {
    console.log(error);
    this.setState({
     buttonText: "Send Message",
    });
   }
  }
 };



 render() {
  return (
   <Grid xs={12} spacing={3} >
    <Container >
     <h1 className='contact-title' >Contact Us Form</h1>

     <form className="contact-form" onSubmit={(e) => this.formSubmit(e)}>
      <TextField
       error={this.state.errors.name}
       id="standard-full-width"
       placeholder="Enter your name"
       label="Name"
       variant="outlined"
       value={this.state.name}
       onChange={(e) => this.setState({ name: e.target.value })}
       type="text"
       helperText="This field is required."
       fullWidth
       InputLabelProps={{
        shrink: true,
       }}

      />
      <br />
      <br />
      <br />

      <TextField
       id="standard-full-width"
       label="Email"
       placeholder="Enter email address"
       variant="outlined"
       value={this.state.email}
       onChange={(e) => this.handleChangeEmail(e)}
       error={this.state.emailError}
       required
       type="email"
       helperText="This should input validate email address."
       fullWidth
       InputLabelProps={{
        shrink: true,
       }}
      />
      <br />
      <br />
      <br />
      <TextField
       type='number'
       error={this.state.errors.phoneNumber}
       id="standard-full-width"
       placeholder="Enter Phone Number"
       label="Phone Number"
       variant="outlined"
       value={this.state.phoneNumber}
       onChange={(e) => this.setState({ phoneNumber: e.target.value })}
       helperText="This field is required min 9 number"
       fullWidth
       InputLabelProps={{
        shrink: true,
       }}
      />
      <br />
      <br />
      <br />
      <TextField
       id="outlined-textarea"
       error={this.state.errors.content}
       label="Content"
       placeholder="Enter Content"
       variant="outlined"
       multiline
       rows={10}
       value={this.state.content}
       onChange={(e) => this.setState({ content: e.target.value })}
       type="text"
       helperText="This field is required"
       fullWidth
       InputLabelProps={{
        shrink: true,
       }}
      />
      <br />
      <br />
      <br />


      <div className="button--container">
       <Button type="submit" variant="outlined" color="primary" >
        {this.state.buttonText}
       </Button>
      </div>
     </form>

    </Container>
   </Grid>

  );
 }
}
export default ContactForm