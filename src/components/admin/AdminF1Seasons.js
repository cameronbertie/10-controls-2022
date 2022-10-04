import React, { useState } from 'react'
import '../../App.css'
import '../../stylesheets/Register.css'
// import { Link } from 'react-router-dom'
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
// import discordLogo from '../../svg/discord-logo.svg'
// import { useAuthState } from 'react-firebase-hooks/auth'
// import { useCollectionData } from 'react-firebase-hooks/firestore'

export default function AdminF1Seasons () {
  firebase.initializeApp({
    apiKey: 'AIzaSyDWWT0BU25eVsIguqTMyvr2EAQLM5aFRI8',
    authDomain: 'controls-2022.firebaseapp.com',
    projectId: 'controls-2022',
    storageBucket: 'controls-2022.appspot.com',
    messagingSenderId: '839231663678',
    appId: '1:839231663678:web:1ade4a5403d081372ceb6f'
  })

  // const auth = firebase.auth()
  const firestore = firebase.firestore()

  const [seasonNumber, setSeasonNumber] = useState('')
  const f1EntryRef = firestore.collection('f1Database').doc('test')
  const createSeason = async (e) => {
    e.preventDefault()

    if (f1EntryRef.collection(`Season ${seasonNumber}`).doc()) {
      console.log('already exists')
    } else {
      f1EntryRef.collection(`Season ${seasonNumber}`).doc().set({
        seasonNumber
      })
      console.log('data sent')
      setSeasonNumber('')
    }
  }

  return (
    <div className="page-content">
<p>Add Season</p>
<form onSubmit={createSeason}>
<input
  value={seasonNumber}
  onChange={(e) => setSeasonNumber(e.target.value)}
  placeholder="Season Number"
  type="number"
  min="1"
  required/>
  <button type="submit">Save</button>
  </form>

</div>

  )
}
