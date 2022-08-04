import React from 'react'
import '../App.css'
import '../stylesheets/F1RacesTier.css'
import F1RaceBox from './F1RaceBox'

export default function F1RacesTierA () {
  return (
    <div className="race-tier-container">
        <F1RaceBox raceName="Melbourne" raceDate={["5", <sup>th</sup>, " August 2022"]} raceFlag="/au.png"/>
        <F1RaceBox raceName="Silverstone" raceDate={["12", <sup>th</sup>, " August 2022"]} raceFlag="/au.png"/>
        <F1RaceBox raceName="Spa-Francorchamps" raceDate={["19", <sup>th</sup>, " August 2022"]} raceFlag="/au.png"/>
        <F1RaceBox raceName="Jeddah" raceDate={["26", <sup>th</sup>, " August 2022"]} raceFlag="/au.png"/>
        <F1RaceBox raceName="Zandvoort" raceDate={["2", <sup>nd</sup>, " September 2022"]} raceFlag="/au.png"/>
        <F1RaceBox raceName="Monza (Sprint)" raceDate={["9", <sup>th</sup>, " September 2022"]} raceFlag="/au.png"/>
        <F1RaceBox raceName="Hungaroring" raceDate={["16", <sup>th</sup>, " September 2022"]} raceFlag="/au.png"/>
        <F1RaceBox raceName="Miami" raceDate={["23", <sup>rd</sup>, " September 2022"]} raceFlag="/au.png"/>
        <F1RaceBox raceName="Mexico" raceDate={["30", <sup>th</sup>, " September 2022"]} raceFlag="/au.png"/>
        <F1RaceBox raceName="Imola" raceDate={["7", <sup>th</sup>, " October 2022"]} raceFlag="/au.png"/>
        <F1RaceBox raceName="Barcelona" raceDate={["14", <sup>th</sup>, " October 2022"]} raceFlag="/au.png"/>
        <F1RaceBox raceName="Suzuka" raceDate={["21", <sup>st</sup>, " October 2022"]} raceFlag="/au.png"/>
        <F1RaceBox raceName="Montreal" raceDate={["28", <sup>th</sup>, " October 2022"]} raceFlag="/au.png"/>
        <F1RaceBox raceName="Bahrain (Sprint)" raceDate={["4", <sup>th</sup>, " November 2022"]} raceFlag="/au.png"/>
        <F1RaceBox raceName="Yas Marina" raceDate={["11", <sup>th</sup>, " November 2022"]} raceFlag="/au.png"/>
    </div>
  )
}
