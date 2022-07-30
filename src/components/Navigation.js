import React, { useState } from 'react'
import logo from '../svg/logo.svg'
import discordLogo from '../svg/discord-logo.svg'
import Menu from './Menu'
import '../stylesheets/Navigation.css'
import Hamburger from 'hamburger-react'
import { Link } from 'react-router-dom'

export default function Navigation () {
  const [isOpen, setOpen] = useState(false)
  return (
    <>
      <nav className="main-site-nav">
        <div className="border-box border-box-left">
          <Link to="/">
          <img className="navigation-logo" src={logo} alt="10 Controls Logo" />
          </Link>
        </div>
        <div className="main-navigation-content">
          <Link to='/rl'>
          <div className="main-navigation-link">
            Rocket League
          </div>
          </Link>
          <Link to='f1'>
          <div className="main-navigation-link">F1 22</div>
          </Link>
        </div>
        <div
          className="border-box border-box-right"

        >
          <Hamburger
            className="hamburger-icon"
            toggled={isOpen}
            toggle={setOpen}
            color="#ffffff"
          />
          { isOpen &&
            <Menu />
          }
          <div>

          </div>

        </div>
      </nav>
      <nav className="side-nav side-nav-left">
        <div className="discord-container discord-logo-container-left">
          <img className="discord-logo" src={discordLogo} alt="Discord Logo" />
        </div>
      </nav>
      <nav className="side-nav side-nav-right">
        <div className="discord-container discord-logo-container-right">
          <img className="discord-logo" src={discordLogo} alt="Discord Logo" />
        </div>
      </nav>
    </>
  )
}
