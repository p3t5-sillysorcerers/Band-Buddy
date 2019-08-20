import React from "react";
import  IdentityContext  from "./identity-context";

class Logout extends React.Component {

    
    render() {
        return (
            <IdentityContext.Consumer>
                {({logout}) => (
                    <div>
                        <button className="btn btn-primary" onClick={logout}>Logout</button>
                    </div>
                )}
            </IdentityContext.Consumer>
        )
    }
}
export default Logout;