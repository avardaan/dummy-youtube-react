import React from 'react'
import ReactDOM from 'react-dom'

import SearchBar from './components/search_bar'

// google api key for youtube
const API_KEY = 'AIzaSyDDk7JB7WiWyx-0-E5xeqOiWXKzr8hswIQ'

// component/function that returns JSX which is then transpiled to JS/HTML understood by the browser
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  )
}

// render function throws first argument i.e. App component into a container, i.e. the div container in index.html
ReactDOM.render(<App />, document.querySelector('.container'))
