import React from 'react'
import { css } from '@emotion/core'
import COLORS from '../../theme/colors'

interface IHeaderTitleProps {
  text: string
}

const HeaderTitle = ({ text }: IHeaderTitleProps): JSX.Element => {
  const words = text.split(' ')
  return (
    <div
      css={css`
        position: absolute;
        top: 50%;
        transform: translate(-25%, -80%);
        left: 50%;
      `}
    >
      {words.map((w: string, index: number) => (
        <span
          key={w}
          css={css`
            display: block;
            font-family: 'Oregano';
            color: ${COLORS.gold};
            font-size: 5vw;
            margin-left: ${index * 7}vw;
            text-transform: uppercase;
          `}
        >
          {w}
        </span>
      ))}
    </div>
  )
}

export default HeaderTitle
