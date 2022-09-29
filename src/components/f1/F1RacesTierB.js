import React from 'react'
import '../../App.css'
import '../../stylesheets/F1RacesTier.css'
import F1RaceBox from './F1RaceBox'
// import F1RaceBox2 from './F1RaceBox2'
import F1RaceBoxComplete from './F1RaceBoxComplete'

export default function F1RacesTierB () {
  const races = [
  ]
  races.push({ id: 9, name: 'Mexico', date: new Date(2022, 9, 1).getTime(), flag: '/mx.png' })
  races.push({ id: 10, name: 'Imola (Sprint)', date: new Date(2022, 9, 8).getTime(), flag: '/it.png' })
  races.push({ id: 11, name: 'Barcelona', date: new Date(2022, 9, 15).getTime(), flag: '/es.png' })
  races.push({ id: 12, name: 'Suzuka', date: new Date(2022, 9, 22).getTime(), flag: '/jp.png' })
  races.push({ id: 13, name: 'Montreal', date: new Date(2022, 9, 29).getTime(), flag: '/ca.png' })
  races.push({ id: 14, name: 'Bahrain (Sprint)', date: new Date(2022, 10, 5).getTime(), flag: '/bh.png' })
  races.push({ id: 15, name: 'Yas Marina', date: new Date(2022, 10, 12).getTime(), flag: '/ae.png' })
  return (
    <div className="race-tier-container">
      <F1RaceBoxComplete raceName="Melbourne" raceDate={new Date(2022, 7, 6).getTime()} raceFlag="/au.png" raceLink="/f1/races/tier-b/melbourne" videoLink="https://www.youtube.com/watch?v=Cu7v0aCxCOQ&t=35s"/>
      <F1RaceBoxComplete raceName="Silverstone" raceDate={new Date(2022, 7, 13).getTime()} raceFlag="/gb.png" raceLink="/f1/races/tier-b/silverstone" videoLink="https://www.youtube.com/watch?v=_RhPVfNwIcY&t=55s"/>
      <F1RaceBoxComplete raceName="Spa-Francorchamps" raceDate={new Date(2022, 7, 20).getTime()} raceFlag="/be.png" raceLink="/f1/races/tier-b/spa-francorchamps" videoLink="https://www.youtube.com/watch?v=gmJ15BhNsd8&t=181s"/>
      <F1RaceBoxComplete raceName="Jeddah" raceDate={new Date(2022, 7, 27).getTime()} raceFlag="/sa.png" raceLink="/f1/races/tier-b/jeddah" videoLink="https://www.youtube.com/watch?v=RHNaiOMWHQM&t=3s"/>
      <F1RaceBoxComplete raceName="Zandvoort" raceDate={new Date(2022, 8, 3).getTime()} raceFlag="/nl.png" raceLink="/f1/races/tier-b/zandvoort" videoLink="https://www.youtube.com/watch?v=kir4hPeDBRg"/>
      <F1RaceBoxComplete raceName="Monza (Sprint)" raceDate={new Date(2022, 8, 10).getTime()} raceFlag="/it.png" raceLink="/f1/races/tier-b/monza" videoLink="https://www.youtube.com/watch?v=HNYzPC0Z3p4"/>
      <F1RaceBoxComplete raceName="Hungaroring" raceDate={new Date(2022, 8, 17).getTime()} raceFlag="/hu.png" raceLink="/f1/races/tier-b/hungaroring" videoLink="https://www.youtube.com/watch?v=DfBBev6xxQM"/>
      <F1RaceBoxComplete raceName="Miami" raceDate={new Date(2022, 8, 24).getTime()} raceFlag="/us.png" raceLink="/f1/races/tier-b/miami" videoLink="https://www.youtube.com/channel/UCTC5mPAHhoBq6Uv4eNIshMg"/>
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
