import React from "react";
import UserContext from "./UserContext";

// step2: 2
// Create a provider component for the user data
// This will allow us to manage the user data and provide it to the context
// The provider component will use the useState hook to manage the user data
const UserContextProvider = ({ children }) => {
    const [user, setUser] = React.useState(null); // Initialize user state to null
    
    // Function to update the user data
    // const updateUser = (userData) => {
    //     setUser(userData); // Update the user state with the new user data
    // };
    
    return (
        <UserContext.Provider value={{ user, setUser }}>
            {/* Provide the user data and update function to the context */}
        {children} {/* Render the children components */}
        </UserContext.Provider>
    );
}

export default UserContextProvider;