import React,{ useContext } from 'react'
import UserContext from '../context/UserContext'

function Profile() {
    const { user } = useContext(UserContext) // Access the user data from the context

    if (!user) {
        return <div>Please log in to view your profile.</div> // Show a message if the user is not logged in
    }
  return (
    <div>
        <h2>User Profile</h2>
        <p>Welcome, {user.username}</p> {/* Display the username */}
        {/* You can add more user information here */}
        <button onClick={() => alert('User logged out')}>Logout</button> {/* Logout button */} 
    </div>
  )
}

export default Profile