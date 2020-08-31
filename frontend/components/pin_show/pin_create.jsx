import { connect } from 'react-redux';
import React from 'react';
import DropZone from 'react-dropzone';
// import PinShow from './pin_show'
import { fetchUser } from '../../actions/user_actions'
import { fetchPins } from '../../actions/pin_actions'
import { Link } from "react-router-dom";


class CreatePin extends React.Component {
  constructor(props) {
    super(props);
    // const currentUser: ownProps.match.params.username;
    const { pins } = this.props;
    const { currentUserId } = this.props;
    const { currentUser } = this.props;
    const boards = currentUser[currentUserId].boards;

    this.state = {
      title: "",
      description: "",
      photoFile: null,
      photo: null,
      user_id: currentUserId,
      photoUrl: null,
      board_id: "",
      display: "boxy",
      dropMessage: "Drag and drop or click to upload",
      dropPreviewMessage: "Drop To Preview!",
      dropErrorMessage: "Invalid File",
      status: "immage-not-saved",
      backroundImage: "https://i.imgur.com/elPWvzM.png"
      // dropdown: this.boardsDropdown(),
      // board_id: ""
    };
    this.onDrop = this.onDrop.bind(this);
    this.onClick = this.onClick.bind(this);
    this.removePreview = this.removePreview.bind(this);
  }

  componentDidMount() {
    const { currentUserId } = this.props;
    this.props.fetchPins();
    // this.props.fetchUser(currentUserId);
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
    // this.removeBackground();
  }

  // removeBackground() {
  //   this.state.display = "boxy2";
  // }

  dropZone() {
    let backgroundImage = this.state.photoUrl || this.state.backroundImage
    let dropMessage = this.state.dropMessage
    if (this.state.photoUrl) {
      dropMessage = ""
    }
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
              <div className="drop-message">
                {!isDragActive && dropMessage}
                {!isDragActive && ""}
                {isDragActive && !isDragReject && this.state.dropPreviewMessage}
                {isDragReject && this.state.dropErrorMessage}
                {/* dropMessage dropPreviewMessage dropErrorMessage */}
              </div>
              <img className="background-image" src={backgroundImage}></img>
              {/* {this.photoPreview()} */}
            </div>
          )}
        </DropZone>
        <button className="remove-preview" onClick={this.removePreview}>
          Remove Preview
        </button>
      </div>
    );
  }

  removePreview() {
    this.setState({ photoUrl: null })
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
    const { currentUserId } = this.props;
    $.ajax({
      url: "api/pins",
      method: "POST",
      data: formData,
      contentType: false,
      processData: false,
      // success: (this.state.status = "immage-saved"),
      // success: (this.setState()),
      // }).then(this.state.status = "immage-saved");
    }).then(document.location.href = `#/users/${currentUserId}/pins`);
    // this.setState();
  }

  photoPreview() {
    const url = this.state.photoUrl;
    this.setState({ backroundImage: url })
    if (this.state.photoUrl) {
      return <img className="photo-preview" src={url} />;
    }
  }

  onClick() {
    this.setState({
      board_id: "Test",
    });
  };

  boardsDropdown() {
    const { currentUserId } = this.props;
    const { currentUser } = this.props;
    const boardObjects = currentUser[currentUserId].boards;
    const boards1 = Object.values(boardObjects);
    if (boards1) {
      return (
        <div className="center-dropdown">
          {boards1.map((el, idx) => (
            <button >
              <div key={idx}>{el.title}</div>
              {/* <div key={el.id}>{el.id}</div> */}
            </button>
          ))}
        </div>
      );
    } else {
      return null;
    }
  }

  render() {
    const { pins } = this.props;
    const allPins = Object.values(pins);
    const { currentUserId } = this.props;
    const { currentUser } = this.props;
    const boardObjects = currentUser[currentUserId].boards;
    const boards1 = Object.values(boardObjects);

    // console.log(boards1.map((el) => el.title));
    return (
      <div>
        <div className="create-pin-form">
          {/* {this.photoPreview()} */}
          <div>
            <h1 className={this.state.status}>Immage Successfully Saved!</h1>
            <div className="dropzone">
              <div
                className="dropzone-zone"
              // style=background-image: url(this.photoPreview())
              >
                {this.dropZone()}
              </div>
              {/* <div className="dropzone-preview">{this.photoPreview()}</div> */}
            </div>
          </div>
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
                  onChange={this.update("title")}
                />
              </label>
              <label className="pin-details">
                Description
                <input
                  type="text"
                  id="post-body"
                  value={this.state.description}
                  onChange={this.update("description")}
                />
              </label>
              <label className="pin-details">
                <div className="center-dropdown">
                  <p className="board-select">Select board</p>
                  {boards1.map((el, idx) => (
                    <ul className="dropdown-items">
                      <button
                        className="dropdown-board-items"
                        id={idx}
                        type="button"
                        value={el.id}
                        onClick={this.update("board_id")}
                      >
                        <div key={idx}>{el.title}</div>
                      </button>
                    </ul>
                  ))}
                </div>
              </label>
              <button className="submit-pin">Submit!</button>
            </div>
            <div className="photo-preview">
              {/* <p>Preview Image</p> */}
              {/* <div>{this.photoPreview()}</div> */}
            </div>
          </form>
        </div>
        {/* {this.boardsDropdown()} */}
      </div>
    );
  }
};

export default CreatePin;