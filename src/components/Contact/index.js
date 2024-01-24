import { useEffect } from "react";
import "./style.css";
// import mailchimp from '@mailchimp/mailchimp_marketing';

function Contact() {
  // useEffect(() => {
  //   // Khởi tạo Mailchimp API với khóa API của bạn
  //   mailchimp.setConfig({
  //     apiKey: 'YOUR_API_KEY',
  //     server: 'YOUR_SERVER_PREFIX',
  //   });
  //     // Sử dụng phương thức API, ví dụ: lấy thông tin về danh sách đăng ký
  //     async function getListInfo() {
  //       try {
  //         const response = await mailchimp.lists.getAllLists();
  //         console.log(response);
  //       } catch (error) {
  //         console.error(error);
  //       }
  //     }
  
  //     getListInfo();
  //   }, []);
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
