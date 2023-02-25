import React from "react";
import './HeaderInput.css'
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import Pricing from "../Pricing/Pricing";
import Contact from "../Contact/Contact";
import About from "../About/About";

const HeaderInput = () => {
    return (
        <div className="Header__Input">
           
            < Header />
            < Navbar />
            < Pricing />
            < About />
            < Contact />
        </div>
    )
}
export default HeaderInput;