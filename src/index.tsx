import React, { Fragment } from 'react'
import { render } from 'react-dom'
import App from './App'
import { Global } from '@emotion/core'
import globalStyles from './theme/globalStyles'

const root = document.getElementById('root')

render(
  <Fragment>
    <Global styles={globalStyles} />
    <App />
  </Fragment>,
  root
)
