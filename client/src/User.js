import React, { useContext } from "react";
import  IdentityContext  from "./identity-context";
import ToggleSwitch from "./components/toggleSwitch"
import { get } from "http";

function User() {

    const textStyle={
        fontFamily: 'Righteous',
        color:'white',
        align:'center'
    }

    const identity = useContext(IdentityContext)

    console.log(identity)

    return (
  
            <div className='UserInfo' style={textStyle}>
                <h1>{identity.user.username}</h1>
                <h4> {identity.user.location}</h4>
                <h5>{identity.user.instrument}</h5>
                <h5>{identity.user.musicGenres}</h5>
                <ToggleSwitch 
                username= {identity.user.username}
                active={identity.user.active}
                />
            </div>
                
               
    )
}

export default User;