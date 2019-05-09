// eslint-disable-next-line import/prefer-default-export
import { useState, useEffect } from 'react'
import axios from 'axios'

function useFetch(method, url, params) {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  function fetchData() {
    axios[method](url, params).then((response) => {
      setData(response.data)
      setLoading(false)
    }).catch((responseError) => {
      setError(responseError.response.data.error)
      setLoading(false)
    })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return { loading, data, error }
}

function getEndpointHost() {
  const { REACT_APP_API_PROTOCOL, REACT_APP_API_HOST, REACT_APP_API_PORT } = process.env
  const protocol = REACT_APP_API_PROTOCOL || ''
  const host = REACT_APP_API_HOST || ''
  const port = REACT_APP_API_PORT || ''

  return `${protocol}://${host}${port && `:${port}`}`
}

export { useFetch, getEndpointHost }
