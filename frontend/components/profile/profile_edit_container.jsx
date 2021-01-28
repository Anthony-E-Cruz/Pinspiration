import { connect } from 'react-redux';
import { update } from '../../actions/session_actions';
import { forceUpdate } from 'react'
import Editprofile from './profile_edit'
import { receiveCurrentUser } from '../../actions/session_actions';

const msp = (state, ownProps) => {
  return {
    userId: ownProps.match.params.userId,
    user: state.entities.users
  }
};

const mdp = dispatch => ({
  processForm: (user, id) => dispatch(update(user, id)),
})

export default connect(msp, mdp)(Editprofile);