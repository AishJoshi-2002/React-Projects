import React from "react";
import foodLogo from '../images/food_img1.png';
import '../App.css';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-intro">
                <div className="footer-sub-heading">
                    {/* <img alt="foodLogo" src={foodLogo} className="footer-icon"/> */}
                    <h2>OrderFood..</h2>
                </div>
                © AishJoshi-2002
            </div>
            <div className="footer-company">
                <div className="footer-sub-heading">Company</div>
                <ul>
                    <li>About</li>
                    <li>Careers</li>
                    <li>Team</li>
                </ul>
            </div>
            <div className="footer-contact-us">
                <div className="footer-sub-heading">Contact us</div>
                <ul>
                    <li>Help & Support</li>
                    <li>Partner with us</li>
                    <li>Ride with us</li>
                </ul>
            </div>
            <div className="footer-deliver-to">
                <div className="footer-sub-heading">We deliver to:</div>
                <ul>
                    <li>Bangalore</li>
                    <li>Pune</li>
                    <li>Gurgaon</li>
                    <li>Mumbai</li>
                    <li>Jaipur</li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;