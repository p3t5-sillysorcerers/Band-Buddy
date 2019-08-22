import React from 'react';

class JamButton extends React.Component {

    render() {
        return (
<button type="button" className="btn btn-danger" onClick= {()=>this.props.onClick({musician: this.props.name})} >Let's Jam</button> 
        )
    }
}
export default JamButton
