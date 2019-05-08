import React from 'react'

function TopList({ loading, data, error }) {
  if (loading) return <div> Loading top</div>

  if (error) return <div> Something went wrong requesting the top 100</div>

  return data.top.map(shortLink => (
    <div key={shortLink.id}>
      <div>Title: { shortLink.page_title }</div>
      <div>Destination Link: { shortLink.redirect_link }</div>
    </div>
  ))
}

export default TopList
