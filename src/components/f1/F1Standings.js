import React, { useState } from 'react'
import '../../App.css'
import '../../stylesheets/F1Standings.css'
import F1DriversA from './F1DriversA'
import F1ConstructorsA from './F1ConstructorsA'
import F1DriversB from './F1DriversB'
import F1ConstructorsB from './F1ConstructorsB'
import Footer from '../Footer'

export default function F1Standings () {
  const [selectedDivision, setSelectedDivision] = useState('Tier A')
  const [selectedCategory, setSelectedCategory] = useState('Drivers')
  return (
    <>
    <div className="page-content">
    <h1 className="page-content-heading">Standings</h1>
    <div className="division-menu-container">
       <h4>Season 1</h4>
    </div>
    <div className="division-menu-container">
        <h4 className="division-menu-item" style={{ color: selectedDivision === 'Tier A' ? 'white' : '#C18794' }} onClick={() => setSelectedDivision('Tier A')}>Tier A</h4>
        <h4 className="division-menu-item" style={{ color: selectedDivision === 'Tier B' ? 'white' : '#C18794' }} onClick={() => setSelectedDivision('Tier B')}>Tier B</h4>
    </div>
    <div className="division-menu-container">
        <h4 className="division-menu-item" style={{ color: selectedCategory === 'Drivers' ? 'white' : '#C18794' }} onClick={() => setSelectedCategory('Drivers')}>Drivers</h4>
        <h4 className="division-menu-item" style={{ color: selectedCategory === 'Constructors' ? 'white' : '#C18794' }} onClick={() => setSelectedCategory('Constructors')}>Constructors</h4>
    </div>
    <div className="drivers-list">
     {(selectedDivision === 'Tier A' && selectedCategory === 'Drivers') &&
       <F1DriversA />
        }
        {(selectedDivision === 'Tier A' && selectedCategory === 'Constructors') &&
       <F1ConstructorsA />
        }
        {(selectedDivision === 'Tier B' && selectedCategory === 'Drivers') &&
       <F1DriversB />
        }
        {(selectedDivision === 'Tier B' && selectedCategory === 'Constructors') &&
       <F1ConstructorsB />
        }
    </div>
    <Footer />
    </div>
    </>
  )
}
