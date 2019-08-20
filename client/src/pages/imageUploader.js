import React, {Component} from "react";
// import axios from "axios";
import API from "../utils/API";
import FileBase64 from '../components/64image';

class UploadImage extends Component {
constructor() {
    super()
    this.state = {
      files: [],
    }
  }

  fileUploadHandler = () =>{
        API.inputProfiles({
          name: this.state.files[0].name
        }
        )
          .then(response => {
            console.log("Added: " + JSON.stringify(this.state.files, null, 2))
          })
      }

  getFiles(files){
    this.setState({ files: files })
  }

    render() {
return (

    <div>
    <div className="text-center mt-25">
      <FileBase64
        multiple={ true }
        onDone={ this.getFiles.bind(this) } />
    </div>

    <div className="text-center">
      { this.state.files.map((file,i) => {
        return <img key={i} src={file.base64} />
      }) }
      <img src="" />
    </div>

    { this.state.files.length !== 0 ?
      <div>
        <div className="pre-container">
          <pre>{ JSON.stringify(this.state.files[0].name, null, 2) }</pre>
        </div>
      </div>
    : null }
 <button onClick ={this.fileUploadHandler}>Upload</button>
  </div>
)
    }
}
export default UploadImage;