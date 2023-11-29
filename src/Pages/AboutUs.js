import React from "react";
import { Footer } from "../Components/Footer";
import img from '../assets/scene1.jpg'
import '../Styles/AboutUs.css'
import image1 from '../assets/capetown.jpg';
import image2 from '../assets/nfvf.jpg';
import image3 from '../assets/sunshine.jpg';
import image4 from '../assets/Bethany.jpg';
import image5 from '../assets/Workshop.jpg';
import image6 from '../assets/awake.png';

export const AboutUs = () => {

   
    return (
       

            <div  id="about" className="About">
                
                    <h1 className="abtHeading"> About Us</h1>

                <div className="about-content">
                    
                    <div className="about-left">
                        <img src={img} alt="" className="abtImg" />
                    </div>
                    
                    <div className="about-right">
                        
                            <p>The Mbawula Film Festival is a <br />
                                storytelling initiative that is<br />
                                designed to nurture, educate & <br />
                                encourage literacy through film.<br />
                                Quality films are presented in a <br />
                                non-competitive, utilitarian way<br />
                                with strands that emphasize human rights, <br />
                                social issues and the environment.<br />
                                The festivals includes film screenings,<br />
                                panel discussions, workshops and exhibitions.</p>
                    </div>

                </div>
                <div className="abt">
                    <h1 className="abtHeading">Our Sponsors</h1>
                    <h3 className="subHeading">Our sponsors and collaborators are Awakening Creative Projects, National Film and Video Foundation, Heinrich Böll <br />
                        Stiftung Office Cape Town, Sunshine Cinema, The Workshop ko Kasi , Bethany Foundation and many more.</h3>
                </div>
                <div className="imgContainer">
                    <img src={image1} alt="" className="ImgSponsor" />
                    <img src={image2} alt="" className="ImgSponsor" />
                    <img src={image3} alt="" className="ImgSponsor" />
                    <img src={image4} alt="" className="ImgSponsor" />
                    <img src={image5} alt="" className="ImgSponsor" />
                    <img src={image6} alt="" className="ImgSponsor" />
                </div>
            </div>
        
    )
}