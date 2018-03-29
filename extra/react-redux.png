import React, { Component } from 'react'
import ReactDOM from 'react-dom'

function PersonForm({ onNameChange, onAddressChange }) {
  return (
    <form>
      <label>
        氏名: <input type="text" onChange={onNameChange} />
      </label>
      <label>
        住所: <input type="text" onChange={onAddressChange} />
      </label>
    </form>
  )
}

function PersonInfo({ name, address }) {
  const tableStyle = {
    borderCollapse: 'collapse',
  }
  const cellStyle = {
    border: 'solid black 1px',
    height: '1rem',
    padding: '0.3rem',
  }
  return (
    <table style={tableStyle}>
      <thead>
        <tr>
          <th style={cellStyle}>氏名</th>
          <th style={cellStyle}>住所</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td style={cellStyle}>{name}</td>
          <td style={cellStyle}>{address}</td>
        </tr>
      </tbody>
    </table>
  )
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      address: '',
    }
  }
  handleNameChange = ev => {
    this.setState({ name: ev.target.value })
  }
  handleAddressChange = ev => {
    this.setState({ address: ev.target.value })
  }
  render() {
    return (
      <div>
        <PersonForm
          onNameChange={this.handleNameChange}
          onAddressChange={this.handleAddressChange}
        />
        <hr />
        <PersonInfo name={this.state.name} address={this.state.address} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'))
