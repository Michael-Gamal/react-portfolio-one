import React from 'react'
import './contact.css'
import { MdOutlineMailOutline } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
const Contact = () => {

  /***Why*/ 
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_p2c0ejg', 'template_0ndigyk', form.current, {
        publicKey: 'Ua54Rc-Hv6A1vBTxr',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      e.target.reset();
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMailOutline className='contact__option-icon'/>
            <h4>Email</h4>
            <h4>michaelgamal049@gmail.com</h4>
            <a href="mailto:michaelgamal049@gmail.com" target='_blanck'>Send a message</a>
          </article>
          <article className="contact__option">
            <BsMessenger className='contact__option-icon'/>
            <h4>Messanger</h4>
            <h4>Michael Jamal</h4>
            <a href="https://m.me/michael.jamal.18" target='_blanck'>Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h4>+201275721124</h4>
            <a href="https://api.whatsapp.com/send?phone=201275721124" target='_blanck'>Send a message</a>
          </article>
        </div>
        {/* End Of contact Option */}
        <form ref={form} onSubmit={sendEmail} >
          <input type="text" name="name" placeholder='Your Full Name' required />
          <input type="email" name="email" placeholder='Your Email' required />
          <textarea name='message' rows={7} placeholder='Your Message'></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact