import React, { Fragment } from 'react'
import { Global, css } from '@emotion/core'
import globalStyles from './theme/globalStyles'
import { Router, Redirect } from '@reach/router'
import Menu from './components/Menu'
import DebtsList from './components/DebtsList'
import Header from './components/Header'
import Rules from './components/Rules/Rules'

const App = () => (
  <Fragment>
    <Global styles={globalStyles} />
    <Menu />
    <Header />
    <div
      css={css`
        margin: 0 5rem 0 20rem;
      `}
    >
      <Router>
        <Redirect from="/" to="listado" />
        <DebtsList path="listado" />
        <Rules path="reglas" />
      </Router>
    </div>
  </Fragment>
)

export default App
