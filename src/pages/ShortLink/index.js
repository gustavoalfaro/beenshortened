import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import './styles.sass'

class ShortLink extends PureComponent {
  componentWillMount() {
    const { match: { params } } = this.props
    console.log(params.slug)
  }

  render() {
    return (
      <div>
        Short link here
      </div>
    )
  }
}

ShortLink.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({ slug: PropTypes.string }).isRequired,
  }).isRequired,
}


export default ShortLink
