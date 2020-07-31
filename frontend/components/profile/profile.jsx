import React from 'react';
import { Link } from 'react-router-dom';

class Profile extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.receiveCurrentUser();
  }

  render() {
    const {currentUser} = this.props;
    return (
      <div>
        <h1>currentUser={currentUser}</h1>
        <h1>user</h1>
      </div>
    )
  }
}

export default Profile;