import React from 'react'
import imgPartner from "./img/img-partner.png";
import "./style.css"
import { Link } from 'react-router-dom';
function SuperLott() {
const itemSuperlott = [
    {
        id : "1",
        name : "Logo",
        img : imgPartner,
        link : "logo-1"
    },

    {
        id : "2",
        name : "Logo",
        img : imgPartner,
        link : "logo-3"
    },
    {
        id : "3",
        name : "Logo",
        img : imgPartner,
        link : "logo-4"
    },
    {
        id : "4",
        name : "Logo",
        img : imgPartner,
        link : "logo-5"
    },
    {
        id : "5",
        name : "Logo",
        img : imgPartner,
        link : "logo-6"
    },
    {
        id : "6",
        name : "Logo",
        img : imgPartner,
        link : "logo-7"
    }
]
  return (
    <div className='superlott'>
        <h2>Superlott Parnets</h2>
        <div className="container">
            <div className="superlott-wrapper">
                {itemSuperlott.map((item) => (
                    <Link to={`/${item.link}`} className="superlott-item" key={item.id}>
                    <div className="superlott-img">
                        <img src={item.img} alt="logo-partner" />
                    </div>
                    <span>{item.name}</span>
                </Link>
                ))}
            </div>
        </div>
    </div>
  )
}

export default SuperLott;