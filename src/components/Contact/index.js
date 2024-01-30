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
      </div>
    </>
  );
}

export default Contact;
