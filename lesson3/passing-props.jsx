import React from 'react'
import ReactDOM from 'react-dom'

function HelloMessage(props) {
  return <p>Hello, {props.target}</p>
}

ReactDOM.render(<HelloMessage target="React!" />, document.getElementById('app'))
