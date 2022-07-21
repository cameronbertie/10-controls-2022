import React from 'react'
import "../stylesheets/Menu.css";

export default function Menu() {
  return (
    <div className="menu-container">
        <div className="menu-inner-container">
            <nav className="category-content">
                <div className="category-heading category-item">Rocket League</div>
                <hr className="menu-hr"></hr>
                <div className="category-list">
                <div className="category-subheading category-item">Tournaments</div>
                </div>
                <div className="category-list">
                <div className="category-subheading category-item">Register</div>
                </div>
                <div className="category-list">
                <div className="category-subheading category-item">Wordle For Rocket League</div>
                </div>
                
            </nav>
            <nav className="category-content ">
            <div className="category-heading category-item">f1 22</div>
                <hr className="menu-hr"></hr>
                <div className="category-list">
                <div className="category-subheading category-item">Races</div>
                <div className="category-link category-item">Tier A</div>
                <div className="category-link category-item">Tier B</div>
                </div>
                <div className="category-list">
                <div className="category-subheading category-item">Drivers</div>
                <div className="category-link category-item">Tier A</div>
                <div className="category-link category-item">Tier B</div>
                <div className="category-subheading category-item">Register</div>
                </div>
            </nav>
        </div>
    </div>
  )
}
