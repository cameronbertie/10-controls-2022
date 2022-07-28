import React from 'react';
import '../App.css';
import '../stylesheets/F1TierGrid.css';

function F1TierGrid() {
  return (
    <>
      <section className="tier-grid-container">
  <div className="left-grid grid">
    <div className="grid-heading">Tier A</div>
    <div className="grid-subheading">Season 1</div>
    <div className="grid-text">Every Friday at 19:30 BST</div>
    <button className="grid-button">Register Now</button>
  </div>
  <div className="right-grid grid">
  
  <div className="grid-heading">Tier B</div>
    <div className="grid-subheading">Season 1</div>
    <div className="grid-text">Every Saturday at 19:30 BST</div>
    <button className="grid-button">Register Now</button>
  </div>
</section>
</>
  );
}

export default F1TierGrid;