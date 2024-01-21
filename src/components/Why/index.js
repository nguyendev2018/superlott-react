import React from 'react'
import "./style.css"
import imgIcon from "./img/img-icon.png";
import imgWhy from "./img/img-why.png";
import { Link } from 'react-router-dom';
function Why() {
    const listNote = [
        {
            id : '1',
            content : "Decentralized, transparent, rules defined by smart contract"
        },
        {
            id : '2',
            content : "Lottery results can’t be manipulated"
        },
        {
            id : '3',
            content : "Disversity. Your own lottery, your own rules"
        },
        {
            id : '4',
            content : "For everyone. Your own lottery, Your own tokens"
        },
        {
            id : '5',
            content : "No tax"
        }
    ]
  return (
    <div className='why'>
        <div className="why-wrapper">
            <div className="why-img">
                <img src={imgWhy} alt="img-why" />
            </div>
            <div className="why-content content-padding--right">
                <div className="wrapper-content">
                    <h2 className='title-block'>Why is lottery blockchain?</h2> 
                    <p className="desc">
                        We’re building the global equity blockchain platform – that is secure, smart and easy-to-use platform, and completely change the way that the player buy and share tickets. That is a decentralized lottery platform on blockchain It's: Fair - validate - true
                    </p>
                    <div className="why-list">
                        {listNote.map((item) => (
                            <div className="why-item">
                                <img src={imgIcon} alt="icon" />
                                <span>{item.content}</span>
                            </div>
                        ))}
                    </div>
                    <Link href="/" className="btn-block btn-primary btn--yellow">get started</Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Why