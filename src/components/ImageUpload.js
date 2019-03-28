import React, { Component } from 'react';
import axios from 'axios';
import ImageUploader from 'react-images-upload';
import FormData from 'form-data';

class ImageUpload extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tags: '',
            file: ''
        }
    }

    uploadImage = (e) => {
        e.preventDefault();
        let data = new FormData();
        data.append('file', this.state.file, this.state.file.fileName);
        const sendData = {
            username: "blauente",
            api_key: "W6cN1s8I3pm7UJU1nHNwM9FhI4KhwdP8",
            file: this.state.file,
            tags: this.state.tags
        }

        axios.post(`https://upload.giphy.com/v1/gifs?api_key=W6cN1s8I3pm7UJU1nHNwM9FhI4KhwdP8&tags=${this.state.tags}&gif_id=99887766554433221100&source_image_url=https://www.grantreighard.com`, data)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            })
    }

    changeHandler = (e) => {
        this.setState({[e.target.name]: [e.target.value]})
    }

    render () {
        return (
            <div>
                <h2>Upload a GIF</h2>
                <form onSubmit={this.uploadImage}>
                    <input placeholder="Comma, separated, tags" value={this.state.tags} onChange={this.changeHandler} name="tags"/>
                    {/* <ImagePicker
                        extensions={['gif']}
                        dims={{minWidth: 100, maxWidth: 500, minHeight: 100, maxHeight: 500}}
                        onChange={base64 => (this.setState({file: base64}))}
                        onError={error => (console.log(error))}
                    ></ImagePicker> */}
                    <ImageUploader
                        withIcon={true}
                        buttonText='Choose GIF'
                        onChange={(picture) => this.setState({file: picture})}
                        imgExtension={['.gif']}
                        maxFileSize={5242880}
                    />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}

export default ImageUpload;