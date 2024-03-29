import React, { useState } from 'react'
import '../../App.css'
import '../../stylesheets/F1Drivers.css'
import F1Team from './F1Team'
import Footer from '../Footer'

export default function F1Drivers () {
  const [selectedSeason, setSelectedSeason] = useState('Season 2')
  const [selectedDivision, setSelectedDivision] = useState('Tier A')
  return (
    <>
    <div className="page-content">
    <h1 className="page-content-heading">Drivers</h1>
    <div className="division-menu-container">
        <h4 className="division-menu-item" style={{ color: selectedSeason === 'Season 1' ? 'white' : '#C18794' }} onClick={() => setSelectedSeason('Season 1')}>Season 1</h4>
        <h4 className="division-menu-item" style={{ color: selectedSeason === 'Season 2' ? 'white' : '#C18794' }} onClick={() => setSelectedSeason('Season 2')}>Season 2</h4>
    </div>
    <div className="division-menu-container">
        <h4 className="division-menu-item" style={{ color: selectedDivision === 'Tier A' ? 'white' : '#C18794' }} onClick={() => setSelectedDivision('Tier A')}>Tier A</h4>
        <h4 className="division-menu-item" style={{ color: selectedDivision === 'Tier B' ? 'white' : '#C18794' }} onClick={() => setSelectedDivision('Tier B')}>Tier B</h4>
    </div>
    <div className="drivers-list">
    {selectedDivision === 'Tier A' && selectedSeason === 'Season 1'
      ? <>
          <F1Team teamColor="#6CD3BF" teamBackground="rgba(108, 211, 191, 0.2)" teamImage="/mercedes.png" teamName="Mercedes" driver1Name="Mute" driver1Number="53" driver1Flag="/ng.png" driver2Name="Eddyworth" driver2Number="67" driver2Flag="/fr.png" />
          <F1Team teamColor="#3671C6" teamBackground="rgba(54, 113, 198, 0.2)" teamImage="/red-bull.png" teamName="Red Bull" driver1Name="ThomasVink" driver1Number="8" driver1Flag="/nl.png" driver2Name="Hailee" driver2Number="69" driver2Flag="/nl.png" />
          <F1Team teamColor="#F91536" teamBackground="rgba(249, 21, 54, 0.2)" teamImage="/ferrari.png" teamName="Ferrari" driver1Name="Newman" driver1Number="16" driver1Flag="/it.png" driver2Name="Cortes" driver2Number="44" driver2Flag="/es.png" />
          <F1Team teamColor="#F58020" teamBackground="rgba(245, 128, 32, 0.2)" teamImage="/mclaren.png" teamName="Mclaren" driver1Name="Im3j3n" driver1Number="13" driver1Flag="/de.png" driver2Name="Kudos" driver2Number="35" driver2Flag="/de.png" />
          <F1Team teamColor="#2293D1" teamBackground="rgba(34, 147, 209, 0.2)" teamImage="/alpine.png" teamName="Alpine" driver1Name="Nik Kei" driver1Number="4" driver1Flag="/ua.png" driver2Name="Faded" driver2Number="30" driver2Flag="/us.png" />
          <F1Team teamColor="#5E8FAA" teamBackground="rgba(94, 143, 170, 0.2)" teamImage="/alpha-tauri.png" teamName="Alphatauri" driver1Name="Jaysen" driver1Number="59" driver1Flag="/nl.png" driver2Name="Kyan" driver2Number="88" driver2Flag="/nl.png" />
          <F1Team teamColor="#358C75" teamBackground="rgba(53, 140, 117, 0.2)" teamImage="/aston-martin.png" teamName="Aston Martin" driver1Name="Luca" driver1Number="40" driver1Flag="/gb.png" driver2Name="counterfeit" driver2Number="27" driver2Flag="/gb.png" />
          <F1Team teamColor="#37BEDD" teamBackground="rgba(55, 190, 221, 0.2)" teamImage="/williams.png" teamName="Williams" driver1Name="Kalcess" driver1Number="49" driver1Flag="/no.png" driver2Name="lawrenceselling" driver2Number="93" driver2Flag="/ph.png" />
          <F1Team teamColor="#C92D4B" teamBackground="rgba(201, 45, 75, 0.2)" teamImage="/alfa-romeo.png" teamName="alfa romeo" driver1Name="focuser" driver1Number="22" driver1Flag="/es.png" driver2Name="countmuttly" driver2Number="14" driver2Flag="/dk.png" />
          <F1Team teamColor="#B6BABD" teamBackground="rgba(182, 186, 189, 0.2)" teamImage="/haas.png" teamName="Haas" driver1Name="Anoldenemy" driver1Number="19" driver1Flag="/hr.png" driver2Name="Flaw" driver2Number="70" driver2Flag="/nl.png" />
          </>
      : selectedDivision === 'Tier B' && selectedSeason === 'Season 1'
        ? <>
          <F1Team teamColor="#6CD3BF" teamBackground="rgba(108, 211, 191, 0.2)" teamImage="/mercedes.png" teamName="Mercedes" driver1Name="Nydrow" driver1Number="25" driver1Flag="/be.png" driver2Name="Zerotix" driver2Number="99" driver2Flag="/de.png" />
         <F1Team teamColor="#3671C6" teamBackground="rgba(54, 113, 198, 0.2)" teamImage="/red-bull.png" teamName="Red Bull" driver1Name="Maxfan" driver1Number="33" driver1Flag="/pl.png" driver2Name="Arab" driver2Number="28" driver2Flag="/us.png" />
         <F1Team teamColor="#F91536" teamBackground="rgba(249, 21, 54, 0.2)" teamImage="/ferrari.png" teamName="Ferrari" driver1Name="Veixel" driver1Number="42" driver1Flag="/se.png" driver2Name="Cheers" driver2Number="7" driver2Flag="/de.png" />
         <F1Team teamColor="#F58020" teamBackground="rgba(245, 128, 32, 0.2)" teamImage="/mclaren.png" teamName="Mclaren" driver1Name="Sp3xtre" driver1Number="31" driver1Flag="/se.png" driver2Name="Brim" driver2Number="8" driver2Flag="/nl.png" />
         <F1Team teamColor="#2293D1" teamBackground="rgba(34, 147, 209, 0.2)" teamImage="/alpine.png" teamName="Alpine" driver1Name="Vade" driver1Number="21" driver1Flag="/se.png" driver2Name="Andrew" driver2Number="19" driver2Flag="/ro.png" />
         <F1Team teamColor="#5E8FAA" teamBackground="rgba(94, 143, 170, 0.2)" teamImage="/alpha-tauri.png" teamName="Alphatauri" driver1Name="Rinky" driver1Number="24" driver1Flag="/nl.png" driver2Name="Br0wn" driver2Number="32" driver2Flag="/de.png" />
         <F1Team teamColor="#358C75" teamBackground="rgba(53, 140, 117, 0.2)" teamImage="/aston-martin.png" teamName="Aston Martin" driver1Name="ARBITERELITEX" driver1Number="2" driver1Flag="/it.png" driver2Name="EZCAKEARDA" driver2Number="20" driver2Flag="/be.png" />
         <F1Team teamColor="#37BEDD" teamBackground="rgba(55, 190, 221, 0.2)" teamImage="/williams.png" teamName="Williams" driver1Name="Uklucasw" driver1Number="66" driver1Flag="/gb.png" driver2Name="AlphaRomeo" driver2Number="19" driver2Flag="/nl.png" />
         <F1Team teamColor="#C92D4B" teamBackground="rgba(201, 45, 75, 0.2)" teamImage="/alfa-romeo.png" teamName="alfa romeo" driver1Name="Daniel Bodnar" driver1Number="18" driver1Flag="/sk.png" driver2Name="Philip" driver2Number="22" driver2Flag="/nl.png" />
         <F1Team teamColor="#B6BABD" teamBackground="rgba(182, 186, 189, 0.2)" teamImage="/haas.png" teamName="Haas" driver1Name="Luc" driver1Number="13" driver1Flag="/nl.png" driver2Name="Melon" driver2Number="5" driver2Flag="/ro.png" />
         </>
        : selectedDivision === 'Tier A' && selectedSeason === 'Season 2'
          ? <>
          <F1Team teamColor="#3671C6" teamBackground="rgba(54, 113, 198, 0.2)" teamImage="/red-bull.png" teamName="Red Bull" driver1Name="ThomasVink" driver1Number="8" driver1Flag="/nl.png" driver2Name="Focuser" driver2Number="22" driver2Flag="/es.png" />
          <F1Team teamColor="#F91536" teamBackground="rgba(249, 21, 54, 0.2)" teamImage="/ferrari.png" teamName="Ferrari" driver1Name="Newman" driver1Number="16" driver1Flag="/it.png" driver2Name="Counterfeit" driver2Number="27" driver2Flag="/gb.png" />
          <F1Team teamColor="#6CD3BF" teamBackground="rgba(108, 211, 191, 0.2)" teamImage="/mercedes.png" teamName="Mercedes" driver1Name="Luca" driver1Number="40" driver1Flag="/gb.png" driver2Name="Cortes" driver2Number="44" driver2Flag="/es.png" />
          <F1Team teamColor="#2293D1" teamBackground="rgba(34, 147, 209, 0.2)" teamImage="/alpine.png" teamName="Alpine" driver1Name="Faded" driver1Number="30" driver1Flag="/us.png" driver2Name="Nik Kei" driver2Number="4" driver2Flag="/ua.png" />
          <F1Team teamColor="#F58020" teamBackground="rgba(245, 128, 32, 0.2)" teamImage="/mclaren.png" teamName="Mclaren" driver1Name="Luc" driver1Number="31" driver1Flag="/nl.png" driver2Name="Brim" driver2Number="8" driver2Flag="/nl.png" />
          <F1Team teamColor="#C92D4B" teamBackground="rgba(201, 45, 75, 0.2)" teamImage="/alfa-romeo.png" teamName="alfa romeo" driver1Name="Nydrow" driver1Number="25" driver1Flag="/be.png" driver2Name="Veixel" driver2Number="23" driver2Flag="/se.png" />
          <F1Team teamColor="#358C75" teamBackground="rgba(53, 140, 117, 0.2)" teamImage="/aston-martin.png" teamName="Aston Martin" driver1Name="Kudos" driver1Number="35" driver1Flag="/de.png" driver2Name="Im3j3n" driver2Number="13" driver2Flag="/de.png" />
          <F1Team teamColor="#B6BABD" teamBackground="rgba(182, 186, 189, 0.2)" teamImage="/haas.png" teamName="Haas" driver1Name="Daniel Bodnar" driver1Number="18" driver1Flag="/sk.png" driver2Name="Philip" driver2Number="24" driver2Flag="/nl.png" />
          <F1Team teamColor="#5E8FAA" teamBackground="rgba(94, 143, 170, 0.2)" teamImage="/alpha-tauri.png" teamName="Alphatauri" driver1Name="Kalcess" driver1Number="49" driver1Flag="/no.png" driver2Name="Cheers" driver2Number="7" driver2Flag="/de.png" />
          <F1Team teamColor="#37BEDD" teamBackground="rgba(55, 190, 221, 0.2)" teamImage="/williams.png" teamName="Williams" driver1Name="Flaw" driver1Number="70" driver1Flag="/nl.png" driver2Name="AlphaRomeo" driver2Number="19" driver2Flag="/nl.png" />
          </>
          : <>
         <F1Team teamColor="#3671C6" teamBackground="rgba(54, 113, 198, 0.2)" teamImage="/red-bull.png" teamName="Red Bull" driver1Name="Arab" driver1Number="28" driver1Flag="/us.png" driver2Name="Maxfan" driver2Number="33" driver2Flag="/pl.png" />
          <F1Team teamColor="#F91536" teamBackground="rgba(249, 21, 54, 0.2)" teamImage="/ferrari.png" teamName="Ferrari" driver1Name="ARBITERELITE" driver1Number="2" driver1Flag="/it.png" driver2Name="LUKAS HENDRYCH" driver2Number="20" driver2Flag="/cz.png" />
          <F1Team teamColor="#6CD3BF" teamBackground="rgba(108, 211, 191, 0.2)" teamImage="/mercedes.png" teamName="Mercedes" driver1Name="UKLUCASW" driver1Number="66" driver1Flag="/gb.png" driver2Name="SP3XTRE" driver2Number="31" driver2Flag="/se.png" />
          <F1Team teamColor="#2293D1" teamBackground="rgba(34, 147, 209, 0.2)" teamImage="/alpine.png" teamName="Alpine" driver1Name="KIMIRAI" driver1Number="32" driver1Flag="/de.png" driver2Name="VADE" driver2Number="7" driver2Flag="/se.png" />
         <F1Team teamColor="#F58020" teamBackground="rgba(245, 128, 32, 0.2)" teamImage="/mclaren.png" teamName="Mclaren" driver1Name="CountMuttly" driver1Number="14" driver1Flag="/dk.png" driver2Name="Melon" driver2Number="5" driver2Flag="/ro.png" />
         <F1Team teamColor="#C92D4B" teamBackground="rgba(201, 45, 75, 0.2)" teamImage="/alfa-romeo.png" teamName="alfa romeo" driver1Name="VLADREDD" driver1Number="86" driver1Flag="/ro.png" driver2Name="ANDREW" driver2Number="91" driver2Flag="/ro.png" />
         <F1Team teamColor="#358C75" teamBackground="rgba(53, 140, 117, 0.2)" teamImage="/aston-martin.png" teamName="Aston Martin" driver1Name="Anoldenemy" driver1Number="19" driver1Flag="/nl.png" driver2Name="Lawrenceselling" driver2Number="93" driver2Flag="/ph.png" />
         <F1Team teamColor="#B6BABD" teamBackground="rgba(182, 186, 189, 0.2)" teamImage="/haas.png" teamName="Haas" driver1Name="MAX HOUSLEY" driver1Number="8" driver1Flag="/gb.png" driver2Name="KJAERBO" driver2Number="3" driver2Flag="/dk.png" />
         <F1Team teamColor="#5E8FAA" teamBackground="rgba(94, 143, 170, 0.2)" teamImage="/alpha-tauri.png" teamName="Alphatauri" driver1Name="Br0wn" driver1Number="32" driver1Flag="/de.png" driver2Name="ZEROTIX" driver2Number="99" driver2Flag="/de.png" />
         <F1Team teamColor="#37BEDD" teamBackground="rgba(55, 190, 221, 0.2)" teamImage="/williams.png" teamName="Williams" driver1Name="KOGODA" driver1Number="21" driver1Flag="/ie.png" driver2Name="BARTUSG" driver2Number="70" driver2Flag="/hu.png" />
         </>
        }
    </div>
    <Footer />
    </div>
    </>
  )
}
