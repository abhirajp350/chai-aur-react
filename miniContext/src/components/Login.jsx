import React, {useState, useContext} from 'react'
import UserContext from '../context/UserContext'

function Login() {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const { setUser } = useContext(UserContext) // Access the setUser function from the context
    // Function to handle form submission

    const handleSubmit = (e) => {
        e.preventDefault() // Prevent the default form submission behavior
        
        setUser({ username, password }) // Update the user state with the username
    }

  return (
    <div>
      <h2>Login</h2>
      <input 
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}   
        />
      <input 
        type="password" 
        placeholder="Password" 
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleSubmit}>Login</button>
    </div>
  )
}

export default Login