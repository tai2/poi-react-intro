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
    let variableElement
    if (this.state.checked) {
      variableElement = (
        <img src="https://media.giphy.com/media/11ISwbgCxEzMyY/giphy.gif" />
      )
    } else {
      variableElement = <p>Reactやっていきましょう</p>
    }

    return (
      <div>
        <label>
          Reactがわかってきた<input
            type="checkbox"
            onChange={event => this.setState({ checked: event.target.checked })}
          />
        </label>
        <br />
        {variableElement}
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
