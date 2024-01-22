import "./style.css";
function Contact() {
  return (
    <>
      <div className="contact">
        <div className="contact-wrapper">
          <h2>Contact us</h2>
          <p className="desc">Any question? Reach out to us and we’ll get back to you shortly.</p>
          <p>admin@superlott.io</p>
          <form action="">
            <input type="text" placeholder="Your Name" className="contact-input" />
            <input type="text" placeholder="Your Email" className="contact-input" />
            <input type="text" placeholder="Your Message" className="contact-input" />
          </form>
        </div>
      </div>
    </>
  );
}
export default Contact;
