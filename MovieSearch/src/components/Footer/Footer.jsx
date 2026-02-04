import React from 'react'
import './Footer.css'
import social_icons from "../../assets/youtube_icon.png"
import social_icons1 from "../../assets/twitter_icon.png"
import social_icons2 from "../../assets/facebook_icon.png"
import social_icons3 from "../../assets/instagram_icon.png"

function Footer() {
  return (
    <div className='footer'>
      <div className="footer-icon">
        <img src={social_icons} alt="" />
        <img src={social_icons1} alt="" />
        <img src={social_icons2} alt="" />
        <img src={social_icons3} alt="" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
        <li>Media Center</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Preferences</li>
        <li>Corporate Information</li>
        <li>Contact us</li>
      </ul>
      <p className='copyright-text'>© 1997 - 2025 Netflix, Inc</p>
    </div>
  )
}

export default Footer