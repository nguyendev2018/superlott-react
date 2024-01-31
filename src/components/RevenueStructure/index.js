import React from 'react';
import token from './img/token.png';
import bountry from './img/bountry.png';
import './style.css';
const RevenueStructure = () => {
    return (
        <div className="revenue content-padding">
            <h2>Revenue Structure</h2>
            <div className="container">
                <div className="revenue-wrapper">
                    <div className="revenue-item">
                        <img src={token} alt="img-token" className="img-auto" />
                        <p>Token Distribution</p>
                    </div>
                    <div className="revenue-item">
                        <img
                            src={bountry}
                            alt="img-bountry"
                            className="img-auto"
                        />
                        <p>BountyRevenue Structure</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RevenueStructure;
