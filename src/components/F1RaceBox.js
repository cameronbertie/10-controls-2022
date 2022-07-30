import React from 'react'
import '../App.css';
import '../stylesheets/F1RaceBox.css';

export default function F1RaceBox() {
  return (
    <div className="race-box-container">
      <div className="race-box-content">
        <div className="race-box-title">MELBOURNE</div>
        <div className="race-box-date">5th August 2022</div>
        <button className="race-box-button">Register Now</button>
      </div>
    </div>
  )
}
