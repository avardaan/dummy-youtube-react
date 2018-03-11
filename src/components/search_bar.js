import React from 'react'

// define new class and give it all the functionalty of React.Component
class SearchBar extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      term: ''
    }
  }

  render() {
    return (
      <div>
        <input
          value={this.state.term}
          onChange={this.onInputChange}
        />
      </div>
    )
  }

  onInputChange = (event) => {
    // when print event object, most values are null because of "event pooling"
    // something to do with asynchronous nature and performance optimization that I don't understand
    // event.target.value is the text inside input
    this.setState({ term: event.target.value })
  }

}

export default SearchBar
