import React, { useContext } from "react";
import  IdentityContext  from "./identity-context";
import { get } from "http";

function User() {

    const textStyle={
        color:'white',
        align:'center'
    }

    const identity = useContext(IdentityContext)



    return (
            <div className='UserInfo' style={textStyle}>
                <h1>{identity.user.username}</h1>
                <h4> {identity.user.location}</h4>
                <h5>{identity.user.instrument}</h5>
                <h5>{identity.user.musicGenres}</h5>

            </div>
    )
}

export default User;