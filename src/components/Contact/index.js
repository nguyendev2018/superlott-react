import "./style.css";
function Contact() {
  return (
    <>
      <div className="contact">
        <div className="contact-wrapper">
            <h2>Contact us</h2>
            <p className="desc">Any question? Reach out to us and we’ll get back to you shortly.</p>
            <p className="desc-admin">admin@superlott.io</p>
            <form action="">
              <input type="text" placeholder="Your Name" className="form-input" />
              <input type="text" placeholder="Your Email" className="form-input" />
              <input type="text" placeholder="Your Message" className="form-input" />
              <input type="submit" className="button-submit btn-contact" value={'submit'} />
            </form>
        </div>
      </div>
    </>
  );
}
export default Contact;
