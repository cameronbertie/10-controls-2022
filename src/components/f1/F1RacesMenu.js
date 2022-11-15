import React, { useState } from 'react'
import '../../App.css'
import '../../stylesheets/F1RacesMenu.css'
import F1RacesTierA from './F1RacesTierA'
import F1RacesTierB from './F1RacesTierB'
import F1RacesTierA2 from './F1RacesTierA2'
import F1RacesTierB2 from './F1RacesTierB2'

export default function F1RacesMenu () {
  const [selectedSeason, setSelectedSeason] = useState('Season 2')
  const [selectedTier, setSelectedTier] = useState('Tier A')

  return (
    <div className="races-menu-container">
        <div className="tier-container">
        <div style={{ color: selectedSeason === 'Season 1' ? 'white' : '#C18794' }} className="races-menu-link" onClick={() => setSelectedSeason('Season 1')}>Season 1</div>
        <div style={{ color: selectedSeason === 'Season 2' ? 'white' : '#C18794' }} className="races-menu-link" onClick={() => setSelectedSeason('Season 2')}>Season 2</div>
        </div>
        <div className="tier-container">
        <div style={{ color: selectedTier === 'Tier A' ? 'white' : '#C18794' }} className="races-menu-link" onClick={() => setSelectedTier('Tier A')}>Tier A</div>
        <div style={{ color: selectedTier === 'Tier B' ? 'white' : '#C18794' }} className="races-menu-link" onClick={() => setSelectedTier('Tier B')}>Tier B</div>
        </div>
        <div>
        {selectedSeason === 'Season 1' && selectedTier === 'Tier A'
          ? <F1RacesTierA />
          : selectedSeason === 'Season 1' && selectedTier === 'Tier B'
            ? <F1RacesTierB />
            : selectedSeason === 'Season 2' && selectedTier === 'Tier A'
              ? <F1RacesTierA2 />
              : <F1RacesTierB2 />
        }
        </div>
        </div>

  )
}
