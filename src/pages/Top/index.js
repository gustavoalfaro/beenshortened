import React, { useState, useEffect } from 'react'
import axios from 'axios'

import './styles.sass'

function Top() {
  const [data, setData] = useState({ top: [] })
  const fetchTopLinks = async () => {
    const result = await axios('http://localhost:3031/api/v1/link_shortener/top')

    setData(result.data)
  }

  useEffect(() => {
    fetchTopLinks()
  }, [])

  return (
    <div>
      <div> Top 100 most visited URLs</div>
      <div>
        { data.top.map(shortLink => (
          <div key={shortLink.id}>
            <div>Title: { shortLink.page_title }</div>
            <div>Destination Link: { shortLink.redirect_link }</div>
          </div>
        )) }
      </div>
    </div>
  )
}

export default Top
