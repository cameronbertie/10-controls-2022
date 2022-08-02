import React from 'react'
import './App.css'
import Navigation from './components/Navigation'
import Home from './components/Home'
import F1Main from './components/F1Main'
import F1Races from './components/F1Races'
import F1Register from './components/F1Register'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App () {
  return (
    <Router>
      <div>
        <header>
          <Navigation />
        </header>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/f1" element={<F1Main />} />
            <Route path="/f1/races" element={<F1Races />} />
            <Route path="/f1/register" element={<F1Register />} />
          </Routes>
        </main>
      </div>
    </Router>
  )
}

export default App
