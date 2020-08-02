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
    console.log(currentUserId)
    this.state = {
      title: "",
      description: "",
      photoFile: null,
      photo: null,
      user_id: currentUserId
      // board_id: ""
    };
    this.onDrop = this.onDrop.bind(this);
  }

  componentDidMount() {
    this.props.fetchPins()
  }

  handleInput(e) {
    this.setState({ title: e.currentTarget.value });
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
      this.setState({ photoFile: file });
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
              {!isDragActive && "Drag and drop or click to upload"}
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
    // .then((response) => console.log(response.message),
    // (response) => console.log(response.responseJSON),
    // );
  }

  render() {
    const { pins } = this.props;
    const allPins = Object.values(pins);

    // console.log(allPins);
    return (
      <div className="create-pin-form">
        <form className="create-pin-form" onSubmit={this.handleSubmit.bind(this)}>
          <div className="create-pin-form">
            <h1>Create a Pin!</h1>
            <label>Title
              <input type="text"
                id="post-body"
                value={this.state.title}
                onChange={this.handleInput.bind(this)} />
            </label>
            <label>Description
              <input type="text"
                id="post-body"
                value={this.state.description}
                onChange={this.handleInput.bind(this)} />
            </label>
            {/* <label>Upload Image
              <input type="file"
                onChange={this.handleFile.bind(this)} />
            </label> */}
            <button>Submit!</button>
          </div>
        </form>
        {this.dropZone()}
      </div>
    )
  }
};

// const msp = (state) => {
//   // debugger
//   // console.log(state.entities.pins);
//   return {
//     pins: state.entities.pins,
//     currentUserId: state.session.id
//   }
// }

// const mdp = dispatch => ({
//   fetchPins: () => dispatch(fetchPins())
// })

export default CreatePin;