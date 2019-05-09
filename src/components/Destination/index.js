import React from 'react'

import ErrorMessage from 'components/ErrorMessage'

import './styles.sass'

function Destination({ loading, data, error }) {
  if (loading) return <div> Requesting your destination URL</div>

  if (error) return <ErrorMessage message={error} />

  return (
    <div className="destination">
      <a href={data.redirectLink}>Click here to be redirected</a>
    </div>
  )
}

export default Destination
