import React from 'react'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {


  return (
    <>
      <UserContextProvider>
        <div className="App">
          <h2>Welcome to the React App!</h2>
          <Login />
          <Profile />
        </div>
      </UserContextProvider>
    </>
  )
}

export default App
