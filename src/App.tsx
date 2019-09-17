import React from 'react'
import Main from './components/Main'
import Login from './components/Login'

const App = () => {
  const isAuthenticated = false
  if (!isAuthenticated) {
    return <Login />
  }
  return <Main />
}

export default App
