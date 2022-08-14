import React from 'react'
import '../App.css'
import '../stylesheets/F1RacesTier.css'
import F1RaceBox from './F1RaceBox'
import F1RaceBoxComplete from './F1RaceBoxComplete'

export default function F1RacesTierA () {
  const races = [
  ]

  races.push({ id: 3, name: 'Spa-Francorchamps', date: new Date(2022, 7, 19).getTime(), flag: '/be.png' })
  races.push({ id: 4, name: 'Jeddah', date: new Date(2022, 7, 26).getTime(), flag: '/sa.png' })
  races.push({ id: 5, name: 'Zandvoort', date: new Date(2022, 8, 2).getTime(), flag: '/nl.png' })
  races.push({ id: 6, name: 'Monza (Sprint)', date: new Date(2022, 8, 9).getTime(), flag: '/it.png' })
  races.push({ id: 7, name: 'Hungaroring', date: new Date(2022, 8, 16).getTime(), flag: '/hu.png' })
  races.push({ id: 8, name: 'Miami', date: new Date(2022, 8, 23).getTime(), flag: '/us.png' })
  races.push({ id: 9, name: 'Mexico', date: new Date(2022, 8, 30).getTime(), flag: '/mx.png' })
  races.push({ id: 10, name: 'Imola', date: new Date(2022, 9, 7).getTime(), flag: '/it.png' })
  races.push({ id: 11, name: 'Barcelona', date: new Date(2022, 9, 14).getTime(), flag: '/es.png' })
  races.push({ id: 12, name: 'Suzuka', date: new Date(2022, 9, 21).getTime(), flag: '/jp.png' })
  races.push({ id: 13, name: 'Montreal', date: new Date(2022, 9, 28).getTime(), flag: '/ca.png' })
  races.push({ id: 14, name: 'Bahrain (Sprint)', date: new Date(2022, 10, 4).getTime(), flag: '/bh.png' })
  races.push({ id: 15, name: 'Yas Marina', date: new Date(2022, 10, 11).getTime(), flag: '/ae.png' })
  return (
    <div className="race-tier-container">
      <F1RaceBoxComplete raceName="Melbourne" raceDate={new Date(2022, 7, 5).getTime()} raceFlag="/au.png" raceLink="/f1/races/tier-a/melbourne"/>
      <F1RaceBoxComplete raceName="Silverstone" raceDate={new Date(2022, 7, 12).getTime()} raceFlag="/gb.png" raceLink="/f1/races/tier-a/silverstone"/>
        {races.map(race => {
          return (<F1RaceBox key={race.id} raceName={race.name} raceDate={race.date} raceFlag={race.flag} />)
        })}
        {/* <F1RaceBox raceName="Melbourne" raceDate={['5', <sup>th</sup>, ' August 2022']} raceFlag="/au.png"/>
        <F1RaceBox raceName="Silverstone" raceDate={['12', <sup>th</sup>, ' August 2022']} raceFlag="/au.png"/>
        <F1RaceBox raceName="Spa-Francorchamps" raceDate={['19', <sup>th</sup>, ' August 2022']} raceFlag="/au.png"/>
        <F1RaceBox raceName="Jeddah" raceDate={['26', <sup>th</sup>, ' August 2022']} raceFlag="/au.png"/>
        <F1RaceBox raceName="Zandvoort" raceDate={['2', <sup>nd</sup>, ' September 2022']} raceFlag="/au.png"/>
        <F1RaceBox raceName="Monza (Sprint)" raceDate={['9', <sup>th</sup>, ' September 2022']} raceFlag="/au.png"/>
        <F1RaceBox raceName="Hungaroring" raceDate={['16', <sup>th</sup>, ' September 2022']} raceFlag="/au.png"/>
        <F1RaceBox raceName="Miami" raceDate={['23', <sup>rd</sup>, ' September 2022']} raceFlag="/au.png"/>
        <F1RaceBox raceName="Mexico" raceDate={['30', <sup>th</sup>, ' September 2022']} raceFlag="/au.png"/>
        <F1RaceBox raceName="Imola" raceDate={['7', <sup>th</sup>, ' October 2022']} raceFlag="/au.png"/>
        <F1RaceBox raceName="Barcelona" raceDate={['14', <sup>th</sup>, ' October 2022']} raceFlag="/au.png"/>
        <F1RaceBox raceName="Suzuka" raceDate={['21', <sup>st</sup>, ' October 2022']} raceFlag="/au.png"/>
        <F1RaceBox raceName="Montreal" raceDate={['28', <sup>th</sup>, ' October 2022']} raceFlag="/au.png"/>
        <F1RaceBox raceName="Bahrain (Sprint)" raceDate={['4', <sup>th</sup>, ' November 2022']} raceFlag="/au.png"/>
        <F1RaceBox raceName="Yas Marina" raceDate={['11', <sup>th</sup>, ' November 2022']} raceFlag="/au.png"/> */}
    </div>
  )
}
