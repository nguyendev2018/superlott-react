import "./style.css";
import imgBanner from "./img/img-banner.png"
function Banner() {
    return (
        <>
            <div className="banner">
                <div className="banner-bg"></div>
                <div className="banner-content">
                    <h2 className="banner-title">Super lottery on the equity blockchain technology platform</h2>
                    <p className="banner-desc">
                        Global decentralize network to buy & share lottery ticket easily
                    </p>
                    <div className="banner-buttons">
                        <a href="#" className="btn-primary ">
                            Contact To Join
                        </a>
                        <a href="#" className="btn-primary btn-contact">
                            Contact To Join
                        </a>
                    </div>
                    <div className="banner-img">
                        <img src={imgBanner} alt="img-banner" />
                </div>
                </div>
            </div>
        </>
    );
}

export default Banner;