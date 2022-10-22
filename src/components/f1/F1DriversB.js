import React from 'react'
import F1DriverStanding from './F1DriverStanding'
import '../../stylesheets/F1Standings.css'

export default function F1DriversB () {
  return (
    <div className="drivers-list-4">
      <div>
          <h5>Promotion To Tier A</h5>
        <hr className="standing-separator"></hr>
        </div>
        <F1DriverStanding teamBackground="rgba(249, 21, 54, 0.2)" teamImage="/ferrari.png" constructorName="Ferrari" driverName="Cheers" driverFlag="/de.png" driverPosition="1" driverPoints="196" />
        <F1DriverStanding teamBackground="rgba(108, 211, 191, 0.2)" teamImage="/mercedes.png" constructorName="Mercedes" driverName="Nydrow" driverFlag="/be.png" driverPosition="2" driverPoints="101" />
        <F1DriverStanding teamBackground="rgba(201, 45, 75, 0.2)" teamImage="/alfa-romeo.png" constructorName="Alfa Romeo" driverName="Daniel Bodnar" driverFlag="/sk.png" driverPosition="3" driverPoints="92" />
        <F1DriverStanding teamBackground="rgba(182, 186, 189, 0.2)" teamImage="/haas.png" constructorName="Haas" driverName="Luc" driverFlag="/nl.png" driverPosition="4" driverPoints="77" />
        <F1DriverStanding teamBackground="rgba(54, 113, 198, 0.2)" teamImage="/red-bull.png" constructorName="Red Bull" driverName="Arab" driverFlag="/us.png" driverPosition="5" driverPoints="70" />
        <hr className="standing-separator"></hr>
        <F1DriverStanding teamBackground="rgba(245, 128, 32, 0.2)" teamImage="/mclaren.png" constructorName="Mclaren" driverName="Brim" driverFlag="/nl.png" driverPosition="6" driverPoints="66" />
        <F1DriverStanding teamBackground="rgba(249, 21, 54, 0.2)" teamImage="/ferrari.png" constructorName="Ferrari" driverName="Veixel" driverFlag="/se.png" driverPosition="7" driverPoints="66" />
        <F1DriverStanding teamBackground="rgba(201, 45, 75, 0.2)" teamImage="/alfa-romeo.png" constructorName="Alfa Romeo" driverName="Philip" driverFlag="/nl.png" driverPosition="8" driverPoints="54" />
        <F1DriverStanding teamBackground="rgba(55, 190, 221, 0.2)" teamImage="/williams.png" constructorName="Williams" driverName="Uklucasw" driverFlag="/gb.png" driverPosition="9" driverPoints="49" />
        <F1DriverStanding teamBackground="rgba(54, 113, 198, 0.2)" teamImage="/red-bull.png" constructorName="Red Bull" driverName="Maxfan" driverFlag="/pl.png" driverPosition="10" driverPoints="46" />
        <F1DriverStanding teamBackground="rgba(108, 211, 191, 0.2)" teamImage="/mercedes.png" constructorName="Mercedes" driverName="Zerotix" driverFlag="/de.png" driverPosition="11" driverPoints="38" />
        <F1DriverStanding teamBackground="rgba(53, 140, 117, 0.2)" teamImage="/aston-martin.png" constructorName="Aston Martin" driverName="ARBITERELITEX" driverFlag="/it.png" driverPosition="12" driverPoints="25" />
        <F1DriverStanding teamBackground="rgba(94, 143, 170, 0.2)" teamImage="/alpha-tauri.png" constructorName="AlphaTauri" driverName="Br0wn" driverFlag="/de.png" driverPosition="13" driverPoints="16" />
        <F1DriverStanding teamBackground="rgba(245, 128, 32, 0.2)" teamImage="/mclaren.png" constructorName="Mclaren" driverName="Sp3xtre" driverFlag="/se.png" driverPosition="14" driverPoints="15" />
        <F1DriverStanding teamBackground="rgba(182, 186, 189, 0.2)" teamImage="/haas.png" constructorName="Haas" driverName="Melon" driverFlag="/ro.png" driverPosition="15" driverPoints="13" />
        <div>
          <h5>Proceed to qualifiers</h5>
        <hr className="standing-separator"></hr>
        </div>
        <F1DriverStanding teamBackground="rgba(34, 147, 209, 0.2)" teamImage="/alpine.png" constructorName="Alpine" driverName="Vade" driverFlag="/se.png" driverPosition="16" driverPoints="8" />
        <F1DriverStanding teamBackground="rgba(34, 147, 209, 0.2)" teamImage="/alpine.png" constructorName="Alpine" driverName="Andrew" driverFlag="/ro.png" driverPosition="17" driverPoints="8" />
        <F1DriverStanding teamBackground="rgba(94, 143, 170, 0.2)" teamImage="/alpha-tauri.png" constructorName="AlphaTauri" driverName="Rinky" driverFlag="/nl.png" driverPosition="18" driverPoints="4" />
        <F1DriverStanding teamBackground="rgba(55, 190, 221, 0.2)" teamImage="/williams.png" constructorName="Williams" driverName="Cesar2Wizard" driverFlag="/fr.png" driverPosition="19" driverPoints="0" />
        <F1DriverStanding teamBackground="rgba(53, 140, 117, 0.2)" teamImage="/aston-martin.png" constructorName="aston-martin" driverName="EZCAKEARDA" driverFlag="/be.png" driverPosition="20" driverPoints="0" />
        <hr className="standing-separator"></hr>
    </div>
  )
}
