import React from "react";
import './style.css'

class ImageUpload extends React.Component {
    constructor(props) {
        super(props);
        this.state = { file: '', imagePreviewUrl: '' };
    }

    

    handleSubmit(event) {
        event.preventDefault();
    }
    handleImageChange(event) {
        event.preventDefault();

        let reader = new FileReader();
        let file = event.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        }
        reader.readAsDataURL(file)

        this.props.data(file);
    }
    render() {
        let { imagePreviewUrl } = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (<img src={imagePreviewUrl} />);
        } else {
            $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
        }

        return (
            <div className="previewComponent">
                <div className="imgPlaceholder">
                <img src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-image-512.png" className="card-image" alt="..."></img>
                </div>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <input className="fileInput" id="fileInput"
                        type="file"
                        onChange={(event) => this.handleImageChange(event)} />
                </form>
                <div className="imgPreview">
                    {$imagePreview}
                </div>
            </div>
        )
    }
}

export default ImageUpload;