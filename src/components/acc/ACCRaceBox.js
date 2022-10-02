import React from 'react'
import '../../App.css'
import '../../stylesheets/F1RaceBox.css'
import PropTypes from 'prop-types'
import dayjs from 'dayjs'
import advancedFormat from 'dayjs/plugin/advancedFormat'
import { Link } from 'react-router-dom'

dayjs.extend(advancedFormat)

export default function ACCRaceBox (props) {
  const dayObject = dayjs(props.raceDate)
  const dayString = dayObject.format('D')
  const ordinalDay = dayObject.format('Do').slice(-2)
  const dateString = dayObject.format('MMMM YYYY')
  return (
    <div className="race-box-container" style={{ backgroundImage: `linear-gradient(180deg, rgba(0,0,0,0.8015581232492998) 0%, rgba(0,0,0,0.8015581232492998) 100%), url(${props.raceFlag})` }}>
      <div className="race-box-content">
      <div className="race-box-date">Round {props.raceRound}</div>
        <div className="race-box-title">{props.raceName}</div>
        <br></br>
        <div className="race-box-date">{dayString}<sup>{ordinalDay}</sup> {dateString}</div>
        <div className="race-box-date">Race Starts at 19:30 BST</div>
        <div className="race-box-button-container">
          <Link to="/acc/register"><button className="race-box-button">Register Now</button></Link>
        </div>
      </div>
    </div>
  )
}

ACCRaceBox.propTypes = {
  raceName: PropTypes.string.isRequired,
  raceDate: PropTypes.number.isRequired,
  raceFlag: PropTypes.string.isRequired,
  raceRound: PropTypes.string.isRequired
}
