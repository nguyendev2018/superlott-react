import React from 'react'
import './style.css'
import imgPlatform from "./img/plaform.png";
import imgCricle from "./img/circle-button.png";
import imgBg from "./img/bg-img.png"
function Fair() {
  return (
    <div className='fair'>
        <div className="container-block">
            <div className="fair-wrapper general-order1--wrapper">
                <div className=" general-order1--content">
                    <div className="wrapper-content ">
                        <h2 className='title-block'>Fair platform for player</h2> 
                        <p className="block-desc desc">
                            We’re building the global equity blockchain platform – that is secure, smart and easy-to-use platform, and completely change the way that the player buy and share tickets. That is a decentralized lottery platform on blockchain It's: Fair - validate - true
                        </p>
                    </div>
                    <div className="fair-play">
                        <img src={imgCricle} alt="logo-play" />
                        <div className="fair-play--item">
                            <p>WATCH VIDEO</p>
                            <p>How it work</p>
                        </div>
                    </div>
                </div>
                <div className="fair-img general-order1--img">
                    <img src={imgPlatform} alt="img-platform" /> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default Fair