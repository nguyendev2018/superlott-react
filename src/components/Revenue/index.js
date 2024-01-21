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
                <div className="revenue-item">
                    <img src={token} alt="img-token" />
                    <h3>Token Distribution</h3>
                </div>
                <div className="revenue-item">
                    <img src={bountry} alt="img-bountry" />
                    <h3>BountyRevenue Structure</h3>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Revenue