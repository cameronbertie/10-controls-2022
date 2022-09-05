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
 src="https://www.youtube.com/embed/s_xJ5oR-8pY">
</iframe>
       <iframe className="video-frame"
 src="https://www.youtube.com/embed/gmJ15BhNsd8">
</iframe>
       <iframe className="video-frame"
src="https://www.youtube.com/embed/ITlNwXjxYD0">
</iframe>

       </div>
</section>
</>
  )
}

export default LatestVideos
