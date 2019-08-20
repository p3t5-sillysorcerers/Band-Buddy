import React, { useContext } from "react";
import  IdentityContext  from "./identity-context";

function User() {

    const identity = useContext(IdentityContext)
    
    return (
            <div>
                <h1>{identity.user.username}</h1>
                <h4> {identity.user.location}</h4>
                <h5>{identity.user.instrument}</h5>

            </div>
    )
}

export default User;