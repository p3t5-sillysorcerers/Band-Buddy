import React from "react";


 const IdentityContext = React.createContext({
    user: {},
    loggedIn: false,
    logout: (event) => {},
    login: (event) => {}
})

export default IdentityContext;