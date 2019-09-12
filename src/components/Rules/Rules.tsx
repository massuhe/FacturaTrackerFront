import React from 'react'
import { RouteComponentProps } from '@reach/router'
import { headerTitle } from '../../theme/fonts'

interface IRulesProps extends RouteComponentProps {}

const Rules = (props: IRulesProps) => {
  return <h1 css={headerTitle}>Reglas</h1>
}

export default Rules
