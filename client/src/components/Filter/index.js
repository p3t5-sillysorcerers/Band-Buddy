import React from 'react';
import {DropdownButton, Dropdown} from 'react-bootstrap';

function UserFilter(props) {
  const names = ["Guitar","Bass","Drums","Vocals","Keys/Synth","Brass","Other","All"]
  return (
    <DropdownButton  style={{marginTop:"10px"}} onClick={()=>props.onReset()} variant="secondary" id="dropdown-variants-secondary" title={props.title} >
    {names.map((names,i) =>(
    <Dropdown.Item key={i} onClick= {()=>props.onFilter({names:names})}>{names}</Dropdown.Item>
    )
    )}
     </DropdownButton>
  ) 
}

export default UserFilter


