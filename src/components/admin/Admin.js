import React, { useState } from 'react'
import '../../App.css'
import '../../stylesheets/Register.css'
import AdminDashboard from './AdminDashboard'
import Footer from '../Footer'
// import { Link } from 'react-router-dom'
import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
// import discordLogo from '../../svg/discord-logo.svg'
// import { useAuthState } from 'react-firebase-hooks/auth'
// import { useCollectionData } from 'react-firebase-hooks/firestore'
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth'

export default function Admin () {
  firebase.initializeApp({
    apiKey: 'AIzaSyDWWT0BU25eVsIguqTMyvr2EAQLM5aFRI8',
    authDomain: 'controls-2022.firebaseapp.com',
    projectId: 'controls-2022',
    storageBucket: 'controls-2022.appspot.com',
    messagingSenderId: '839231663678',
    appId: '1:839231663678:web:1ade4a5403d081372ceb6f'
  })

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [loggedIn, setLoggedIn] = useState(false)

  const auth = getAuth()

  const sendSubmission = async (e) => {
    e.preventDefault()
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user
        // ...
        console.log(user)
        setLoggedIn(true)
      })
      .catch((error) => {
        const errorCode = error.code
        const errorMessage = error.message
        console.log(errorCode, errorMessage)
      })
  }

  const handleClick = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      console.log('You signed out')
      setLoggedIn(false)
    }).catch((error) => {
      // An error happened.
      console.log(error.code, error.message)
    })
  }

  return (
    <div>
<div className="page-content">
{loggedIn
  ? <>
  <AdminDashboard />
  <button onClick={handleClick}>LogOut</button>
  </>
  : <div className="form-container">
<form onSubmit={sendSubmission}>
    <input
     value={email}
     onChange={(e) => setEmail(e.target.value)}
      placeholder="Email"
      type="email"
      id="email"
    />
    <input
    value={password}
    onChange={(e) => setPassword(e.target.value)}
      placeholder="Password"
      type="password"
      id="password"
    />
    <button className="submit-button" type="submit">
      Login
    </button>
  </form>
</div>
}

<Footer />
</div>
</div>
  )
}
