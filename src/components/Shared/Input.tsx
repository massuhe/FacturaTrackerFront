import { DetailedHTMLProps, InputHTMLAttributes } from 'react'
import { css, SerializedStyles } from '@emotion/core'
import COLORS from '../../theme/colors'
import { FONT_FAMILIES } from '../../theme/fonts'

interface IInputStyles {
  input?: string | SerializedStyles
  label?: string | SerializedStyles
}

interface IInputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  label: string
  controller?: any
  styles?: IInputStyles
}

const getStyles = (styles: any, fallback: SerializedStyles): {
  css: SerializedStyles
  className?: string
} => {
  if (!styles) {
    return { css: fallback }
  }
  if (typeof styles === 'string') {
    return { className: styles, css: fallback }
  }
  const newCss = css`
    ${styles.styles}
    ${fallback && fallback.styles}
  `
  return { css: newCss }
}

const addErrorStyles = (inputStyles: {
  css: SerializedStyles
  className?: string
}) => {
  const errorStyles = css`
    border: solid 1px #ff8a8a;
    background-color: #ffbaba;
    color: red;
  `
  if (!inputStyles.css) {
    return { ...inputStyles, css: errorStyles }
  }
  const newCss = css`
    ${inputStyles.css.styles}
    ${errorStyles.styles}
  `
  return {
    ...inputStyles,
    css: newCss,
  }
}

const containerFallbackStyles = css`
  display: flex;
  flex-direction: column;
`

const labelFallbackStyles = css`
  font-family: ${FONT_FAMILIES.manjari};
  font-size: 1.25rem;
  letter-spacing: 0.1rem;
  color: ${COLORS.lightgray};
  margin: 0.25rem 0;
`

const inputStylesFallback = css`
  padding: 0.75rem;
  border-radius: 0.25rem;
  border: solid 1px gray;
  font-family: ${FONT_FAMILIES.manjari};
`

const Input = (props: IInputProps) => {
  const {
    label,
    styles = {},
    className,
    controller,
    onChange,
    value,
    onBlur,
    ...inputProps
  } = props

  let inputStyles = getStyles(styles.input, inputStylesFallback)
  if (controller && controller.getError()) {
    inputStyles = addErrorStyles(inputStyles)
  }

  const labelStyles = getStyles(styles.label, labelFallbackStyles)
  const containerStyles = getStyles(className, containerFallbackStyles)

  return (
    <label {...containerStyles}>
      {label && <span {...labelStyles}>{label}</span>}
      <input
        {...inputProps}
        {...inputStyles}
        value={controller ? controller.getValue() : value}
        onChange={controller ? controller.onChange : onChange}
        onBlur={controller ? controller.onBlur : onBlur}
      />
    </label>
  )
}

export default Input
