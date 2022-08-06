import React, { useState, useEffect } from 'react'
import logo from '../svg/logo.svg'
import discordLogo from '../svg/discord-logo.svg'
// import Menu from './Menu'
import '../stylesheets/Menu.css'
import '../stylesheets/Navigation.css'
import Hamburger from 'hamburger-react'
import { Link, useLocation } from 'react-router-dom'

export default function Navigation () {
  const [isOpen, setOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    console.log('Location changed')
    setOpen(false)
  }, [location])

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
            <div className="menu-container">
            <div className="menu-outer-container">
              <div className="menu-inner-container">
                  <nav className="category-content">
                      <div className="category-heading"><Link to="/rl" className="category-item">Rocket League</Link></div>
                      <hr className="menu-hr"></hr>
                      <div className="category-list">
                      <div className="category-subheading"><Link to="/rl" className="category-item">Tournaments</Link></div>
                      </div>
                      <div className="category-list">
                      <div className="category-subheading"><Link to="rl" className="category-item">Register</Link></div>
                      </div>
                      <div className="category-list">
                      <div className="category-subheading"><a href="https://rlcsle.com/" target="_blank" rel="noreferrer" className="category-item">Wordle For Rocket League</a></div>
                      </div>
                  </nav>
                  <nav className="category-content ">
                  <div className="category-heading"><Link to="/f1" className="category-item">f1 22</Link></div>
                      <hr className="menu-hr"></hr>
                      <div className="category-list">
                      <div className="category-subheading"><Link to="/f1/races" className="category-item">Races</Link></div>
                      {/* <div className="category-link"><Link to="" className="category-item">Tier A</Link></div>
                      <div className="category-link"><a className="category-item">Tier B</a></div> */}
                      </div>
                      <div className="category-list">
                      <div className="category-subheading"><Link to="/f1/standings" className="category-item">Standings</Link></div>
                      {/* <div className="category-link"><Link to="" className="category-item">Tier A</Link></div>
                      <div className="category-link"><a className="category-item">Tier B</a></div> */}
                      </div>
                      <div className="category-list">
                      <div className="category-subheading"><Link to="/f1/drivers" className="category-item">Drivers</Link></div>
                      </div>
                      <div className="category-list">
                      {/* <div className="category-link"><a className="category-item">Tier A</a></div>
                      <div className="category-link"><a className="category-item">Tier B</a></div> */}
                      <div className="category-subheading"><Link to="/f1/register" className="category-item">Register</Link></div>
                      </div>
                  </nav>
              </div>
              </div>
          </div>
          }
          <div>

          </div>

        </div>
      </nav>
      <nav className="side-nav side-nav-left">
      <a href="https://discord.gg/jKeXr7mcv5" target="_blank" rel="noreferrer">
        <div className="discord-container discord-logo-container-left">
          <img className="discord-logo" src={discordLogo} alt="Discord Logo" />
        </div>
        </a>
      </nav>
      <nav className="side-nav side-nav-right">
      <a href="https://discord.gg/jKeXr7mcv5" target="_blank" rel="noreferrer">
        <div className="discord-container discord-logo-container-right">
          <img className="discord-logo" src={discordLogo} alt="Discord Logo" />
        </div>
        </a>
      </nav>
    </>
  )
}
