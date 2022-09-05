import React from 'react'
import '../../App.css'
import '../../stylesheets/Register.css'
// import { Link } from 'react-router-dom'
// import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
// import discordLogo from '../../svg/discord-logo.svg'
// import { useAuthState } from 'react-firebase-hooks/auth'
// import { useCollectionData } from 'react-firebase-hooks/firestore'

export default function AdminF1 () {
  return (
    <div className="page-content">
<button>Add Season</button>
<button>Edit Season</button>
<button>Delete Season</button>
<br></br><br></br>
<button>Add Tier</button>
<button>Edit Tier</button>
<button>Delete Tier</button>
<br></br><br></br>
<button>Add Driver</button>
<button>Edit Driver</button>
<button>Delete Driver</button>
<br></br><br></br>
<button>Add Race</button>
<button>Edit Race</button>
<button>Delete Race</button>
<br></br><br></br>
<button>Add Race Results</button>
<button>Edit Race Results</button>
</div>

  )
}
