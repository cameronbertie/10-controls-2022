import React, { useState } from 'react'
import '../App.css'
import '../stylesheets/F1Drivers.css'
import F1Team from './F1Team'

export default function F1Drivers () {
  const [selectedDivision, setSelectedDivision] = useState('Tier A')
  return (
    <>
    <div className="page-content">
    <h1 className="page-content-heading">Drivers</h1>
    <div className="division-menu-container">
        <h4 className="division-menu-item" style={{ color: selectedDivision === 'Tier A' ? 'white' : '#C18794' }} onClick={() => setSelectedDivision('Tier A')}>Tier A - Season 1</h4>
        <h4 className="division-menu-item" style={{ color: selectedDivision === 'Tier B' ? 'white' : '#C18794' }} onClick={() => setSelectedDivision('Tier B')}>Tier B - Season 1</h4>
    </div>
    <div className="drivers-list">
    {selectedDivision === 'Tier A'
      ? <>
          <F1Team teamImage="/mercedes.png" teamName="Mercedes" driver1Name="Mute" driver1Number="53" driver1Flag="/ng.png" driver2Name="Eddyworth" driver2Number="67" driver2Flag="/fr.png" />
          <F1Team teamImage="" teamName="" driver1Name="" driver1Number="" driver1Flag="" driver2Name="" driver2Number="" driver2Flag="" />
          <F1Team teamImage="" teamName="" driver1Name="" driver1Number="" driver1Flag="" driver2Name="" driver2Number="" driver2Flag="" />
          <F1Team teamImage="" teamName="" driver1Name="" driver1Number="" driver1Flag="" driver2Name="" driver2Number="" driver2Flag="" />
          <F1Team teamImage="" teamName="" driver1Name="" driver1Number="" driver1Flag="" driver2Name="" driver2Number="" driver2Flag="" />
          <F1Team teamImage="" teamName="" driver1Name="" driver1Number="" driver1Flag="" driver2Name="" driver2Number="" driver2Flag="" />
          <F1Team teamImage="" teamName="" driver1Name="" driver1Number="" driver1Flag="" driver2Name="" driver2Number="" driver2Flag="" />
          <F1Team teamImage="" teamName="" driver1Name="" driver1Number="" driver1Flag="" driver2Name="" driver2Number="" driver2Flag="" />
          <F1Team teamImage="" teamName="" driver1Name="" driver1Number="" driver1Flag="" driver2Name="" driver2Number="" driver2Flag="" />
          <F1Team teamImage="" teamName="" driver1Name="" driver1Number="" driver1Flag="" driver2Name="" driver2Number="" driver2Flag="" />
          </>
      : <>
          <F1Team />
          <F1Team />
          </>
        }
    </div>
    </div>
    </>
  )
}
