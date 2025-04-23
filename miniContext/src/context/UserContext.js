import React from "react";

// step1: 1
// Create a context for the user data
// This will allow us to share the user data across components without prop drilling
const UserContext = React.createContext();
export default UserContext;