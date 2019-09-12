import React, { Fragment } from 'react'
import { Link } from '@reach/router'
import { css } from '@emotion/core'

const routes = ['listado', 'reglas', 'usuarios', 'oficinas']

const Menu = () => (
  <Fragment>
    <nav
      css={css`
        display: flex;
        justify-content: space-between;
        font-family: 'Manjari';
        color: #fafafa;
        text-transform: uppercase;
        padding: 1rem 3rem;
      `}
    >
      <ul
        css={css`
          list-style: none;
          display: flex;
          margin: 0;
          padding: 0;
        `}
      >
        {routes.map(r => (
          <Link
            key={r}
            css={css`
              color: inherit;
              text-decoration: none;
              margin-right: 3rem;
            `}
            to={r}
          >
            {r}
          </Link>
        ))}
      </ul>
      <span>Oficina 6.1</span>
    </nav>
    <div
      css={css`
        width: 100%;
        height: 2px;
        background: linear-gradient(
          to right,
          #1b1b1b 0%,
          #383838 13%,
          #4e4e4e 24%,
          #0a0a0a 47%,
          #010101 50%,
          #0d0d0d 54%,
          #4e4e4e 100%
        );
      `}
    />
  </Fragment>
)

export default Menu
