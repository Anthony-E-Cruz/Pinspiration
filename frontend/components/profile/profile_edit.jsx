import React from 'react';
import { Link } from 'react-router-dom';

class Profile extends React.Component {
  constructor(props) {
    super(props)
    // const currentUser: ownProps.match.params.username;
  }

  // componentDidMount() {
  //   this.props.receiveCurrentUser();
  // }

  render() {
    const currentUser = this.props.match.params.username;
    return (
      <div className="edit-profile">
        <img className="logo" src={window.profile_img} />
        <h1>{currentUser}</h1>
        {/* <h1>{currentUser}</h1> */}
        {/* <h1>this.props.currentUser</h1>   */}
        {/* <h1>user</h1> */}
      </div>
    )
  }
};

export default Profile;