// import React from 'react'
// const axios = require("axios");

// class ReactUploadImage extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state ={
    //         file: null
    //     };
    //     this.onFormSubmit = this.onFormSubmit.bind(this);
    //     this.onChange = this.onChange.bind(this);
    // }
    
    // onFormSubmit(event){
    //     event.preventDefault();
    //     const formData = new FormData();
    //     formData.append('myImage',this.state.file);
    //     const config = {
    //         headers: {
    //             'content-type': 'multipart/form-data'
    //         }
    //     };
    //     console.log(this.state)
    //     console.log(config)
    //     console.log(formData)
    // }
// firebaseConfig(){
//     var firebaseConfig = {
//         apiKey: "AIzaSyAayzyQ0uae_iaZtZYezJW1NX9mwFuv_EM",
//         authDomain: "bandbuddy-6cb33.firebaseapp.com",
//         databaseURL: "https://bandbuddy-6cb33.firebaseio.com",
//         projectId: "bandbuddy-6cb33",
//         storageBucket: "bandbuddy-6cb33.appspot.com",
//         messagingSenderId: "753652245670",
//         appId: "1:753652245670:web:0b6c7aef499922f5"
//       };
//       // Initialize Firebase
//       firebase.initializeApp(firebaseConfig);
//     }

//     onChange(e) {
//         this.setState({file:e.target.files[0]});
//         firebase.storage().ref('profile_images' + file.name)
//     }

//     render() {
//         return (
//             <form onSubmit={this.onFormSubmit}>
//                 <h1>File Upload</h1>
//                 <input type="file" value="upload" id="fileButton" name="myImage" onChange= {this.onChange} />
//                 <button type="submit">Upload</button>
//             </form>
//         )
//     }
// }

// export default ReactUploadImage
