import normalize from 'normalize.css'
import { css } from '@emotion/core'
import COLORS from './colors'
import manjariFont from '../assets/fonts/Manjari-Regular.ttf'
import oreganoFont from '../assets/fonts/Oregano-Regular.ttf'
import trashHandFont from '../assets/fonts/TrashHand.ttf'

const globalStyles = css`
  ${normalize}
  @font-face {
    font-family: 'Manjari';
    src: url(${manjariFont}) format('woff2');
  }
  @font-face {
    font-family: 'Oregano';
    src: url(${oreganoFont}) format('woff2');
  }
  @font-face {
    font-family: 'TrashHand';
    src: url(${trashHandFont}) format('woff2');
  }
  body {
    background: ${COLORS.gray};
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    box-sizing: border-box;
  }
`

export default globalStyles
