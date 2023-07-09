import { useState } from "react"
import { Icon } from '@iconify/react';

export const Footer = () =>{


    return(
        <div className="footer__container">
            <div className="footer-icon__container">
                <Icon className="footer-icon" icon="teenyicons:instagram-outline" color="white" width="48" height="48" />
                <Icon className="footer-icon" icon="mdi:twitter" color="white" width="48" height="48" />
                <Icon className="footer-icon" icon="uil:facebook" color="white" width="48" height="48" />
                <Icon className="footer-icon" icon="bi:linkedin" color="white" width="48" height="48" />    
            </div>
            <p>@IRANIANFASTFOOD</p>
        </div>
    )
}