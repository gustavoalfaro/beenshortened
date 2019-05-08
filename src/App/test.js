import React from 'react'
import ReactDOM from 'react-dom'
import App from '.'

describe('App', () => {
  it('renders properly', () => {
    const div = document.createElement('div')
    ReactDOM.render(<App />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})
