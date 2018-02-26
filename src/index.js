import React from 'react'
import ReactDOM from 'react-dom'

// component/function that returns JSX which is then transpiled to JS/HTML understood by the browser
const App = () => {
  return <div>
    Hi
  </div>
}

// render function throws first argument i.e. App component into a container, i.e. the div container in index.html
ReactDOM.render(<App />, document.querySelector('.container'))
