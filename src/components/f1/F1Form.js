/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import '../../App.css'
import '../../stylesheets/Register.css'

import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import discordLogo from '../../svg/discord-logo.svg'

import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'

export default function F1Form () {
  firebase.initializeApp({
    apiKey: 'AIzaSyDWWT0BU25eVsIguqTMyvr2EAQLM5aFRI8',
    authDomain: 'controls-2022.firebaseapp.com',
    projectId: 'controls-2022',
    storageBucket: 'controls-2022.appspot.com',
    messagingSenderId: '839231663678',
    appId: '1:839231663678:web:1ade4a5403d081372ceb6f'
  })

  const auth = firebase.auth()
  const firestore = firebase.firestore()

  const f1EntryRef = firestore.collection('f1-entry')

  const [name, setName] = useState('')
  const [platform, setPlatform] = useState('')
  const [discordTag, setDiscordTag] = useState('')
  const [preferredDriverNumber, setPreferredDriverNumber] = useState('')
  const [nationality, setNationality] = useState('')

  const [showConfirmation, setShowConfirmation] = useState(false)

  const sendSubmission = async (e) => {
    e.preventDefault()
    await f1EntryRef.add({
      name,
      platform,
      discord_tag: discordTag,
      preferred_driver_number: preferredDriverNumber,
      nationality
    })

    setName('')
    setPlatform('')
    setDiscordTag('')
    setPreferredDriverNumber('')
    setNationality('')

    setShowConfirmation(true)
  }
  return (
    <>
      <div className="form-container">
        <div className="form-heading-container">
          <h3 className="form-step">Step 1. Fill out the form</h3>
          <h4 className="form-step-description">
            To get a reserve spot for racing
          </h4>
        </div>
        <div>
        {showConfirmation === false
          ? <form onSubmit={sendSubmission}>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Player ID"
            required
          />
          <img src="/f1-game-name.jpg"/>
          <input
            value={platform}
            onChange={(e) => setPlatform(e.target.value)}
            placeholder="Platform"
            required
          />
          <input
            value={discordTag}
            onChange={(e) => setDiscordTag(e.target.value)}
            placeholder="Discord tag"
            required
          />
          <input
            value={preferredDriverNumber}
            onChange={(e) => setPreferredDriverNumber(e.target.value)}
            placeholder="preferred driver number"
            required
          />
          <input
            value={nationality}
            onChange={(e) => setNationality(e.target.value)}
            placeholder="nationality"
            required
          />
          <button className="submit-button" type="submit">
            Submit
          </button>
        </form>
          : <p className="confirmation-message">Thank you for registering. Make sure you join our discord server to complete your registration.</p>
        }
        </div>
      </div>
      <div className="form-container">
        <div className="form-heading-container">
          <h3 className="form-step">Step 2. Join our discord server</h3>
          <h4 className="form-step-description">
            To confirm your registration and be eligible for racing
          </h4>
        </div>
        <div className="discord-info-container">
            <img
              className="discord-logo-reg"
              src={discordLogo}
              alt="Discord Logo"
            />
          <div className="discord-content-container">
            <h3>10 Controls Community</h3>
            <a href="https://discord.gg/jKeXr7mcv5" target="_blank" rel="noreferrer"><button className="discord-join-button">Join</button></a>
          </div>
        </div>
      </div>
    </>
  )
}
