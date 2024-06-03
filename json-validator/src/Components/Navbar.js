import React from "react";
import '../App.css';

const Navbar = () => {
    return (
        <div className="navbar">
            <div className="navbar-heading">JSON Validator</div>
            <button className="open-files-btn">Saved JSON</button>
        </div>
    )
}

export default Navbar;