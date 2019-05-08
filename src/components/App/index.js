import React from 'react'

import Input from '../Input'
import './styles.sass'

function App() {
  function onInputChange({ target }) {
    console.log(target.value)
  }

  return (
    <div className="app">
      The app here
      <Input name="shortening" placeholder="Paste or type you long URL" onChange={onInputChange} />
      <button type="button">Shorten</button>
    </div>
  )
}

export default App
