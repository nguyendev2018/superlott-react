import "./style.css";
import imgHow from "./img/img-how.png";
import icon from "../Icon/icon.png";
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
    const winMega = [
      {
        id : 1, 
        text : "Pick 6 main numbers from 1-45",
        icon
      },
      {
        id : 2, 
        text : "Buy a ticket",
        icon
      },
      {
        id : 3, 
        text : "You need match from 3 to 6 numbers",
        icon
      }
    ]
    const contentMega = [
      {
        id : 1,
        text : "If the total amount reaches $100 million and this is not a winner. It will be divided equally among all players according to the percentage of ticket purchase."
      },
      {
        id : 2,
        text : "Tickets purchased during the week will be valid for the entire week from the time of purchase. Players can use it to participate in the draw for the rest of the week."
      },
      {
        id : 3,
        text : "If there is more than 1 winning ticket the prize will be divided equally among those tickets."
      },
      {
        id : 4,
        text : "At the end of the drawing, if no one wins, the money will be added to the next spin."
      },
      {
        id : 5,
        text : "Winners have 60 days to claim their prizes. Winners give 10% of the money to charity or other good works."
      }
      ,
      {
        id : 6,
        text : "Haven’t found what you’re looking for? Contact us"
      }
    ]
    const listSuper= [
      {
        id : 1,
        text : "Superlott Prize 1 (5 + SP) : 89.0% of total amount"
      },
      {
        id : 2,
        text : "Superlott Prize 2 (5): 8.0% of total amount"
      },
      {
        id : 3,
        text : "Superlott Prize 3 (4 + SP) : 2.2% of total amount"
      },
      {
        id : 4,
        text : "Superlott Prize 4 (4) : 0.5% of total amount"
      },
      {
        id : 5,
        text : "Superlott Prize 5 (3 + SP) : 0.3% of total amount"
      }
    ]
    const listSuperCheck = [
      {
        id : 1,
        text : "Pick 5 main numbers from 1-65"
      },
      {
        id : 2,
        text : "Pick 1 superlott number from 1-25"
      },
      {
        id : 3,
        text : "Buy a ticket"
      },
      {
        id : 4,
        text : "You need match numbers follow the prize and win the Jackpot"
      }
    ]
    const winSupper = [
      {
        id : 1,
        text : "If the total amount reaches $2 billion and no winner, It will be divided equally among all players according to the percentage of ticket purchase."
      },
      {
        id : 2,
        text : "Tickets purchased during the week will be valid for the entire week from the time of purchase. Players can use it to participate in the draw for the rest of the week."
      },
      {
        id : 3,
        text : "If there is more than one winning ticket the prize will be divided equally among those tickets."
      },
      {
        id : 4,
        text : "You need match numbers follow the prize and win the Jackpot"
      }
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
              <div className="how-wrapper">
                <div className="how-block--check">
                    {listDesc.map((item) => (
                      <div className="how-check--item" key={item.id}>

                      </div>
                    ))}
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
