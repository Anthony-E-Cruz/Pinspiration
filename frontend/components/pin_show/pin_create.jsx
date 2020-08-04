import { connect } from 'react-redux';
import React from 'react';
import DropZone from 'react-dropzone';
// import PinShow from './pin_show'
import { fetchPins } from '../../actions/pin_actions'

class CreatePin extends React.Component {
  constructor(props) {
    super(props);
    // const currentUser: ownProps.match.params.username;
    const { pins } = this.props;
    const { currentUserId } = this.props;
    const { currentUser } = this.props;
    const boards = currentUser[currentUserId].boards;
    debugger
    this.state = {
      title: "",
      description: "",
      photoFile: null,
      photo: null,
      user_id: currentUserId,
      photoUrl: null,
      board_id: "",
      // display: "boxy",
      // dropMessage: "Drag and drop or click to upload",
      // dropPreviewMessage: "Drop To Preview!",
      // dropErrorMessage: "Invalid File",
      // board_id: ""
    };
    console.log("testing");
    this.onDrop = this.onDrop.bind(this);
  }

  componentDidMount() {
    this.props.fetchPins()
  }

  handleInput(e) {
    this.setState({ [field]: e.currentTarget.value });
  }

  update(field) {
    return (e) =>
      this.setState({
        [field]: e.currentTarget.value,
      });
  }

  handleFile(e) {
    const file = e.currentTarget.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ photoFile: file, photoUrl: fileReader.result });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
  }

  onDrop(acceptedFiles) {
    const file = acceptedFiles[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({ photoFile: file, photoUrl: fileReader.result });
    };
    if (file) {
      fileReader.readAsDataURL(file);
    }
    this.removeBackground();
  }

  // removeBackground() {
  //   this.state.display = "boxy2";
  // }

  dropZone() {
    return (
      <div className={this.state.display}>
        <DropZone
          onDrop={this.onDrop}
          accept="image/*"
          minSize={0}
          maxSize={20000000}
        >
          {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
            <div {...getRootProps()} className="heightUpload txt-light">
              <input {...getInputProps()} className="txt-light" />
              {!isDragActive && this.state.dropMessage}
              {!isDragActive && ""}
              {isDragActive && !isDragReject && this.state.dropPreviewMessage}
              {isDragReject && this.state.dropErrorMessage}
              {/* dropMessage dropPreviewMessage dropErrorMessage */}
            </div>
          )}
        </DropZone>
      </div>
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("pin[title]", this.state.title);
    formData.append("pin[user_id]", this.state.user_id);
    formData.append("pin[description]", this.state.description);
    formData.append("pin[board_id]", this.state.board_id);
    if (this.state.photoFile) {
      formData.append("pin[photo]", this.state.photoFile);
    }
    $.ajax({
      url: "api/pins",
      method: "POST",
      data: formData,
      contentType: false,
      processData: false,
    });
  }

  photoPreview() {
    const url = this.state.photoUrl;
    if (this.state.photoUrl) {
      return <img className="photo-preview" src={url} />;
    }
  }

  boardsDropdown() {
    const { currentUserId } = this.props;
    const { currentUser } = this.props;
    const boardObjects = currentUser[currentUserId].boards;
    const boards1 = Object.values(boardObjects);
    const boards = boards1.map((el) => el.title);
    return (
      <div>
        -
        {boards1.map((el) => {
          <div>
            <li key={el.id}>{el.title}</li>
            <li key={el.id}>{el.id}</li>
          </div>;
        })}
      </div>
    );
  }

  render() {
    const { pins } = this.props;
    const allPins = Object.values(pins);
    const { currentUserId } = this.props;
    const { currentUser } = this.props;
    const boardObjects = currentUser[currentUserId].boards;
    const boards1 = Object.values(boardObjects);
    console.log(pins);
    debugger
    // console.log(boards1.map((el) => el.title));
    return (
      <div>
        {/* <h1>{boards1.map(el => (el.title))}</h1> */}
        {/* <div className="photo-preview">{this.photoPreview()}</div> */}
        {this.photoPreview()}
        <div className="create-pin-form">
          {this.dropZone()}
          <form
            className="pin-form-container"
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
              </label>
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
            <div className="photo-preview">
              {/* <p>Preview Image</p> */}
              {/* <div>{this.photoPreview()}</div> */}
            </div>
          </form>
          {this.boardsDropdown()}
        </div>
      </div>
    );
  }
};

export default CreatePin;