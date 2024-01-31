import { navigation } from '../../../utils/contants';
import path from '../../../utils/path';
import './style.css';
import { Link, NavLink } from 'react-router-dom';
import logo from '../../../assets/img/logo.png';
import { useState } from 'react';

function Header() {
    const [showMenu, setShowMenu] = useState(false);
    const handleShowNavbar = () => {
        setShowMenu(!showMenu);
    };

    return (
        <>
            <nav>
                <div className="container nav-container">
                    <Link to={`${path.HOME}`} className="logo">
                        <img src={logo} alt="logo" className="img-fluid" />
                    </Link>
                    <div className="menu-mobile" data-mobile-menu-toggle="menu">
                        <div
                            className={` icon-bar ${showMenu && 'is-active'}`}
                            onClick={handleShowNavbar}
                        >
                            <span className="icon-barChild"></span>
                        </div>
                    </div>
                    <ul className={`list-menu ${showMenu && 'is-active'}`}>
                        {navigation.map((item) => (
                            <li key={item.id}>
                                <NavLink to={item.link} key={item.id}>
                                    {item.values}
                                </NavLink>
                            </li>
                        ))}
                        <li className="btn-header--tablet">
                            <Link to="/" className="btn-default btn--yellow">
                                REWARD
                            </Link>
                        </li>
                    </ul>
                    <Link
                        to="/"
                        className="btn-header--desktop btn-default btn--yellow"
                    >
                        REWARD
                    </Link>
                </div>
            </nav>
            <div
                className={`has-previewMenuOpened ${showMenu && 'is-active'}`}
                onClick={handleShowNavbar}
            ></div>
        </>
    );
}
export default Header;
