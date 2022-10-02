import React from 'react'
import '../App.css'
import '../stylesheets/LatestVideos.css'

function LatestVideos () {
  return (
    <>
      <section className="video-container">
       <h3>Top Highlights</h3>
       <br></br>
       <hr></hr>
       <br></br>
       <div className="selected-video-container">
       <iframe className="video-frame"
 src="https://www.youtube.com/embed/nh6SaPSJByY" >
</iframe>
       <iframe className="video-frame"
 src="https://www.youtube.com/embed/gmJ15BhNsd8">

</iframe>
       <iframe className="video-frame"
 src="https://www.youtube.com/embed/Cu7v0aCxCOQ">
</iframe>
       </div>
</section>
</>
  )
}

export default LatestVideos
