import React from "react";
import { Footer } from "./Footer";
import '../Styles/Home.css'
import logo from '../assets/topLogo.png';
import icon1 from '../assets/facebook.png'
import icon2 from '../assets/instagram.png';
import icon3 from '../assets/play.png';
import backgroundImage from '../assets/2882022.jpg'
import { useState } from 'react';

import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

export const Home = () => {
    const [navOpen, setNavOpen] = useState(false);

    const toggleNav = () => {
        setNavOpen(!navOpen);

    };
    return (
        <div id="home" className="main">
            <div className="header">
                <div className="logo">

                    <img src={logo}
                        alt=""
                        style={{ width: '120px', height: '120px' }}
                        className="logo" />
                </div>
                

                <nav >
                    < a href="#" className="tabs">Home</a>

                    <a  href="#about" className="tabs">About</a>
                    
                    <a href="#contact" className="tabs">Contact</a>

                    <a href="#gallery" className="tabs">Gallery</a>
                    {/* <NavLink exact to="/" activeClassName="active" className="tabs" onClick={toggleNav}>Home</NavLink>
                    <NavLink to="/aboutus" activeClassName="active" className="tabs" onClick={toggleNav}>About</NavLink>
                    <NavLink to="/gallery" activeClassName="active" className="tabs" onClick={toggleNav}>Gallery</NavLink>
                    <NavLink to="/contactus" activeClassName="active" className="tabs" onClick={toggleNav}>Contact</NavLink> */}
                </nav>



                <div className="social-icons">
                    {/* Add your social media icons and links here */}
                    <div>
                        <a href="https://www.facebook.com/">
                            <img src={icon1}
                                alt=""
                                style={{ width: '31px', height: '29px', margin: '5px' }}

                                className="logo" /> </a></div>
                    <div>
                        <a href="https://www.instagram.com/mbawulayouthfilmfest/">
                            <img src={icon2}
                                alt=""
                                style={{ width: '31px', height: '29px', margin: '5px' }}
                                className="logo" /> </a></div>
                    <div>
                        <a href="https://www.youtube.com/watch?v=E_yLLWdNd5w">
                            <img src={icon3}
                                alt=""
                                style={{ width: '31px', height: '29px', margin: '5px' }}
                                className="logo" /> </a></div>

                </div>
                {/* <div className="menu-toggle" onClick={toggleNav}>
                    <div className={`bar ${navOpen ? 'open' : ''}`}></div>
                    <div className={`bar ${navOpen ? 'open' : ''}`}></div>
                    <div className={`bar ${navOpen ? 'open' : ''}`}></div>
                </div> */}
            </div>
            <div className="Hero">

                <div className="txt">
                    <h1 className="Title">Mbawula</h1>
                    <h2 className="subTitle">Youth Film Festival</h2>
                    <h3 className="subText">Telling stories rooted in change</h3>
                </div>



            </div>

        </div>
    )
}