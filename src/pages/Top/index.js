import React from 'react'

import TopList from 'components/TopList'
import { useFetch, getEndpointHost } from 'utils'

import './styles.sass'

function Top() {
  const { loading, data, error } = useFetch('get', `${getEndpointHost()}/api/v1/link_shortener/top`)

  return (
    <div className="topHundredWrapper">
      <div className="topTitle"> Top 100 most visited URLs</div>
      <TopList loading={loading} data={data} error={error} />
    </div>
  )
}

export default Top
