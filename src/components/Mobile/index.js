import "./style.css";
import imgMobile from "./img/img-mobile.png";
import { Link } from "react-router-dom";
function Mobile() {
  const listNote = [
    {
        id : '1',
        content : 'Blockchain ticket curation'
      },
    {
        id : '2',
        content : "Natural Language Understanding"
    },
    {
        id : '3',
        content : "Disversity. Your own lottery, your own rules"
    },
    {
        id : '4',
        content : "For everyone. Your own lottery, Your own tokens"
    },
    {
        id : '5',
        content : "No tax"
    }
]
  return (
    <>
      <div className="mobile">
        <div className="container">
          <div className="why-img">
              <img src={imgMobile} alt="img-mobile" />
          </div>
          <div className="why-content">
              <div className="wrapper-content">
                  <h2 className='title-block'>Why is lottery blockchain?</h2> 
                  <p className="desc">
                    Here's mobile look of home page that you will use for blockchain lottery. Your interactive experience, your random number selection idea, your luck!
                  </p>
                  <div className="why-list">
                      {listNote.map((item) => (
                          <div className="why-item">
                              <img src='/images/icon.png' alt="icon" />
                              <span>{item.content}</span>
                          </div>
                      ))}
                  </div>
                  <Link href="/" className="btn-block btn-primary btn--yellow">try it now</Link>
              </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Mobile;
