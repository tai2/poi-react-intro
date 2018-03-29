import React from 'react'
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

function App(props) {
  return (
    <ul>
      {cats.map(cat => (
        <li key={cat.id}>
          <HelloMessage target={cat.name} />
        </li>
      ))}
    </ul>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
