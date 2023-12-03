import React from "react";
import img1 from '../assets/scene4.jpg';
import img2 from '../assets/w2_n.jpg';
import img3 from '../assets/w5_n.jpg';
import img4 from '../assets/w42022.jpg';
import img5 from '../assets/w2921.jpg';
import img6 from '../assets/w3421.jpg';
import img7 from '../assets/w3_n.jpg';
import img8 from '../assets/w1_n.jpg';
import img9 from '../assets/w77_n.jpg';
import img10 from '../assets/w432022.jpg';
import img11 from '../assets/we59_n.jpg';
import img12 from '../assets/w42022.jpg';
import img13 from '../assets/scene3.jpg';
import img14 from '../assets/w22022.jpg';
import img15 from '../assets/w2021.jpg';
import img16 from '../assets/Scene2.jpg';


import { Footer } from "./Footer";
import '../Styles/Gallery.css'

export const Gallery = () => {


    return(
        <div id="gallery" className="GalleryMain">
            <div className="Header"> <h1 className="Heading">Gallery</h1>
            <h3 className="subHeading">Here are some of the images from past festivals from 2021 to 2023 around the Northern Cape.</h3>
            </div>
            <div className="body">
                <img src={img1} alt="" className="galImg"/>
                <img src={img2} alt="" className="galImg"/>
                <img src={img3} alt="" className="galImg"/>
               
                <img src={img5} alt="" className="galImg"/>
                <img src={img6} alt="" className="galImg"/>
                <img src={img7} alt="" className="galImg"/>
                <img src={img8} alt="" className="galImg"/>
            </div>
            
            <div>
                <img src={img9} alt="" className="galImg"/>
                <img src={img10} alt="" className="galImg"/> 
                <img src={img11} alt="" className="galImg"/>
                <img src={img12} alt="" className="galImg"/>
                <img src={img13} alt="" className="galImg"/>
                <img src={img14} alt="" className="galImg"/> 
                
                <img src={img16} alt="" className="galImg"/>  </div>
        </div>
    )
}