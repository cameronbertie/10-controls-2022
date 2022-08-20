import React, { useState } from 'react'
import '../../App.css'
import '../../stylesheets/F1RacesMenu.css'
import F1RacesTierA from './F1RacesTierA'
import F1RacesTierB from './F1RacesTierB'

export default function F1RacesMenu () {
  const [selectedTier, setSelectedTier] = useState('Tier A')

  return (
    <div className="races-menu-container">
        <div className="season-container">
        <div className="races-menu-text">Season 1</div>
        </div>
        <div className="tier-container">
        <div style={{ color: selectedTier === 'Tier A' ? 'white' : '#C18794' }} className="races-menu-link" onClick={() => setSelectedTier('Tier A')}>Tier A</div>
        <div style={{ color: selectedTier === 'Tier B' ? 'white' : '#C18794' }} className="races-menu-link" onClick={() => setSelectedTier('Tier B')}>Tier B</div>
        </div>
        <div>
        {selectedTier === 'Tier A'
          ? <F1RacesTierA />
          : <F1RacesTierB />
        }
        </div>
        </div>

  )
}
