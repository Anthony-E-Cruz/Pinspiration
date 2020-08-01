import React from 'react';
import { Link } from 'react-router-dom';

class Profile extends React.Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this);
    // const userId = ownProps.match.params.userId;
    const { userId } = this.props;
    const { user } = this.props;
    // const currentUser = user[userId]
    // debugger
    this.state = {
      user = 
    }
    // this.state = {
    //   email: currentUser.email,
    //   age: currentUser.age,
    //   email: currentUser.email, 
    //   first_name: currentUser.first_name, 
    //   last_name: currentUser.last_name, 
    //   about_you: currentUser.about_you, 
    //   location: currentUser.location
    // };
    this.handleFile = this.handleFile.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleFile(e) {
    debugger
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    debugger
    this.props.processForm(user);
  }


  render() {
    // const currentUser = this.props.match.params.userId;
    const {user} = this.props.user[1];

    // debugger
    return (
      <div>
        <h1>Edit Page</h1>
        <input type="file" onChange={this.handleFile} name="" id=""/>
      </div>
      // <div> 
      // <h1>{user.email}</h1>
      //   <form onSubmit={this.handleSubmit} className="login-form-box">
      //     <div className="profile">
      //       <div className="profile-header">
      //         <img className="profile-img" src={window.profile_img} />
      //         <h1>{currentUser}</h1>
      //       </div>
      //     </div>
      //     <div className="edit-profile-form">
      //       <label>First name
      //         <input type="text" 
      //           placeholder="First name"
      //           onChange={this.update('email')}
      //         />
      //       </label>
      //       <label>Last name
      //         <input type="text" 
      //           placeholder="Last name" 
      //         />
      //       </label>
      //       <label>Username
      //         <input type="text" 
      //           value={currentUser} 
      //           onChange={this.update('username')}
      //         />
      //       </label>
      //       <label>About you 
      //         <textarea type="textarea" />
      //       </label>
      //       <label>Location 
      //         <input type="text" 
      //           placeholder="New York City, San Francisco, .ect"
      //           onChange={this.update('Location')}
      //         />
      //       </label>
      //       <input className="session-submit" type="submit" value={this.props.formType} />
      //     </div>
      //   </form>
      // </div> 
    )
  }
};

export default Profile;