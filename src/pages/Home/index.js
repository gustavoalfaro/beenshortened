import React, { useState } from 'react'
import axios from 'axios'

import Input from 'components/Input'
import ShortLink from 'components/ShortLink'
import { getEndpointHost } from 'utils'

import './styles.sass'

function Home() {
  const [link, setLink] = useState('')
  const [shortLink, setShortLink] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(null)

  function onInputChange({ target }) {
    setLink(target.value)
  }

  function onShortenClick() {
    if (link) {
      setLoading(true)
      axios.post(`${getEndpointHost()}/api/v1/link_shortener/`, { url: link }).then((response) => {
        setShortLink(response.data.shortLink)
        setLoading(false)
      }).catch((shorteningError) => {
        setError(shorteningError.response.data.error)
        setLoading(false)
      })
    }
  }

  return (
    <div className="home">
      <h2 className="slogan">The Ultimate Shortening App</h2>
      <Input name="link" placeholder="Paste or type you long URL" onChange={onInputChange} />
      <button className="shortenButton" type="button" onClick={onShortenClick}>Shorten</button>
      <ShortLink shortLink={shortLink} loading={loading} error={error} />
      <div className="topLink">
        <a href="/top">See top 100 visited URLs here</a>
      </div>
    </div>
  )
}

export default Home
