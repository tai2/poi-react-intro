import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import { Provider, connect } from 'react-redux'

const CHANGE_NAME = 'CHANGE_NAME'
const CHANGE_ADDRESS = 'CHANGE_ADDRESS'

function createChangeName(name) {
  return {
    type: CHANGE_NAME,
    payload: {
      name,
    },
  }
}

function createChangeAddress(address) {
  return {
    type: CHANGE_ADDRESS,
    payload: {
      address,
    },
  }
}

const initialState = {
  name: '',
  address: '',
}

function reducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_NAME:
      return {
        ...state,
        name: action.payload.name,
      }
    case CHANGE_ADDRESS:
      return {
        ...state,
        address: action.payload.address,
      }
    default:
      return state
  }
}

function PersonForm({ onNameChange, onAddressChange }) {
  return (
    <form>
      <label>
        指名: <input type="text" onChange={onNameChange} />
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

function mapStateToProps(state) {
  return {
    name: state.name,
    address: state.address,
  }
}
const PersonInfoHoc = connect(mapStateToProps, null)(PersonInfo)

function mapDispatchToProps(dispatch) {
  return {
    onNameChange: event => dispatch(createChangeName(event.target.value)),
    onAddressChange: event => dispatch(createChangeAddress(event.target.value)),
  }
}
const PersonFormHoc = connect(null, mapDispatchToProps)(PersonForm)

function App() {
  return (
    <div>
      <PersonFormHoc />
      <hr />
      <PersonInfoHoc />
    </div>
  )
}

const store = createStore(reducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
