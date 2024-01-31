import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
function Footer() {
    return (
        <div className="footer">
            <p className="footer-desc">
                Copyright © 2023 by{' '}
                <Link to="/roadmap.superlott.io">JP Finance Lab, Cyprus</Link> |{' '}
                <Link to="/admin@superlott.io">admin@superlott.io</Link>{' '}
            </p>
        </div>
    );
}

export default Footer;
