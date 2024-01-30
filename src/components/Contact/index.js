<<<<<<< HEAD
import React, {useRef} from 'react';
import "./style.css";
import { useForm, isSubmitting } from "react-hook-form";
import { IoClose } from "react-icons/io5";
import emailjs from '@emailjs/browser';

function Contact() {
  const formRef = useRef();
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm();

  const onSubmit = (data) => {
    emailjs.sendForm('service_rf54yda', 'template_54js2sk', formRef.current, 'GgVIh713sY_zz_rPJ')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <>
      <div className="contact">
        <div className="contact-wrapper">
          <h2>Contact us</h2>
          <p className="desc desc-contact">Any question? Reach out to us and we’ll get back to you shortly.</p>
          <p className="desc-admin">admin@superlott.io</p>
          <form ref={formRef} onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              name = "user_name"
              {...register("user_name", { required: "Please enter your name" })}
              className="form-input"
              placeholder="Your Name"
            />
            {errors.user_name && <p className="error-message"><IoClose /> {errors.user_name.message}</p>}
            <input
              type="email"
              name="user_email"
              {...register("user_email", { required: "Please enter your email" })}
              className="form-input"
              placeholder="Your Email"
            />
            {errors.user_email && <p className="error-message"><IoClose /> {errors.user_email.message}</p>}
            <textarea
              rows="5"
              name="message"
              {...register("message", { required: "Please enter your message", maxLength: 20 })}
              cols="10"
              className="form-input"
              placeholder="Your Message"
            />
            {errors.message && <p className="error-message"><IoClose /> {errors.message.message}</p>}

            <input
              type="submit"
              className="button-submit btn-contact"
              value={'Submit'}
              disabled={isSubmitting}
            />
          </form>
        </div>
=======
import React, { useEffect } from 'react';
import "./style.css"
const Contact = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "//s3.amazonaws.com/downloads.mailchimp.com/js/mc-validate.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <div id="mc_embed_shell">
      <div id="mc_embed_signup">
        <form action="https://gmail.us21.list-manage.com/subscribe/post?u=59b901d00923cf12d50e8bcf5&amp;id=c220c4dce8&amp;f_id=00a4f8e6f0" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank">
          <div id="mc_embed_signup_scroll">
            <h2>Contact</h2>
            <div className="indicates-required"><span className="asterisk">*</span> indicates required</div>
            <div className="mc-field-group">
              <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" required="" />
            </div>
            <div className="mc-field-group">
              <input type="text" name="FNAME" className="form-input" id="mce-FNAME"  />
            </div>
            <div className="mc-field-group">
              <input type="form-input" name="MESS" className="text" id="mce-MESS" />
            </div>
            <div id="mce-responses" className="clear">
              <div className="response" id="mce-error-response" style={{ display: "none" }}></div>
              <div className="response" id="mce-success-response" style={{ display: "none" }}></div>
            </div>
            <div aria-hidden="true" style={{ position: "absolute", left: "-5000px" }}>
              <input type="text" name="b_59b901d00923cf12d50e8bcf5_c220c4dce8" tabIndex="-1" value="" className='form-input' />
            </div>
            <div className="clear">
              <input type="submit" name="subscribe" id="mc-embedded-subscribe" className="button" value="Subscribe" />
            </div>
          </div>
        </form>
>>>>>>> c51efadb54602830ca31af8eb6f6cfdb24f4991c
      </div>
    </div>
  );
};

export default Contact;
