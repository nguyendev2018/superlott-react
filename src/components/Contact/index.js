import { useEffect, useState } from "react";
import "./style.css";
import axios from "axios";
function Contact() {
  const [email, setEmail] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('https://<dc>.api.mailchimp.com/3.0/lists/<list_id>/members', {
        email_address: email,
        status: 'subscribed'
      }, {
        headers: {
          'Authorization': 'apikey <31ea5ab599dd4f5778bd6f8f4db244ab-us21>',
          'Content-Type': 'application/json'
        }
      });
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
            <p className="desc">Any question? Reach out to us and we’ll get back to you shortly.</p>
            <p className="desc-admin">admin@superlott.io</p>
            <form onSubmit={handleSubmit}>
              <input type="text" placeholder="Your Name" className="form-input" />
              <input type="email" placeholder="Your Email" className="form-input" value={email} onChange={(e) => setEmail(e.target.value)} />
              <input type="text" placeholder="Your Message" className="form-input" />
              <input type="submit" className="button-submit btn-contact" value={'submit'} />
            </form>
        </div>
      </div>
    </>
  );
}
export default Contact;
