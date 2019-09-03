import React from "react";
import  IdentityContext  from "./identity-context";


const logoutStyle={
    color: 'white',
    backgroundColor: "#F55F00"
  
}

class Logout extends React.Component {

    render() {
        return (
            <IdentityContext.Consumer>
                {({logout}) => (
                    <div>
                        <button className="btn" onClick={logout} style={logoutStyle}>Logout</button>
                    </div>
                )}
            </IdentityContext.Consumer>
        )
    }
}
export default Logout;