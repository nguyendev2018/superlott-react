import "./style.css";
import imgHow from "./img/img-how.png"
function How() {
    const howList = [
      {
        id : 1,
        text : "Correct 6 numbers: 91.0% of total amount"
      },
      {
        id : 2,
        text : "Correct 5 numbers: 6.5% of total amount"
      },
      {
        id : 3,
        text : "Correct 4 numbers: 2.0% of total amount"
      },
      {
        id : 4,
        text : "Correct 3 numbers: 0.5% of total amount"
      },
    ]
    return (
        <>
          <div className="how">
            <h2>How to play</h2>
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
                  {howList.map((item) => (
                    <div className="how-item">
                          <div className="how-item">
                              <img src='/images/icon.png' alt="icon" />
                              <span>{item.text}</span>
                          </div>
                    </div>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
    );
}

export default How;
