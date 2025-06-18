import React,{useState} from "react";
import './css/Navbar.css';
import logo from '../Assets/Logos/Logo White.svg';
import SlideMenu from "./SlideMenu";
import headerImage from '../Assets/Images/Header Image.jpg';


const Navbar = () => {

    return ( 
        <div className="navbar">
            <div className="navbar-container">
                <div className="navbar-logo">
                    <img src={logo} alt="logo" className="logo-img"/>
                </div>
                <div className="navbar-content">
                    <ul className="navbar-content-ul">
                    <li><a href="#home" className="nav-link">HOME</a></li>
                    <li><a href="#home" className="nav-link">SCHEDULE</a></li>
                    <li><a href="#home" className="nav-link">MOVIE LIBRARY</a></li>
                    <li><a href="#home" className="nav-link">LOCATION & CONTACT</a></li>
                    </ul>

                    <SlideMenu/>

                </div>
            </div>

            <div className="h-line">

            </div>
            <img src={headerImage} alt="header image" className="header-image"/>
        </div>
     );
}
 
export default Navbar;