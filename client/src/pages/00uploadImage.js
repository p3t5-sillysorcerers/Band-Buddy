import React, {Component} from "react";
import axios from "axios";

class UploadImage extends Component {
state = {
    selectedFile:null
}
    fileSelectedHandler = event => {
        this.setState({
            selectedFile: event.target.files[0] 
        })
        console.log(event.target.files[0])
        }
fileUploadHandler = () =>{
axios.post("")
const fd = new FormData();
axios.post()

}

    render() {
return (
    <div className="UplaodImage">
    <input type="file" onChange={this.fileSelectedHandler} />
    <button onClick ={this.fileUploadHandler}>Upload</button>
    </div>
)

    }
}

export default UploadImage;