import React from 'react'
import ReactDOM from 'react-dom'

function WrappingBlock(props) {
  const style = {
    padding: '1rem',
    background: 'linear-gradient(#e66465, #9198e5)',
  }
  return <div style={style}>{props.children}</div>
}

ReactDOM.render(
  <WrappingBlock>
    <p>囲まれたテキスト</p>
  </WrappingBlock>,
  document.getElementById('app')
)
