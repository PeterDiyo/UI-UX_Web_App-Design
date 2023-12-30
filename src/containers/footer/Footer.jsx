import React from 'react';
import './footer.css';
import gpt3Logo from '../../assets/logo.svg'

const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>Do you want to enter into the future before others</h1>
      </div>

      <div className='gpt3__footer-btn'>
        <p>Request Early Access</p>
      </div>

      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links_logo'>
          <img src={gpt3Logo} alt='logo' />
          <p>Lusaka 63/100, Cairo road. All rights reserved</p>
        </div>

        <div className='gpt3__footer-links_div'>
          <h4>links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>

        <div className='gpt3__footer-links_div'>
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>

        <div className='gpt3__footer-links_div'>
          <h4>Get in touch</h4>
          <p>Livingstone 112/22, Zambia</p>
          <p>0777397298</p>
          <p>Contact</p>
        </div>
     </div>

     <div className='gpt3__footer-copyright'>
      <p>&copy; 2023 GPT-3, all rights reserved</p>
     </div>
    </div>
  )
}

export default Footer;