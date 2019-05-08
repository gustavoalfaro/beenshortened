import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

import './styles.sass'

function TargetLink({ match }) {
  const [data, setData] = useState({ redirect_link: '' })
  const { params: { slug } } = match
  const fetchTargetLink = async () => {
    const result = await axios(`http://localhost:3031/api/v1/link_shortener/${slug}`)

    setData(result.data)
  }

  useEffect(() => {
    fetchTargetLink()
  }, [])

  return (
    <div>
      <a href={data.redirect_link}>Click here to be redirected</a>
    </div>
  )
}

TargetLink.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({ slug: PropTypes.string }).isRequired,
  }).isRequired,
}


export default TargetLink
