import React from 'react'
import { css } from '@emotion/core'
import COLORS from './theme/colors'

const Header = () => {
  return (
    <header
      css={css`
        height: 35rem;
        background: black;
      `}
    >
      <span
        css={css`
          font-family: 'Oregano';
          color: ${COLORS.gold};
          font-size: 10rem;
        `}
      >
        Factura tracker
      </span>
    </header>
  )
}

export default Header
