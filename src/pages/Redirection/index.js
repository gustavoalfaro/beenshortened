import React from 'react'
import PropTypes from 'prop-types'

import Destination from 'components/Destination'

import { useFetch, getEndpointHost } from 'utils'

import './styles.sass'

function Redirection({ match }) {
  const { params: { slug } } = match
  const { loading, data, error } = useFetch('get', `${getEndpointHost()}/api/v1/link_shortener/${slug}`)

  return (
    <div className="redirectionWrapper">
      <Destination loading={loading} data={data} error={error} />
    </div>
  )
}

Redirection.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({ slug: PropTypes.string }).isRequired,
  }).isRequired,
}


export default Redirection
