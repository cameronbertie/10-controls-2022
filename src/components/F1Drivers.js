import React, { useState } from 'react'
import '../App.css'
import '../stylesheets/F1Drivers.css'
import F1Team from './F1Team'

export default function F1Drivers () {
  const [selectedDivision, setSelectedDivision] = useState('Tier A')
  return (
    <>
    <div className="page-content">
    <h1 className="page-content-heading">Drivers</h1>
    <div className="division-menu-container">
        <h4 className="division-menu-item" style={{ color: selectedDivision === 'Tier A' ? 'white' : '#C18794' }} onClick={() => setSelectedDivision('Tier A')}>Tier A - Season 1</h4>
        <h4 className="division-menu-item" style={{ color: selectedDivision === 'Tier B' ? 'white' : '#C18794' }} onClick={() => setSelectedDivision('Tier B')}>Tier B - Season 1</h4>
    </div>
    <div className="drivers-list">
    {selectedDivision === 'Tier A'
      ? <>
          <F1Team teamColor="#6CD3BF" teamBackground="rgba(108, 211, 191, 0.2)" teamImage="/mercedes.png" teamName="Mercedes" driver1Name="Mute" driver1Number="53" driver1Flag="/ng.png" driver2Name="Eddyworth" driver2Number="67" driver2Flag="/fr.png" />
          <F1Team teamColor="#3671C6" teamBackground="rgba(54, 113, 198, 0.2)" teamImage="/red-bull.png" teamName="Red Bull" driver1Name="ThomasVink" driver1Number="8" driver1Flag="/nl.png" driver2Name="Jesse" driver2Number="69" driver2Flag="/nl.png" />
          <F1Team teamColor="#F91536" teamBackground="rgba(249, 21, 54, 0.2)" teamImage="/ferrari.png" teamName="Ferrari" driver1Name="Newman" driver1Number="16" driver1Flag="/it.png" driver2Name="Cortes" driver2Number="44" driver2Flag="/es.png" />
          <F1Team teamColor="#F58020" teamBackground="rgba(245, 128, 32, 0.2)" teamImage="/mclaren.png" teamName="Mclaren" driver1Name="Im3j3n" driver1Number="13" driver1Flag="/de.png" driver2Name="Kudos" driver2Number="35" driver2Flag="/de.png" />
          <F1Team teamColor="#2293D1" teamBackground="rgba(34, 147, 209, 0.2)" teamImage="/alpine.png" teamName="Alpine" driver1Name="Nik Kei" driver1Number="4" driver1Flag="/ua.png" driver2Name="Faded" driver2Number="30" driver2Flag="/us.png" />
          <F1Team teamColor="#5E8FAA" teamBackground="rgba(94, 143, 170, 0.2)" teamImage="/alpha-tauri.png" teamName="Alphatauri" driver1Name="Jaysen" driver1Number="59" driver1Flag="/nl.png" driver2Name="Kyan" driver2Number="88" driver2Flag="/nl.png" />
          <F1Team teamColor="#358C75" teamBackground="rgba(53, 140, 117, 0.2)" teamImage="/aston-martin.png" teamName="Aston Martin" driver1Name="Lucadude" driver1Number="40" driver1Flag="/gb.png" driver2Name="counterfeit" driver2Number="27" driver2Flag="/gb.png" />
          <F1Team teamColor="#37BEDD" teamBackground="rgba(55, 190, 221, 0.2)" teamImage="/williams.png" teamName="Williams" driver1Name="Kalcess" driver1Number="49" driver1Flag="/no.png" driver2Name="lawrenceselling" driver2Number="93" driver2Flag="/ph.png" />
          <F1Team teamColor="#C92D4B" teamBackground="rgba(201, 45, 75, 0.2)" teamImage="/alfa-romeo.png" teamName="alfa romeo" driver1Name="focuser" driver1Number="22" driver1Flag="/es.png" driver2Name="countmuttly" driver2Number="14" driver2Flag="/dk.png" />
          <F1Team teamColor="#B6BABD" teamBackground="rgba(182, 186, 189, 0.2)" teamImage="/haas.png" teamName="Haas" driver1Name="Anoldenemy" driver1Number="19" driver1Flag="/hr.png" driver2Name="Flaw" driver2Number="70" driver2Flag="/nl.png" />
          </>
      : <>
           <F1Team teamColor="#6CD3BF" teamBackground="rgba(108, 211, 191, 0.2)" teamImage="/mercedes.png" teamName="Mercedes" driver1Name="Nydrow" driver1Number="25" driver1Flag="/be.png" driver2Name="Zerotix" driver2Number="99" driver2Flag="/de.png" />
          <F1Team teamColor="#3671C6" teamBackground="rgba(54, 113, 198, 0.2)" teamImage="/red-bull.png" teamName="Red Bull" driver1Name="Maxfan" driver1Number="33" driver1Flag="/pl.png" driver2Name="Joakingen" driver2Number="25" driver2Flag="/se.png" />
          <F1Team teamColor="#F91536" teamBackground="rgba(249, 21, 54, 0.2)" teamImage="/ferrari.png" teamName="Ferrari" driver1Name="Veixel" driver1Number="42" driver1Flag="/se.png" driver2Name="Kurubangsinn" driver2Number="20" driver2Flag="/is.png" />
          <F1Team teamColor="#F58020" teamBackground="rgba(245, 128, 32, 0.2)" teamImage="/mclaren.png" teamName="Mclaren" driver1Name="Simmetry" driver1Number="24" driver1Flag="/se.png" driver2Name="Brim" driver2Number="8" driver2Flag="/nl.png" />
          <F1Team teamColor="#2293D1" teamBackground="rgba(34, 147, 209, 0.2)" teamImage="/alpine.png" teamName="Alpine" driver1Name="Chase" driver1Number="4" driver1Flag="/us.png" driver2Name="Shadow" driver2Number="37" driver2Flag="/gb.png" />
          <F1Team teamColor="#5E8FAA" teamBackground="rgba(94, 143, 170, 0.2)" teamImage="/alpha-tauri.png" teamName="Alphatauri" driver1Name="Arab" driver1Number="28" driver1Flag="/us.png" driver2Name="Lean" driver2Number="2" driver2Flag="/de.png" />
          <F1Team teamColor="#358C75" teamBackground="rgba(53, 140, 117, 0.2)" teamImage="/aston-martin.png" teamName="Aston Martin" driver1Name="Bald" driver1Number="13" driver1Flag="/ie.png" driver2Name="F1 Gamer" driver2Number="96" driver2Flag="/gb.png" />
          <F1Team teamColor="#37BEDD" teamBackground="rgba(55, 190, 221, 0.2)" teamImage="/williams.png" teamName="Williams" driver1Name="Uklucasw" driver1Number="66" driver1Flag="/gb.png" driver2Name="joram" driver2Number="12" driver2Flag="/nl.png" />
          <F1Team teamColor="#C92D4B" teamBackground="rgba(201, 45, 75, 0.2)" teamImage="/alfa-romeo.png" teamName="alfa romeo" driver1Name="dopichu" driver1Number="90" driver1Flag="/fi.png" driver2Name="tib" driver2Number="22" driver2Flag="/rs.png" />
          <F1Team teamColor="#B6BABD" teamBackground="rgba(182, 186, 189, 0.2)" teamImage="/haas.png" teamName="Haas" driver1Name="Luc" driver1Number="13" driver1Flag="/nl.png" driver2Name="DaVinky" driver2Number="54" driver2Flag="/nl.png" />
          </>
        }
    </div>
    </div>
    </>
  )
}
