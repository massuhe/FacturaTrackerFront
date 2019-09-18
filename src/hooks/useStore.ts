import { useContext } from 'react'
import { StoreContext } from '../store/StoreContext'
import { IState } from '../store/reducers'

export default function useStore(): [IState, any] {
  const { state, dispatch } = useContext<{ state: IState; dispatch: any }>(
    StoreContext
  )
  return [state, dispatch]
}
