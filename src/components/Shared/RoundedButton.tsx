import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
import { css } from '@emotion/core'
import { darken } from 'polished'

interface IRoundedButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  buttonColor: string
  textColor: string
}

const RoundedButton = (props: IRoundedButtonProps) => {
  const { buttonColor, textColor, ...rest } = props
  const borderColor = darken(0.1, props.buttonColor)
  return (
    <button
      {...rest}
      css={css`
        background: ${buttonColor};
        margin-top: 2rem;
        align-self: center;
        border: none;
        border-radius: 2rem 1rem 2rem 1rem;
        border-right: solid 3px ${borderColor};
        border-bottom: solid 3px ${borderColor};
        color: ${textColor};
        padding: 0.75rem 2rem;
        font-family: 'TrashHand';
        font-size: 2.5rem;
        text-transform: uppercase;
        letter-spacing: 0.25rem;
      `}
    >
      {props.children}
    </button>
  )
}

export default RoundedButton
