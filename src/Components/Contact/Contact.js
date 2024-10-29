import React from 'react'
import "./Contact.css"
import theme_pattern from "../../assets/theme_pattern.png"
import call_icon from "../../assets/call_icon.png"
import mail_icon from "../../assets/mail_icon.png"
import location_icon from "../../assets/location_icon.svg"

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "6e297c8b-b67a-402b-9b4a-243bc3f4aefc");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message)
    }
  };

  return (
    <div id="contact" className='contact'>
      <div className="contact-title">
        <h1>
            Get in touch
        </h1>
        <img src={theme_pattern} alt="" />
      </div>
      <div className="contact-section">
        <div className="contact-left">
            <h1>Let's talk</h1>
            <p>I'm available to take on new web development projects! With a focus
                on creating user-friendly, responsive, and visually compelling websites, 
                I’m ready to bring your vision to life. Whether you need a unique design or
                enhanced functionality, let's work together to craft a standout online experience 
                tailored to your needs... 
            </p>
            <div className="contact-details">
                <div className="contact-detail">
                    <img src={mail_icon} alt="" />
                    <p>kirushanthmirunu2000@gmail.com</p>
                </div>
                <div className="contact-detail">
                    <img src={call_icon} alt="" />
                    <p>+94 75 248 5458</p>
                </div>
                <div className="contact-detail">
                    <img src={location_icon} alt="" />
                    <p>Batticaloa,Sri-Lanka</p>
                </div>
            </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label htmlFor=''>Your Name</label>
          <input type='text' placeholder='Enter your name' name="name"/>
          <label htmlFor=''>Your Email</label>
          <input type='email' placeholder='Enter your email' name="email"/>
          <label htmlFor=''>Write your message here</label>
          <textarea name="message" rows="8" placeholder='Enter your message'></textarea>
          <button type="submit" className='contact-submit'>Submit now</button>
        </form>
      </div>
    </div>
  )
}

export default Contact