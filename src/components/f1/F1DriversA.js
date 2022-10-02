import React from 'react'
import F1DriverStanding from './F1DriverStanding'
import '../../stylesheets/F1Standings.css'

export default function F1DriversA () {
  return (
    <div className="drivers-list-4">
        <F1DriverStanding teamColor="#F91536" teamBackground="rgba(34, 147, 209, 0.2)" teamImage="/alpine.png" constructorName="Alpine" driverName="Nik Kei" driverFlag="/ua.png" driverPosition="1" driverPoints="94" />
        <F1DriverStanding teamColor="#F91536" teamBackground="rgba(55, 190, 221, 0.2)" teamImage="/williams.png" constructorName="Williams" driverName="Kalcess" driverFlag="/no.png" driverPosition="2" driverPoints="91" />
        <F1DriverStanding teamColor="#F91536" teamBackground="rgba(54, 113, 198, 0.2)" teamImage="/red-bull.png" constructorName="Red Bull" driverName="ThomasVink" driverFlag="/nl.png" driverPosition="3" driverPoints="87" />
        <F1DriverStanding teamColor="#F91536" teamBackground="rgba(201, 45, 75, 0.2)" teamImage="/alfa-romeo.png" constructorName="Alfa Romeo" driverName="Focuser" driverFlag="/es.png" driverPosition="4" driverPoints="71" />
        <F1DriverStanding teamColor="#F91536" teamBackground="rgba(249, 21, 54, 0.2)" teamImage="/ferrari.png" constructorName="Ferrari" driverName="Cortes" driverFlag="/es.png" driverPosition="5" driverPoints="69" />
        <F1DriverStanding teamColor="#F91536" teamBackground="rgba(249, 21, 54, 0.2)" teamImage="/ferrari.png" constructorName="Ferrari" driverName="Newman" driverFlag="/it.png" driverPosition="6" driverPoints="68" />
        <F1DriverStanding teamColor="#F91536" teamBackground="rgba(53, 140, 117, 0.2)" teamImage="/aston-martin.png" constructorName="Aston Martin" driverName="Luca" driverFlag="/gb.png" driverPosition="7" driverPoints="54" />
        <F1DriverStanding teamColor="#F91536" teamBackground="rgba(34, 147, 209, 0.2)" teamImage="/alpine.png" constructorName="Alpine" driverName="Faded" driverFlag="/us.png" driverPosition="8" driverPoints="46" />
        <F1DriverStanding teamColor="#F91536" teamBackground="rgba(245, 128, 32, 0.2)" teamImage="/mclaren.png" constructorName="Mclaren" driverName="Kudos" driverFlag="/de.png" driverPosition="9" driverPoints="45" />
        <F1DriverStanding teamColor="#F91536" teamBackground="rgba(53, 140, 117, 0.2)" teamImage="/aston-martin.png" constructorName="Aston Martin" driverName="Counterfeit" driverFlag="/gb.png" driverPosition="10" driverPoints="45" />
        <F1DriverStanding teamColor="#F91536" teamBackground="rgba(182, 186, 189, 0.2)" teamImage="/haas.png" constructorName="Haas" driverName="Flaw" driverFlag="/nl.png" driverPosition="11" driverPoints="34" />
        <F1DriverStanding teamColor="#F91536" teamBackground="rgba(182, 186, 189, 0.2)" teamImage="/haas.png" constructorName="Haas" driverName="AnOldEnemy" driverFlag="/hr.png" driverPosition="12" driverPoints="34" />
        <F1DriverStanding teamColor="#F91536" teamBackground="rgba(32, 32, 32,  0.2)" teamImage="/red-bull.png" constructorName="Red Bull" driverName="Hailee (Out)" driverFlag="/nl.png" driverPosition="13" driverPoints="22" />
        <F1DriverStanding teamColor="#F91536" teamBackground="rgba(94, 143, 170, 0.2)" teamImage="/alpha-tauri.png" constructorName="AlphaTauri" driverName="Jaysen" driverFlag="/nl.png" driverPosition="14" driverPoints="20" />
        <F1DriverStanding teamColor="#F91536" teamBackground="rgba(245, 128, 32, 0.2)" teamImage="/mclaren.png" constructorName="Mclaren" driverName="iM3j3n" driverFlag="/de.png" driverPosition="15" driverPoints="16" />
        <div>
        <h5>Demotion to tier b</h5>
        <hr className="standing-separator"></hr>
        </div>
        <F1DriverStanding teamColor="#F91536" teamBackground="rgba(201, 45, 75, 0.2)" teamImage="/alfa-romeo.png" constructorName="Alfa Romeo" driverName="CountMuttly" driverFlag="/dk.png" driverPosition="16" driverPoints="13" />
        <F1DriverStanding teamColor="#F91536" teamBackground="rgba(32, 32, 32, 0.2)" teamImage="/mercedes.png" constructorName="Mercedes" driverName="Mute (OUT)" driverFlag="/ng.png" driverPosition="17" driverPoints="7" />
        <F1DriverStanding teamColor="#F91536" teamBackground="rgba(32, 32, 32, 0.2)" teamImage="/mercedes.png" constructorName="Mercedes" driverName="Eddyworth (OUT)" driverFlag="/fr.png" driverPosition="18" driverPoints="6" />
        <F1DriverStanding teamColor="#F91536" teamBackground="rgba(55, 190, 221, 0.2)" teamImage="/williams.png" constructorName="Williams" driverName="LawrenceSelling" driverFlag="/ph.png" driverPosition="19" driverPoints="2" />
        <F1DriverStanding teamColor="#F91536" teamBackground="rgba(94, 143, 170, 0.2)" teamImage="/alpha-tauri.png" constructorName="AlphaTauri" driverName="Kyan" driverFlag="/nl.png" driverPosition="20" driverPoints="0" />
        <hr className="standing-separator"></hr>
    </div>
  )
}
