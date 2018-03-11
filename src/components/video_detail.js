import React, { Component } from 'react';

const VideoDetail = (props) => {

  if (!props.video) {
    return <div> Loading... </div>
  }

  // grab info
  const { snippet } = props.video
  const videoId = props.video.id.videoId
  const url = `https://www.youtube.com/embed/${videoId}`

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url} />
      </div>

      <div className="details">
        <div> {snippet.title} </div>
        <div> {snippet.description} </div>
      </div>
    </div>
  )
}

export default VideoDetail
