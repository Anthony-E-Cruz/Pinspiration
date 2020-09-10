import React from 'react';
import { Link } from 'react-router-dom';
import DropZone from 'react-dropzone';

class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
    // const userId = ownProps.match.params.userId;
    const { userId } = this.props;
    const { user } = this.props;
    const currentUser = user[userId]
    this.state = {
      // photoUrl: currentUser.photoUrl,
      first_name: currentUser.first_name || "first name", 
      last_name: currentUser.last_name, 
      username: currentUser.username,
      about_you: currentUser.about_you, 
      location: currentUser.location,
      photoUrl: null,
      photoFile: null,
    };
    this.handleFile = this.handleFile.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  // handleFile(e) {
  //   this.setState({photoUrl: e.currentTarget.files[0]})
  // }

  handleSubmit(e) {
    e.preventDefault();
    const formData = new FormData();
    formData.append('user[first_name]', this.state.first_name);
    formData.append('user[last_name]', this.state.last_name);
    formData.append('user[username]', this.state.username);
    formData.append('user[about_you]', this.state.about_you);
    formData.append('user[location]', this.state.location);
    if (this.state.photoFile) {
      formData.append('user[photo]', this.state.photoFile);
    }
    const user = Object.assign({}, this.state);
    const { userId } = this.props;
    console.log(user)
    this.props.processForm(formData, userId)
      // .then(document.location.href = `#/users/${userId}/pins`);
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
    // console.log(this.state)
  }

  render() {
    const currentUserId = this.props.match.params.userId;
    const {user} = this.props;
    const currentUser = user[currentUserId] ;
    const preview = this.state.photoUrl ? <img src={this.state.photoUrl} /> : null;
    // console.log(this.state)
    return (
      // <div>
      //   <h1>Edit Page</h1>
      //   <h1>{currentUser.email}</h1>
      // </div>
      <div className="edit-form-container">
        <img src={currentUser.photoUrl} alt="" />
        {console.log(currentUser.photoUrl)}
        {/* {console.log(this.state)} */}
        {/* <img src={currentUser.photoUrl}/> */}
        {/* <input type="file" onChange={this.handleFile} name="" id=""/> */}
        <form onSubmit={this.handleSubmit} className="edit-form-box">
          <div className="profile">
            <div className="profile-header">
              <img className="profile-img" src={window.profile_img} />
              {/* <input className="file-uploader" type="file" onChange={this.handleFile} name="" id="" /> */}
              <h1>{currentUser.username}</h1>
            </div>
          </div>
          <div className="edit-profile-form">
            <label>
              First name
              <input
                type="text"
                placeholder={currentUser.first_name}
                onChange={this.update("first_name")}
              />
            </label>
            <label>
              Last name
              <input
                type="text"
                placeholder={currentUser.last_name}
                onChange={this.update("last_name")}
              />
            </label>
            <label>
              Username
              <input
                type="text"
                placeholder={currentUser.username}
                onChange={this.update("username")}
              />
            </label>
            <label>
              About you
              <input
                type="textarea"
                placeholder={currentUser.about_you}
                // placeholder="Write a little bit about yourself here"
                onChange={this.update("about_you")}
              />
            </label>
            <label>
              Location
              <input
                type="text"
                placeholder={currentUser.location}
                // placeholder="New York City, San Francisco, .ect"
                onChange={this.update("location")}
              />
            </label>
            <label>
              Image
              <input
                type="file"
                // placeholder="New York City, San Francisco, .ect"
                onChange={this.handleFile.bind(this)}
              />
            </label>
            <input
              className="session-submit"
              type="submit"
              value={this.props.formType}
            />
            {preview}
          </div>
        </form>
      </div>
    );
  }
};

export default Profile;