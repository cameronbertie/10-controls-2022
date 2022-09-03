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
import RLRegister from './components/rl/RLRegister'
import RLQualifier from './components/rl/RLQualifier'
import RLPlayoffs from './components/rl/RLPlayoffs'
import F1RacesMelbourneA from './components/f1/F1RacesMelbourneA'
import F1RacesMelbourneB from './components/f1/F1RacesMelbourneB'
import F1RacesSilverstoneA from './components/f1/F1RacesSilverstoneA'
import F1RacesSilverstoneB from './components/f1/F1RacesSilverstoneB'
import F1RacesSpaA from './components/f1/F1RacesSpaA'
import F1RacesSpaB from './components/f1/F1RacesSpaB'
import F1RacesJeddahA from './components/f1/F1RacesJeddahA'
import F1RacesJeddahB from './components/f1/F1RacesJeddahB'
import F1RacesZandvoortA from './components/f1/F1RacesZandvoortA'
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
            <Route path="/f1/races/tier-b/spa-francorchamps" element={<F1RacesSpaB />} />
            <Route path="/f1/races/tier-a/jeddah" element={<F1RacesJeddahA />} />
            <Route path="/f1/races/tier-b/jeddah" element={<F1RacesJeddahB />} />
            <Route path="/f1/races/tier-a/zandvoort" element={<F1RacesZandvoortA />} />
            <Route path="/f1/register" element={<F1Register />} />
            <Route path="/f1/drivers" element={<F1Drivers />} />
            <Route path="/f1/standings" element={<F1Standings />} />
            <Route path="/rl" element={<RLMain />} />
            <Route path="/rl/tournaments" element={<RLTournaments />} />
            <Route path="/rl/register" element={<RLRegister />} />
            <Route path="/rl/tournaments/autumn/qualifier-event-1" element={<RLQualifier tournamentName="QUALIFIER EVENT 1 - AUTUMN" tournamentPrize="$25" tournamentDate="THURSDAY, 1ST SEPTEMBER 2022"/>} />
            <Route path="/rl/tournaments/autumn/qualifier-event-2" element={<RLQualifier tournamentName="QUALIFIER EVENT 2 - AUTUMN" tournamentPrize="$25" tournamentDate="THURSDAY, 29th SEPTEMBER 2022"/>} />
            <Route path="/rl/tournaments/autumn/qualifier-event-3" element={<RLQualifier tournamentName="QUALIFIER EVENT 3 - AUTUMN" tournamentPrize="$25" tournamentDate="THURSDAY, 27th October 2022"/>} />
            <Route path="/rl/tournaments/autumn/playoffs" element={<RLPlayoffs tournamentName="Playoffs - AUTUMN" tournamentPrize="$60" tournamentDate="THURSDAY, 24th November 2022" />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
