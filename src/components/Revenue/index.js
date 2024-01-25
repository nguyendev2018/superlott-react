import React from 'react'
import token from './img/token.png';
import bountry from './img/bountry.png';
import "./style.css"
const Revenue = () => {
  return (
    <div className='revenue'>
        <h2>Revenue Structure</h2>
        <div className="container">
            <div className="revenue-wrapper">
                <div className="revenue-item revenue-token">
                    <img src={token} alt="img-token" />
                    <p>Token Distribution</p>
                </div>
                <div className="revenue-item">
                    <img src={bountry} alt="img-bountry" />
                    <p>BountyRevenue Structure</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Revenue