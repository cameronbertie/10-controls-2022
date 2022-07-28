import React from 'react';
import './App.css';
import Navigation from './components/Navigation';
import F1Main from './components/F1Main';
import F1Races from './components/F1Races';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div>
      <header>
        <Navigation />
        </header>
        <main>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/f1" element={<F1Main/>} />
        <Route path="/f1/races" element={<F1Races/>} />
        </Routes>
        </main>
  </div>
    </Router>
  );
}

const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);

export default App;
