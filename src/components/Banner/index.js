import "./style.css";
import imgBanner from "./img/img-banner.png"
import { Link } from "react-router-dom";
function Banner() {
    return (
            <div className="banner">
                <div className="banner-content">
                    <h2 className="banner-title">Super lottery on the equity <span>blockchain</span>  technology platform</h2>
                    <p className="banner-desc">
                        Global decentralize network to buy & share lottery ticket easily
                    </p>
                    <div className="banner-buttons">
                        <Link to="/" className="btn-primary btn-contact">
                            Contact To Join
                        </Link>
                        <Link to="/" className="btn-primary btn-sql">
                            SPL DISTRIBUTION
                        </Link>
                    </div>
                    <div className="banner-img">
                        <img src={imgBanner} alt="img-banner" className="img-fluid" />
                </div>
                </div>
            </div>
    );
}

export default Banner;
