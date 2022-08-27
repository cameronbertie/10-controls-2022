import React from 'react'
import '../App.css'
import discordLogo from '../svg/discord-logo.svg'
import instaLogo from '../svg/instagram-logo.svg'
import twitterLogo from '../svg/twitter-logo.svg'
import '../stylesheets/Footer.css'

export default function Footer () {
  return (
    <footer>
      <div className="social-icons-footer">
      <a href="https://discord.gg/jKeXr7mcv5" target="_blank" rel="noreferrer">
        <div className="discord-container discord-logo-container-right">
          <img className="footer-social" src={discordLogo} alt="Discord Logo" />
        </div>
        </a>
        <a href="https://www.instagram.com/10controls/" target="_blank" rel="noreferrer">
        <div className="discord-container discord-logo-container-right">
          <img className="footer-social" src={instaLogo} alt="Instagram Logo" />
        </div>
        </a>
        <a href="https://twitter.com/10Controls" target="_blank" rel="noreferrer">
        <div className="discord-container discord-logo-container-right">
          <img className="footer-social" src={twitterLogo} alt="Twitter Logo" />
        </div>
        </a>
        </div>
        <div className="copyright-notice">
          <h6>10 Controls 2022, All rights reserved.</h6>
        </div>
    </footer>
  )
}
