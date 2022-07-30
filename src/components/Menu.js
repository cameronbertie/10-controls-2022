import React from 'react'
import '../stylesheets/Menu.css'

export default function Menu () {
  return (
    <div className="menu-container">
      <div className="menu-outer-container">
        <div className="menu-inner-container">
            <nav className="category-content">
                <div className="category-heading"><a className="category-item">Rocket League</a></div>
                <hr className="menu-hr"></hr>
                <div className="category-list">
                <div className="category-subheading"><a className="category-item">Tournaments</a></div>
                </div>
                <div className="category-list">
                <div className="category-subheading"><a className="category-item">Register</a></div>
                </div>
                <div className="category-list">
                <div className="category-subheading"><a className="category-item">Wordle For Rocket League</a></div>
                </div>
            </nav>
            <nav className="category-content ">
            <div className="category-heading"><a className="category-item">f1 22</a></div>
                <hr className="menu-hr"></hr>
                <div className="category-list">
                <div className="category-subheading"><a className="category-item">Races</a></div>
                <div className="category-link"><a className="category-item">Tier A</a></div>
                <div className="category-link"><a className="category-item">Tier B</a></div>
                </div>
                <div className="category-list">
                <div className="category-subheading"><a className="category-item">Drivers</a></div>
                <div className="category-link"><a className="category-item">Tier A</a></div>
                <div className="category-link"><a className="category-item">Tier B</a></div>
                <div className="category-subheading"><a className="category-item">Register</a></div>
                </div>
            </nav>
        </div>
        </div>
    </div>
  )
}
