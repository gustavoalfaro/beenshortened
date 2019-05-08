import React, { PureComponent } from 'react'

import './styles.sass'

class Top extends PureComponent {
  componentWillMount() {
    console.log('Top')
  }

  render() {
    return (
      <div>
        Top 100 links
      </div>
    )
  }
}


export default Top
