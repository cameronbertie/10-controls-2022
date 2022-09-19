import React from 'react'
import F1DriverStanding from './F1DriverStanding'
import '../../stylesheets/F1Standings.css'

export default function F1DriversC () {
  return (
    <div className="drivers-list-4">
      <div>
          <h5>Promotion To Tier B</h5>
        <hr className="standing-separator"></hr>
        </div>
        <F1DriverStanding teamBackground="rgba(182, 186, 189, 0.2)" teamImage="/haas.png" constructorName="Haas" driverName="geetype" driverFlag="/se.png" driverPosition="1" driverPoints="26" />
        <F1DriverStanding teamBackground="rgba(249, 21, 54, 0.2)" teamImage="/ferrari.png" constructorName="Ferrari" driverName="Las Gamer" driverFlag="/it.png" driverPosition="2" driverPoints="16" />
        <F1DriverStanding teamBackground="rgba(54, 113, 198, 0.2)" teamImage="/red-bull.png" constructorName="Red Bull" driverName="Egamer" driverFlag="/gb.png" driverPosition="3" driverPoints="13" />
        <F1DriverStanding teamBackground="rgba(55, 190, 221, 0.2)" teamImage="/williams.png" constructorName="Williams" driverName="Saad" driverFlag="/sa.png" driverPosition="4" driverPoints="10" />
        <F1DriverStanding teamBackground="rgba(182, 186, 189, 0.2)" teamImage="/haas.png" constructorName="Haas" driverName="traumatized" driverFlag="/it.png" driverPosition="5" driverPoints="9" />
        <hr className="standing-separator"></hr>
        <F1DriverStanding teamBackground="rgba(53, 140, 117, 0.2)" teamImage="/aston-martin.png" constructorName="Aston Martin" driverName="kaiba" driverFlag="/eg.png" driverPosition="6" driverPoints="6" />
        <F1DriverStanding teamBackground="rgba(108, 211, 191, 0.2)" teamImage="/mercedes.png" constructorName="Mercedes" driverName="Pablo Mothiba" driverFlag="/be.png" driverPosition="7" driverPoints="5" />
        <F1DriverStanding teamBackground="rgba(53, 140, 117, 0.2)" teamImage="/aston-martin.png" constructorName="aston-martin" driverName="Steen" driverFlag="/nl.png" driverPosition="8" driverPoints="4" />
        <F1DriverStanding teamBackground="rgba(249, 21, 54, 0.2)" teamImage="/ferrari.png" constructorName="Ferrari" driverName="ZaceFace" driverFlag="/gb.png" driverPosition="9" driverPoints="4" />
        <F1DriverStanding teamBackground="rgba(245, 128, 32, 0.2)" teamImage="/mclaren.png" constructorName="Mclaren" driverName="Runkeri" driverFlag="/fi.png" driverPosition="10" driverPoints="3" />
        <F1DriverStanding teamBackground="rgba(245, 128, 32, 0.2)" teamImage="/mclaren.png" constructorName="Mclaren" driverName="Guri" driverFlag="/br.png" driverPosition="11" driverPoints="2" />
        <F1DriverStanding teamBackground="rgba(55, 190, 221, 0.2)" teamImage="/williams.png" constructorName="Williams" driverName="Myron" driverFlag="/ua.png" driverPosition="12" driverPoints="0" />
        <F1DriverStanding teamBackground="rgba(34, 147, 209, 0.2)" teamImage="/alpine.png" constructorName="Alpine" driverName="Rob" driverFlag="/us.png" driverPosition="13" driverPoints="0" />
        <F1DriverStanding teamBackground="rgba(108, 211, 191, 0.2)" teamImage="/mercedes.png" constructorName="Mercedes" driverName="Zbey" driverFlag="/be.png" driverPosition="14" driverPoints="0" />
        <F1DriverStanding teamBackground="rgba(94, 143, 170, 0.2)" teamImage="/alpha-tauri.png" constructorName="AlphaTauri" driverName="Sheezies" driverFlag="/nl.png" driverPosition="15" driverPoints="0" />
        <F1DriverStanding teamBackground="rgba(94, 143, 170, 0.2)" teamImage="/alpha-tauri.png" constructorName="AlphaTauri" driverName="ghcbt" driverFlag="/za.png" driverPosition="16" driverPoints="0" />
        <F1DriverStanding teamBackground="rgba(34, 147, 209, 0.2)" teamImage="/alpine.png" constructorName="Alpine" driverName="Diglett" driverFlag="/br.png" driverPosition="17" driverPoints="0" />
        <F1DriverStanding teamBackground="rgba(54, 113, 198, 0.2)" teamImage="/red-bull.png" constructorName="Red Bull" driverName="Liscuri" driverFlag="/nl.png" driverPosition="18" driverPoints="0" />
        <F1DriverStanding teamBackground="rgba(201, 45, 75, 0.2)" teamImage="/alfa-romeo.png" constructorName="Alfa Romeo" driverName="SP3XTRE" driverFlag="/se.png" driverPosition="19" driverPoints="0" />
        <F1DriverStanding teamBackground="rgba(201, 45, 75, 0.2)" teamImage="/alfa-romeo.png" constructorName="Alfa Romeo" driverName="ElderArcher" driverFlag="/mx.png" driverPosition="20" driverPoints="0" />
    </div>
  )
}
