import "./style.css";
import layer1 from "./img/layer-1.png";
import layer2 from "./img/layer-2.png";
import layer3 from "./img/layer-3.png";
import layer4 from "./img/layer-4.png";
import layer5 from "./img/layer-5.png";
import layer6 from "./img/layer-6.png";
import icon1 from "./img/icon-1.png";
import icon2 from "./img/icon-2.png";
import icon3 from "./img/icon-3.png";
import icon4 from "./img/icon-4.png";
import icon5 from "./img/icon-5.png";
import icon6 from "./img/icon-6.png";
function Our() {
  const listOur = [
    {
      id: "1",
      title: "Smart contract core module",
      desc: "Description will be here",
      icon: icon1,
      layer: layer1,
    },
    {
      id: "2",
      title: "Ticket Management",
      desc: "Description will be here",
      icon: icon2,
      layer: layer2,
    },
    {
      id: "3",
      title: "Analyzer of number by user",
      desc: "Description will be here",
      icon: icon3,
      layer: layer3,
    },
    {
      id: "4",
      title: "Blockchain security platform",
      desc: "Description will be here",
      icon: icon4,
      layer: layer4,
    },
    {
      id: "5",
      title: "Module of award Notification",
      desc: "Description will be here",
      icon: icon5,
      layer: layer5,
    },
    {
      id: "6",
      title: "Adaptive Social Assistant",
      desc: "Description will be here ",
      icon: icon6,
      layer: layer6,
    },
  ];
  return (
    <>
      <div className="our">
        <div className="container">
          <div className="our-list">
            {listOur.map((item) => (
              <div className="our-item" key={item.id}>
                <img src={item.layer} alt="img" className="our-item--img" />
                <h3>{item.title}</h3>
                <p className="our-item--desc desc">{item.desc}</p>
                <img
                    src={item.icon}
                    alt="img-icon"
                    className="our-item--icon"
                  />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default Our;
