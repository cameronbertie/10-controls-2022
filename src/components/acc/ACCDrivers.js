import React from 'react'
import '../../App.css'
import '../../stylesheets/ACCDrivers.css'
import ACCDriver from './ACCDriver'
import Footer from '../Footer'

export default function ACCDrivers () {
  return (
    <>
    <div className="page-content">
    <h1 className="page-content-heading" style={{ paddingBottom: '90px' }}>Drivers</h1>
    <div className="drivers-list">
          <ACCDriver carName="Mclaren 720s gt3" driver1Name="Counterfeit" driver1Number="271" driver1Flag="/gb.png" />
          <ACCDriver carName="Mclaren 720s gt3" driver1Name="C3z4r" driver1Number="4" driver1Flag="/ro.png" />
          <ACCDriver carName="honda nsx gt3" driver1Name="Henry" driver1Number="92" driver1Flag="/us.png" />
          <ACCDriver carName="Mclaren 720s gt3" driver1Name="Goos" driver1Number="13" driver1Flag="/ua.png" />
          <ACCDriver carName="honda nsx gt3" driver1Name="Focuser" driver1Number="22" driver1Flag="/es.png" />
          <ACCDriver carName="honda nsx gt3" driver1Name="Kinoko" driver1Number="22" driver1Flag="/nl.png" />
          <ACCDriver carName="mercedes-amg gt3 evo" driver1Name="Mute" driver1Number="88" driver1Flag="/ng.png" />
          <ACCDriver carName="audi r8 lms gt3 evo" driver1Name="Veixel" driver1Number="23" driver1Flag="/se.png" />
          <ACCDriver carName="mercedes amg gt3 evo" driver1Name="Flores" driver1Number="11" driver1Flag="/gb.png" />
          <ACCDriver carName="bmw m4 gt3" driver1Name="Kmench" driver1Number="5" driver1Flag="/ua.png" />
          <ACCDriver carName="bmw m4 gt3" driver1Name="ChaseM" driver1Number="4" driver1Flag="/us.png" />
          <ACCDriver carName="audi r8 lms evo 2" driver1Name="Cheers/Maurice" driver1Number="94" driver1Flag="/de.png" />
          <ACCDriver carName="mclaren 720s gt3" driver1Name="Flaw" driver1Number="70" driver1Flag="/nl.png" />
          <ACCDriver carName="audi r8 lms evo 1" driver1Name="Sipi" driver1Number="23" driver1Flag="/nl.png" />
          <ACCDriver carName="audi r8 lms evo 2" driver1Name="Kai" driver1Number="" driver1Flag="/gb.png" />
          <ACCDriver carName="aston martin vantage v8" driver1Name="Mike Ehrmantraut" driver1Number="78" driver1Flag="/gb.png" />
          <ACCDriver carName="audi r8 lms evo 2" driver1Name="Countmuttly" driver1Number="14" driver1Flag="/dk.png" />
    </div>
    <Footer />
    </div>
    </>
  )
}
