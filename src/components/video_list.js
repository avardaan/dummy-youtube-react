import React from 'react'
import VideoListItem from './video_list_item'

const VideoList = (props) => {

  // map over array of video information
  // videoItems is an array with each element being a piece of JSX
  // which we will render as is, React can take care of making it show as a list
  const videoItems = props.videos.map((video) => {
    // we pass key prop to list so that react can quickly grab individual items to update
    // instead of updating the entire list
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        video={video}
        key={video.etag}
      />
    )
  })

  return (
    <ul className="col-md-4 list-group">
      {videoItems}
    </ul>
  )
}

export default VideoList
