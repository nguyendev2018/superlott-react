import { navigation } from "../../utils/contants";
import path from "../../utils/path";
import "./style.css";
import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import logo from "../../assets/img/logo.png";
import { useState } from "react";

function Header() {
  const [showMenu, setShowMenu] = useState(false);
  const handleShowNavbar = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <nav>
        <div className="container nav-container">
          <div className="menu-mobile" data-mobile-menu-toggle="menu">
            <div className={` icon-bar ${showMenu && "is-active"}`} onClick={handleShowNavbar}>
              <span className="icon-barChild"></span>
            </div>
            
          </div>
          <Link to={`${path.HOME}`} className="logo">
            <img src={logo} alt="logo" />
          </Link>
          <ul className={`${showMenu && "is-active"}`}>
            {navigation.map((item) => (
              <li>
                <NavLink
                  to={item.link}
                  key={item.id}
                >
                  {item.values}
                </NavLink>
              </li>
            ))}
          </ul>
          <a href="/" className="btn-header btn-default btn--yellow">REWARD</a>
        </div>
      </nav>
    </>
  );
}
export default Header;
