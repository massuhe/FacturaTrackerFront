import { IAction } from '.'

export interface IAuthState {
  loggedUser: string | null
}

export default function(state: IAuthState, action: IAction): IAuthState {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return { ...state, loggedUser: action.user }
    default:
      return state
  }
}
