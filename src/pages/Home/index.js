import React from 'react'

import Input from '../../components/Input'
import './styles.sass'

function Home() {
  function onInputChange({ target }) {
    console.log(target.value)
  }

  return (
    <div className="home">
      The app here
      <Input name="shortening" placeholder="Paste or type you long URL" onChange={onInputChange} />
      <button type="button">Shorten</button>
    </div>
  )
}

export default Home
