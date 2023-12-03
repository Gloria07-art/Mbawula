import React from "react";
import { Footer } from "./Footer";
import '../Styles/ContactUs.css'

export const ContactUs = () => {


    return(
        <div  id="contact" className="ContactMain">
           
                <div>
                <h1 className="Title">Contact Us</h1>
                <div>
                <h1 className="top">Email Us:</h1>
                <h3 className="bottom">tdthalogang@gmailcom</h3></div>
                <h1 className="top">Phone Us:</h1>
                <h3 className="bottom">060 498 3032</h3>
                <h1 className="top">Location:</h1>
                <h3 className="bottom">We are in the  Northern Cape, South Africa.</h3>

            </div>
            
        </div>
    )
}