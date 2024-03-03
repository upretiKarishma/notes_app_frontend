import React from 'react'
import playStore from '../../../../assets/playstore.png'
import appStore from '../../../../assets/Appstore.png'
import "./footer.css"
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import {useColorModeValue,Box} from '@chakra-ui/react';
const Footer = () => {
  return (
     <Box zIndex={1000} w="100%" boxShadow="rgba(0,0,0,0.16) 0px 3px 6px, rgba(0,0,0,0.23) 0px 3px 6px;" bg={useColorModeValue('gray.300', 'gray.900')} id="footer" className='Footer'>
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android and IOS mobile phone</p>
        <img src={playStore} alt="playstore" />
        <img src={appStore} alt="Appstore" />
      </div>

      <div className="midFooter">
        <h1>notifyNote</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2024 &copy; MeKarishmaUpreti</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="http://instagram.com"><FaInstagram /></a>
        <a href="http://twitter.com"><FaTwitter /></a>
        <a href="http://instagram.com"><FaFacebook /></a>
      </div>
    </Box>
  )
}

export default Footer
