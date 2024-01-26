import "./style.css";
import imgBanner from "./img/img-ssl.png";

function SPL() {
  const listNoteLeft = [
    {
      id: 1, 
      title : "Start",
      date : "Mar 15, 2024"
    },
    {
      id: 2, 
      title : "Base rate",
      date : "0.005 SPL/h"
    },
    {
      id: 3, 
      title : "Team Rewards",
      date : "25%"
    },
    {
      id: 4, 
      title : "Mining Quantity",
      date : "250.000.000 SPL"
    },
  ];
  const listNoteRight = [
    {
      id : 1,
      title : "Until Completed"
    },
    {
      id: 2, 
      title : "Community Circle",
      date : "30%"
    },
    {
      id: 3, 
      title : "Team Staking",
      date : "15%"
    },
    {
      id: 4, 
      title : "Total Supply",
      date : "1.000.000.000 SPL"
    },
  ];
  return (
    <div className="spl">
      <div className="spl-container container">
          <div className="spl-img">
              <img src={imgBanner} alt="img-banner" />
          </div>
          <div className="spl-content">
            <h2>SPL Minning</h2>
            <p className="desc">
              The sub-title will be here
            </p>
            <div className="spl-content--item left">
              {listNoteRight.map((item) => (
                <div className="sql-item--note" key={item.id}>
                  <p className="title">{item.title}</p>
                  <p className="date">{item.date}</p>
                </div>
              ))}
            </div>
            <div className="spl-content--item right">
            {listNoteLeft.map((item) => (
              <div className="sql-item--note" key={item.id}>
                <p className="title">{item.title}</p>
                <p className="date">{item.date}</p>
              </div>
            ))}
            </div>
          </div>
      </div>
    </div>
  );
}

export default SPL;
