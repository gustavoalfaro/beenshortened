import React, { useState } from 'react'
import axios from 'axios'

import Input from 'components/Input'
import { getEndpointHost } from 'utils'

import './styles.sass'

function Home() {
  const [link, setLink] = useState('')
  const [shortLink, setShortLink] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(true)

  function onInputChange({ target }) {
    setLink(target.value)
  }

  function onShortenClick() {
    axios.post(`${getEndpointHost()}/api/v1/link_shortener/`, { url: link }).then((response) => {
      setShortLink(response.data.shortLink)
      setLoading(false)
    }).catch((responseError) => {
      setError(responseError)
      setLoading(false)
    })

    console.log(error, loading)
  }

  return (
    <div className="home">
      The ultimate shortening app
      <Input name="link" placeholder="Paste or type you long URL" onChange={onInputChange} />
      <button type="button" onClick={onShortenClick}>Shorten</button>
      { shortLink && <div>The short URL is: {window.location.origin}/{shortLink}</div> }
      <br />
      <br />
      See top 100 visited URLs: <a href="/top">here</a>
    </div>
  )
}

export default Home
