import { connect } from 'react-redux';
import React from 'react';
import DropZone from 'react-dropzone';
// import PinShow from './pin_show'
import { fetchPins } from '../../actions/pin_actions'

class CreatePin extends React.Component {
  constructor(props) {
    super(props)
    // const currentUser: ownProps.match.params.username;
    const { pins } = this.props
    const { currentUserId } = this.props
    
    this.state = {
      title: "",
      description: "",
      photoFile: null,
      photo: null,
      user_id: currentUserId,
      photoUrl: null,
      board_id: ""
      // board_id: ""
    };
    
    this.onDrop = this.onDrop.bind(this);
  }

  componentDidMount() {
    this.props.fetchPins()

  }

  handleInput(e) {
    this.setState({ [field]: e.currentTarget.value });
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  // handleFile(e) {
  //   const file = e.currentTarget.files[0];
  //   const fileReader = new FileReader();
  //   fileReader.onloadend = () => {
  //     this.setState({ photoFile: file, photoUrl: fileReader.result });
  //   };
  //   if (file) {
  //     fileReader.readAsDataURL(file);
  //   }
  // }

  onDrop(acceptedFiles) {
    const file = acceptedFiles[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ photoFile: file, photoUrl: fileReader.result });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  dropZone() {
    return (
      <div className="boxy">
        <DropZone
          onDrop={this.onDrop}
          accept="image/*"
          minSize={0}
          maxSize={20000000}
        >
          {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
            <div {...getRootProps()} className="heightUpload txt-light">
              <input {...getInputProps()} className="txt-light" />
              {/* {!isDragActive && "Drag and drop or click to upload"} */}
              {!isDragActive && ""}
              {isDragActive && !isDragReject && "Drop Me!"}
              {isDragReject && "File type must be a image"}
            </div>
          )}
        </DropZone>
      </div>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    console.log(this.state)
    formData.append('pin[title]', this.state.title);
    formData.append('pin[user_id]', this.state.user_id);
    formData.append('pin[description]', this.state.description);
    formData.append("pin[board_id]", this.state.board_id);
    if (this.state.photoFile) {
      formData.append('pin[photo]', this.state.photoFile);
    };
    $.ajax({
      url: 'api/pins',
      method: 'POST',
      data: formData,
      contentType: false,
      processData: false
    })
  }

  photoPreview() {
    const url = this.state.photoUrl;
    if (this.state.photoUrl) {
      return <img className="photo-preview" src={url} />;
    }
  }

  render() {
    const { pins } = this.props;
    const allPins = Object.values(pins);

    return (
      <div>
        <div className="photo-preview">{this.photoPreview()}</div>
        <div className="create-pin-form">
          {this.dropZone()}
          <form
            className="create-pin-form"
            onSubmit={this.handleSubmit.bind(this)}
          >
            <div className="pin-form">
              <h1>Create a Pin!</h1>
              <label className="pin-details">
                Title
                <input
                  type="text"
                  id="post-body"
                  value={this.state.title}
                  // onChange={this.handleInput.bind(this)}
                  onChange={this.update("title")}
                />
              </label >
              <label className="pin-details">
                Description
                <input
                  type="text"
                  id="post-body"
                  value={this.state.description}
                  // onChange={this.handleInput.bind(this)}
                  onChange={this.update("description")}
                />
              </label>
              <label className="pin-details">
                Board
                <input
                  type="text"
                  id="post-body"
                  value={this.state.board_id}
                  // onChange={this.handleInput.bind(this)}
                  onChange={this.update("board_id")}
                />
              </label>
              <button>Submit!</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
};

export default CreatePin;