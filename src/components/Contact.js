import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../App.css';
import { valHooks } from 'jquery';
import * as emailjs from 'emailjs-com';

class Contact extends Component {
  state = {
    fname: '',
    lname: '',
    email: '',
    phone: '',
    explain: '',
  }

  handleSubmit(e){
    e.preventDefault();

    const { fname, lname, email, phone, explain } = this.state;

    let templateParams = {
      from_name: email,
      to_name: 'kennedyracecars@cs.com',
      subject: 'web inquiry',
      name: fname + " " + lname,
      email: email,
      phone: phone,
      explain: explain
    }
    emailjs.send(
      'service_20ndysd',
      'template_cdm96aj',
      templateParams,
      'user_1Unq2WuPDytkcr9AOqtwV'
    );
    this.resetForm();
  }

  resetForm() {
    this.setState({
      fname: '',
      lname: '',
      email: '',
      phone: '',
      explain: '',
    });
  }

  handleChange = (param, e) => {
    this.setState({
      [param]: e.target.value
    });
  }
 
  render() {

    return (
        <div className="contactpage container-fluid">
          <a id="top"/>
            <div className="row allcontact">
          <div className="spacer"></div>
          <div className="contact-left">
              <br/><br/><br/>
              <h3 className="emailus cq">Phone:</h3>
              <h3 className="emailus cinfo">(303) 781-7278</h3>
              <br/>
              <h3 className="emailus cq">Address:</h3>
              <h3 className="emailus cinfo">1950 West Union Avenue A-10</h3>
              <h3 className="emailus cinfo">Englewood, Co 80110</h3>
              <br/>
              <h3 className="emailus cq">Office Hours:</h3>
              <h3 className="emailus cinfo hrs">Monday</h3>
              <h3 className="emailus cinfo hrs">By Appointment Only</h3>
              <h5 className="emailus cinfo hrs">Tuesday - Friday</h5>
              <h5 className="emailus cinfo hrs">8:00 AM - 6:00 PM MST</h5>
              <h5 className="emailus cinfo hrs">Closed for Lunch</h5>
              <h5 className="emailus cinfo hrs">11:00 AM - 12:00 PM MST</h5>
            
          </div>
          <div className="contact-middle">
          <h5 className="emailus">EMAIL US FOR MORE INFO</h5>
          <form name="contact" className="contact form-group" onSubmit={this.handleSubmit.bind(this)}>
          
            <br/>
            <label for="fname" className="form-label">First Name</label><br/>
            <input type="text" className="form-control" id="fname" name="fname" value={this.state.fname} onChange={this.handleChange.bind(this, 'fname')} placeholder="First Name" required></input><br/>
            <label for="lname" className="form-label">Last Name</label><br/>
            <input type="text" className="form-control" id="lname" name="lname" value={this.state.lname} onChange={this.handleChange.bind(this, 'lname')} placeholder="Last Name" required></input><br/>
            <label for="email" className="form-label">Email Address</label><br/>
            <input type="email" className="form-control" id="email" name="email" value={this.state.email} onChange={this.handleChange.bind(this, 'email')} placeholder="Email" required></input><br/>
            <label for="phone" className="form-label">Phone Number</label><br/>
            <input type="tel" className="form-control" id="phone" name="phone" value={this.state.phone} onChange={this.handleChange.bind(this, 'phone')} placeholder="Phone Number" required></input><br/>
            <label for="explain" className="form-label">Additional Info</label><br/>
            <textarea type="textarea" className="form-control" id="explanation" name="explanation" value={this.state.explain} onChange={this.handleChange.bind(this, 'explain')} placeholder="Enter More Information Here" required></textarea><br/>
            <input type="submit" className="submit" value="Submit"></input>

          </form>
          </div>
          </div>
        </div>
    );
  }
}

export default Contact;