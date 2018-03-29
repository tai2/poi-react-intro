import React from 'react'
import ReactDOM from 'react-dom'

function App() {
  return (
    <div>
      <button onClick={() => console.log('button clicked.')}>ボタン</button>

      <hr />

      <label>
        テキストボックス
        <input
          type="text"
          onChange={event =>
            console.log('text changed. value =', event.target.value)
          }
        />
      </label>

      <hr />

      <label>
        セレクトボックス
        <select
          onChange={event =>
            console.log('select changed. value =', event.target.value)
          }
        >
          <option value="A">選択肢A</option>
          <option value="B">選択肢B</option>
          <option value="C">選択肢C</option>
        </select>
      </label>

      <hr />

      <label>
        ラジオボタンA
        <input
          type="radio"
          name="radioButton"
          value="A"
          onChange={event =>
            console.log('radio button clicked. value =', event.target.value)
          }
        />
      </label>
      <label>
        ラジオボタンB
        <input
          type="radio"
          name="radioButton"
          value="B"
          onChange={event =>
            console.log('radio button clicked. value =', event.target.value)
          }
        />
      </label>
      <label>
        ラジオボタンC
        <input
          type="radio"
          name="radioButton"
          value="C"
          onChange={event =>
            console.log('radio button clicked. value =', event.target.value)
          }
        />
      </label>

      <hr />

      <label>
        チェックボックス
        <input
          type="checkbox"
          onChange={event =>
            console.log('checkbox changed. value =', event.target.checked)
          }
        />
      </label>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
