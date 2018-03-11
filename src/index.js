import React from 'react'
import ReactDOM from 'react-dom'
import YTSearch from 'youtube-api-search'
import VideoList from './components/video_list'
import SearchBar from './components/search_bar'

// google api key for youtube
const API_KEY = 'AIzaSyDDk7JB7WiWyx-0-E5xeqOiWXKzr8hswIQ'



class App extends React.Component {

  constructor(props) {
    super(props)
    // initialize state
    this.state = { videos: [] }

    // make youtube search query
    YTSearch({ key: API_KEY, term: 'surfboards' }, (data) => {
      this.setState({ videos: data })
    })
  }

  render() {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    )
  }
}

// render function throws first argument i.e. App component into a container, i.e. the div container in index.html
ReactDOM.render(<App />, document.querySelector('.container'))
