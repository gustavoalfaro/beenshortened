import React from 'react'

import ErrorMessage from 'components/ErrorMessage'

import './styles.sass'

function TopList({ loading, data, error }) {
  if (loading) return <div> Loading top 100</div>

  if (error) return <ErrorMessage message={error} />

  return (
    <ol>
      {data.top.map(shortLink => (
        <li key={shortLink.id}>
          <div className="listItem">
            <div className="title">
              <strong>Title:</strong> { shortLink.page_title ? shortLink.page_title : 'N/A' }
            </div>
            <div className="destinationLink">
              <strong>Destination:</strong> { shortLink.redirect_link }
            </div>
          </div>
        </li>
      ))}
    </ol>
  )
}

export default TopList
