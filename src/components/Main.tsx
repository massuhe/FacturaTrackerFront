import { Fragment } from 'react'
import Menu from './Menu'
import Header from './Header'
import { css } from '@emotion/core'
import { Router, Redirect } from '@reach/router'
import DebtsList from './DebtsList'
import Rules from './Rules'

const Main = () => (
  <Fragment>
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

export default Main
