import { RouteComponentProps } from '@reach/router'
import { css } from '@emotion/core'
import { Fragment } from 'react'
import { headerTitle } from '../../theme/fonts'

interface IDebtsListProps extends RouteComponentProps {}

const DebtsList = (props: IDebtsListProps) => {
  return (
    <Fragment>
      <h1 css={headerTitle}>Listado</h1>
    </Fragment>
  )
}

export default DebtsList
