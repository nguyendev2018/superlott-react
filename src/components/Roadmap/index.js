import "./style.css";
function Roadmap() {
  return (
    <>
      <h2>Roadmap</h2>F
      <div className="flex-parent">
        <div className="input-flex-container">
          <div className="input">
            <span data-year={1910} data-info="headset" />
          </div>
          <div className="input">
            <span data-year={1920} data-info="jungle gym" />
          </div>
          <div className="input active">
            <span data-year={1930} data-info="chocolate chip cookie" />
          </div>
          <div className="input">
            <span data-year={1940} data-info="Jeep" />
          </div>
          <div className="input">
            <span data-year={1950} data-info="leaf blower" />
          </div>
          <div className="input">
            <span data-year={1960} data-info="magnetic stripe card" />
          </div>
          <div className="input">
            <span data-year={1970} data-info="wireless LAN" />
          </div>
          <div className="input">
            <span data-year={1980} data-info="flash memory" />
          </div>
          <div className="input">
            <span data-year={1990} data-info="World Wide Web" />
          </div>
          <div className="input">
            <span data-year={2000} data-info="Google AdWords" />
          </div>
        </div>
        <div className="description-flex-container">
          <p>And future Call of Duty players would thank them.</p>
          <p>Because every kid should get to be Tarzan for a day.</p>
          <p className="active">And the world rejoiced.</p>
          <p>Because building roads is inconvenient.</p>
          <p>Ain’t nobody got time to rake.</p>
          <p>Because paper currency is for noobs.</p>
          <p>Nobody likes cords. Nobody.</p>
          <p>Brighter than glow memory.</p>
          <p>To capitalize on an as-yet nascent market for cat photos.</p>
          <p>Because organic search rankings take work.</p>
        </div>
      </div>
    </>
  );
}
export default Roadmap;
