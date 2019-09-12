import React, { Fragment } from 'react'
import { Global, css } from '@emotion/core'
import globalStyles from './theme/globalStyles'
import { Router, Redirect } from '@reach/router'
import Menu from './Menu'
import DebtsList from './DebtsList'
import Header from './Header'

const App = () => (
  <Fragment>
    <Global styles={globalStyles} />
    <Menu />
    <Header />
    <Router>
      <Redirect from="/" to="listado" />
      <DebtsList path="listado" />
    </Router>
  </Fragment>
)

export default App
