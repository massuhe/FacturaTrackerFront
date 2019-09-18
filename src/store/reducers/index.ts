import auth, { IAuthState } from './authReducer'

export interface IAction {
  type: string
  [index: string]: any
}

export interface IState {
  auth: IAuthState
}

export default function(state: IState, action: IAction): IState {
  return {
    auth: auth(state.auth, action),
  }
}
