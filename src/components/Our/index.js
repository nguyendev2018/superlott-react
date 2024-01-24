import "./style.css";
function Our() {
  const listOur = [
    { 
      "id" : 1,
      "img" : './img/img-3.png'
    },
    { 
      "id" : 2,
      "img" : './img/img-3.png'
    },
    { 
      "id" : 3,
      "img" : './img/img-3.png'
    },
    { 
      "id" : 4,
      "img" : './img/img-3.png'
    },
    { 
      "id" : 5,
      "img" : './img/img-3.png'
    },
    { 
      "id" : 6,
      "img" : './img/img-3.png'
    }
  ]
  return (
    <>
      <div className="our">
        <div className="container">
          <div className="our-list">
            {listOur.map(item => (

            ))}
            <div className="our-item"></div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Our;
