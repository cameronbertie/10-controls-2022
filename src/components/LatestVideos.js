import React from 'react'
import '../App.css'
import '../stylesheets/LatestVideos.css'

function LatestVideos () {
  return (
    <>
      <section className="video-container">
       <h3>Latest Highlights</h3>
       <br></br>
       <hr></hr>
       <br></br>
       <div className="selected-video-container">
       <iframe className="video-frame"
 src="https://www.youtube.com/embed/kir4hPeDBRg">
</iframe>
       <iframe className="video-frame"
 src="https://www.youtube.com/embed/maISP1lFtOQ">
</iframe>
       <iframe className="video-frame"
src="https://www.youtube.com/embed/RHNaiOMWHQM">
</iframe>
       </div>
</section>
</>
  )
}

export default LatestVideos
