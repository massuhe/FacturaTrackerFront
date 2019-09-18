import React from 'react'
import Main from './components/Main'
import Login from './components/Login'
import useStore from './hooks/useStore'

const App = () => {
  const [state] = useStore()
  const isAuthenticated = state.auth.loggedUser
  if (!isAuthenticated) {
    return <Login />
  }
  return <Main />
}

export default App
