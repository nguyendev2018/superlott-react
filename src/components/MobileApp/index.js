import "./style.css";
import imgMobile from "./img/img-mobile.png";
import imgIcon from "../Icon/icon.png";
import { Link } from "react-router-dom";

function MobileApp() {
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
      <div className='mobile content-padding'>
        <div className="container-block">
            <div className="mobile-wrapper general-wrapper general-order1--wrapper">
                <div className=" general-order1--content">
                    <div className="wrapper-content">
                        <h2 className='title-block'>Mobile App</h2> 
                        <p className="block-desc desc">
                          Here's mobile look of home page that you will use for blockchain lottery. Your interactive experience, your random number selection idea, your luck!
                        </p>
                        <div className="why-list">
                        {listNote.map((item) => (
                            <div className="block-item--check">
                                <img src={imgIcon} alt="icon" />
                                <span>{item.content}</span>
                            </div>
                        ))}
                    </div>
                    <Link href="/" className="btn-block btn-primary btn--yellow">TRY IT NOW</Link>
                    </div>
                </div>
                <div className="mobile-img general-order1--img">
                    <img src={imgMobile} alt="img-platform" /> 
                </div>
            </div>
        </div>
    </div>
    </>
  );
}
export default MobileApp;
