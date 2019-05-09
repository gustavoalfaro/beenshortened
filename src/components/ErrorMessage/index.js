import React from 'react'

import './styles.sass'

function ErrorMessage({ message }) {
  return (
    <div className="errorMessage">
      { message }
      <div>Maybe you can try again</div>
    </div>
  )
}

export default ErrorMessage
