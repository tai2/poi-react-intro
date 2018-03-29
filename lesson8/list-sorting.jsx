import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const cats = [
  { id: 1, name: 'mee' },
  { id: 2, name: 'gomoku' },
  { id: 3, name: 'tama' },
  { id: 4, name: 'mike' },
  { id: 5, name: 'mikael' },
]

function HelloMessage(props) {
  return <p>Hello, {props.target}</p>
}

function cmpAsc(a, b) {
  if (a < b) {
    return -1
  }

  if (a > b) {
    return 1
  }

  return 0
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      asc: true,
    }
  }
  render() {
    const catsCopy = [...cats]
    const cmpSign = this.state.asc ? 1 : -1
    return (
      <div>
        <label>
          昇順<input
            type="checkbox"
            checked={this.state.asc}
            onChange={event => this.setState({ asc: event.target.checked })}
          />
        </label>
        <ul>
          {catsCopy
            .sort((a, b) => cmpSign * cmpAsc(a.name, b.name))
            .map((cat, index) => (
              <li key={index}>
                <HelloMessage target={cat.name} />
              </li>
            ))}
        </ul>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
