import { navigation } from "../../utils/contants";
import path from "../../utils/path";
import "./style.css";
import { Link, NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import logo from "../../assets/img/logo.png";

function Header() {
  return (
    <>
      <nav>
        <div className="container nav-container">
          <div class="menu-mobile">
            <FaBars />
          </div>
          <Link to={`${path.HOME}`} className="logo">
            <img src={logo} alt="logo" />
          </Link>
          <ul>
            {navigation.map((item) => (
              <li>
                <NavLink
                  to={item.link}
                  key={item.id}
                  className={({ isActive }) =>
                    isActive
                      ? "pr-12 hover:text-primary text-primary"
                      : "pr-12 hover:text-primary"
                  }
                >
                  {item.values}
                </NavLink>
              </li>
            ))}
          </ul>
          <a href="/" className="btn-default btn--yellow">REWARD</a>
        </div>
      </nav>
    </>
  );
}
export default Header;
