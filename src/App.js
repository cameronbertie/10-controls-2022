import React from 'react'
import './App.css'
import ScrollToTop from './components/ScrollToTop'
import Navigation from './components/Navigation'
import Home from './components/Home'
import F1Main from './components/f1/F1Main'
import F1Races from './components/f1/F1Races'
import F1Register from './components/f1/F1Register'
import F1Drivers from './components/f1/F1Drivers'
import F1Standings from './components/f1/F1Standings'
import RLMain from './components/rl/RLMain'
import RLTournaments from './components/rl/RLTournaments'
import F1RacesMelbourneA from './components/f1/F1RacesMelbourneA'
import F1RacesMelbourneB from './components/f1/F1RacesMelbourneB'
import F1RacesSilverstoneA from './components/f1/F1RacesSilverstoneA'
import F1RacesSilverstoneB from './components/f1/F1RacesSilverstoneB'
import F1RacesSpaA from './components/f1/F1RacesSpaA'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App () {
  return (
    <Router>
      <ScrollToTop />
      <div>
        <header>
          <Navigation />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/f1" element={<F1Main />} />
            <Route path="/f1/races" element={<F1Races />} />
            <Route path="/f1/races/tier-a/melbourne" element={<F1RacesMelbourneA />} />
            <Route path="/f1/races/tier-b/melbourne" element={<F1RacesMelbourneB />} />
            <Route path="/f1/races/tier-a/silverstone" element={<F1RacesSilverstoneA />} />
            <Route path="/f1/races/tier-b/silverstone" element={<F1RacesSilverstoneB />} />
            <Route path="/f1/races/tier-a/spa-francorchamps" element={<F1RacesSpaA />} />
            <Route path="/f1/register" element={<F1Register />} />
            <Route path="/f1/drivers" element={<F1Drivers />} />
            <Route path="/f1/standings" element={<F1Standings />} />
            <Route path="/rl" element={<RLMain />} />
            <Route path="/rl/tournaments" element={<RLTournaments />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
