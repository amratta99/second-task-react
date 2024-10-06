import React from 'react'
import footerStyle from './Footer.module.css'
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { FaTwitter } from "react-icons/fa";

function Footer() {
  return (
    <div>
        <div className={footerStyle.footerContainer}>
            <img src='http://www.engage.veented.com/bakery/wp-content/uploads/sites/27/2017/08/bakery-light-1.png'/>
            <p>Copyright 2017. All rights reserved.</p>
            <div className={footerStyle.icons}>
                <FaFacebookF />
                <BiLogoGmail />
                <FaLinkedinIn />
                <FaTwitter />
            </div>
        </div>
    </div>
  )
}

export default Footer