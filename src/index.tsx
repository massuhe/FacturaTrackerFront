import React, { Fragment } from 'react'
import { render } from 'react-dom'
import App from './App'
import { Global } from '@emotion/core'
import globalStyles from './theme/globalStyles'
import Provider from './store/StoreContext'

const root = document.getElementById('root')

render(
  <Fragment>
    <Global styles={globalStyles} />
    <Provider>
      <App />
    </Provider>
  </Fragment>,
  root
)
