import React, { ReactElement } from 'react'

import { faBolt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Footer(): ReactElement {
  return (
    <div className="w-full flex flex-col">
      <div className="self-center m-4">
        <FontAwesomeIcon icon={faBolt} style={{ marginRight: '0.5rem' }} />
        Powered by Quakka
      </div>
    </div>
  )
}

export default Footer
