import React from 'react';
import { Link } from 'react-router-dom';

class Profile extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const {user} = this.props;
    return (
      <h1>user.username</h1>
    )
  }
}

export default Profile;