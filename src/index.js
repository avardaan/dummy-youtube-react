import React from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'
import VideoList from './components/video_list'
import SearchBar from './components/search_bar'
import VideoDetail from './components/video_detail'

import _ from 'lodash'

// google api key for youtube
const API_KEY = 'AIzaSyDDk7JB7WiWyx-0-E5xeqOiWXKzr8hswIQ'



class App extends React.Component {

  constructor(props) {
    super(props)
    // initialize state
    this.state = {
      videos: [],
      selectedVideo: null,

    }

    // make initial youtube search query
    this.videoSearch('lamborghini')
  }

  // update state to newly seelcted video
  onVideoSelect = (selectedVideo) => {
    this.setState({ selectedVideo })
  }

  // when click on search
  videoSearch = (term) => {
    // youtube search api call with user's typed search term
    YTSearch({ key: API_KEY, term: term }, (data) => {
      this.setState({
        videos: data,
        selectedVideo: data[0]
      })
    })
  }

  render() {
    // debounce takes the innter function, returns new function that can only be called once every X ms
    const videoSearch = _.debounce(this.videoSearch, 300)

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch}/>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={this.onVideoSelect}
          videos={this.state.videos}
        />
      </div>
    )
  }
}

// render function throws first argument i.e. App component into a container, i.e. the div container in index.html
ReactDOM.render(<App />, document.querySelector('.container'))
