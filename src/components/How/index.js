import "./style.css";
import imgHow from "./img/img-how.png"
function How() {
    return (
        <>
          <div className="how">
            <div className="container">
              <div className="how-wrapper">
                <div className="how-block--img">
                  <img src={imgHow} alt="img-how" />
                </div>
                <div className="how-block--content">
                  <p className="desc">
                    Ticket price 1$. The 6 numbers from 01 -45 for one in 3 times lottery prize (Monday, Wednesday, Friday) at 20:30 pm UTC+0
                  </p>
                  <p className="desc">
                    Total of 4 prizes with starting prize $200,000
                  </p>
                  <div className="how-list">
                    <div className="how-item">

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
    );
}

export default How;
