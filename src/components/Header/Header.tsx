import React, { Fragment } from 'react'
import { css } from '@emotion/core'
import headerImage from '../../assets/images/header.png'
import HeaderTitle from './HeaderTitle'

const Header = () => {
  return (
    <header
      css={css`
        background: url(${headerImage});
        background-size: contain;
        background-repeat: no-repeat;
        padding-top: 28%;
        position: relative;
      `}
    >
      <HeaderTitle text="Factura tracker" />
    </header>
  )
}

export default Header
