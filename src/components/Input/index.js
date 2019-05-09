import React from 'react'
import PropTypes from 'prop-types'

import './styles.sass'

function Input({ name, onChange, placeholder }) {
  return (
    <div className="inputWrapper">
      <input type="text" name={name} onChange={onChange} placeholder={placeholder} />
    </div>
  )
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
}

Input.defaultProps = { placeholder: '' }

export default Input
