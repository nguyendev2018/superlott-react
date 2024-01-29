import React from "react";
import "./style.css";
import axios from "axios";
import { useForm } from "react-hook-form";
import { IoClose } from "react-icons/io5";
import apiContact from "../../api/contact"
function Contact() {
  const { register, handleSubmit, formState: { errors,isSubmitting } } = useForm();
  const onSubmit = async (e) => {
    try {
      const client = require("@mailchimp/mailchimp_marketing");

      client.setConfig({
      apiKey: "YOUR_API_KEY",
      server: "YOUR_SERVER_PREFIX",
      });

      const run = async () => {
      const response = await client.lists.addListMember("c220c4dce8", {
        email_address: "Ebony_Brekke@gmail.com",
        status: "pending",
      });
      console.log(response);
      };

      run();
      const response = await axios.post('https://us21.api.mailchimp.com/3.0/lists/c220c4dce8', {
        email_address : 'ngiyr',
        status : "subscribed",
        // merge_fields : {
        //   message : mess,
        //   name : name
        // }
        
      }, {
        headers: {
          'Authorization': 'auth 31ea5ab599dd4f5778bd6f8f4db244ab-us21',
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin' : '*',
          'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        }
      });
      console.log(response);
      console.log('Successfully subscribed to Mailchimp', response.data);
    } catch (error) {
      console.error('Failed to subscribe to Mailchimp', error);
    }
  }

  return (
    <>
      <div className="contact">
        <div className="contact-wrapper">
          <h2>Contact us</h2>
          <p className="desc desc-contact">Any question? Reach out to us and we’ll get back to you shortly.</p>
          <p className="desc-admin">admin@superlott.io</p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              {...register("Name", { required: "Please enter your name" })}
              className="form-input"
              placeholder="Your Name"
            />
            {errors.Name && <p className="error-message"><IoClose /> {errors.Name.message}</p>}
            <input
              type="email"
              {...register("Email", { required: "Please enter your email" })}
              className="form-input"
              placeholder="Your Email"
            />
            {errors.Email && <p className="error-message"><IoClose /> {errors.Email.message}</p>}
            <textarea
              rows="2"
              {...register("Mess", { required: "Please enter your message", maxLength: 20 })}
              cols="5"
              className="form-input"
              placeholder="Your Message"
            />
            {errors.Mess && <p className="error-message"><IoClose /> {errors.Mess.message}</p>}

            <input
              type="submit"
              className="button-submit btn-contact"
              value={'submit'} disabled={isSubmitting}
            />
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
