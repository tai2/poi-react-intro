import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      checked: false,
    }
  }
  render() {
    return (
      <div>
        <label>
          Reactがわかってきた<input
            type="checkbox"
            onChange={event => this.setState({ checked: event.target.checked })}
          />
        </label>
        <br />
        {this.state.checked ? (
          <img src="https://media.giphy.com/media/11ISwbgCxEzMyY/giphy.gif" />
        ) : (
          <p>Reactやっていきましょう</p>
        )}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
