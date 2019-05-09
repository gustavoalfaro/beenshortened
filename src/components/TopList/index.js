import React from 'react'

import ErrorMessage from 'components/ErrorMessage'

import './styles.sass'

function TopList({ loading, data, error }) {
  if (loading) return <div> Loading top 100</div>

  if (error) return <ErrorMessage message={error} />

  return data.top.map(shortLink => (
    <div key={shortLink.id} className="listItem">
      <div>Title: { shortLink.page_title ? shortLink.page_title : 'N/A' }</div>
      <div>Destination Link: { shortLink.redirect_link }</div>
    </div>
  ))
}

export default TopList
