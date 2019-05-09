import React from 'react'

import ErrorMessage from 'components/ErrorMessage'

import './styles.sass'

function ShortLink({ loading, shortLink, error }) {
  if (loading === null) return null

  if (loading) return <div> Creating the short url for you</div>

  if (error) return <ErrorMessage message={error} />

  return <div>The short URL is: {window.location.origin}/{shortLink}</div>
}

export default ShortLink
