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
      </div>
    </div>
  );
};

export default Contact;
