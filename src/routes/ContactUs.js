import "./FormStyles.css";
import React from 'react';
import { FaPaperPlane } from "react-icons/fa";
import NavBar from "../Components/NavBar";


const ContactUs = () => {
  return (
    <>
    <NavBar/>
    <div className = 'head'>
    <h1><b>Contact Us</b></h1>
    </div>
    <div className = "form">
    <form action="https://formspree.io/f/mbjeople" method ="POST">
        <label>Name</label>
            <input type="text"
            name = "username"
            autoComplete="off"
            required/>
        <label>Email</label>
            <input type="text"
            name = "Email"
            autoComplete="off"
            required/>
        <label>Subject</label>
        <input type="text"
        name = "Subject"
        autoComplete="off"
        required/>
        <label>Message</label>
            <textarea rows = "6" placeholder="Enter your message here"
             name = "message"
             autoComplete="off"
            required/>
            <button className="btn" value="send"><b>Send<FaPaperPlane/></b></button>
        </form>
    </div>
    </>
  );
}
export default ContactUs;
