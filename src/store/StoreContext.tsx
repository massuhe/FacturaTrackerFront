import { createContext, useReducer, useMemo } from 'react'
import reducer, { IState } from './reducers'

export const StoreContext = createContext<{ state: IState; dispatch: any }>(
  {} as any
)

const Provider = (props: any) => {
  const [state, dispatch] = useReducer(reducer, {
    auth: {
      loggedUser: null,
    },
  })
  const contextValue = useMemo(() => ({ state, dispatch }), [state, dispatch])
  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  )
}

export default Provider
