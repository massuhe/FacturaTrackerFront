import users from './users.json'
import R from 'ramda'

const login = (userName: string, password: string): Promise<boolean> => {
  const authenticate = () => {
    const user = users.find(u => u.user === userName)
    if (!user) {
      return false
    }
    const isPasswordValid = user.password === password
    if (!isPasswordValid) {
      return false
    }
    return true
  }
  return new Promise(resolve => {
    const composed = R.compose(
      resolve,
      authenticate
    )
    setTimeout(composed, 2000)
  })
}

export default {
  login,
}
