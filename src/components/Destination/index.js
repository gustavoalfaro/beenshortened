import React from 'react'

function Destination({ loading, data, error }) {
  if (loading) return <div> Requesting your destination URL</div>

  if (error) return <div> Your URL was not found</div>

  return (
    <div>
      <a href={data.redirectLink}>Click here to be redirected</a>
    </div>
  )
}

export default Destination
