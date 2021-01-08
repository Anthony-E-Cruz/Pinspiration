import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import profile from './profile_pins'
import { receiveCurrentUser } from '../../actions/session_actions';
import { fetchUser, fetchUsers } from "../../actions/user_actions";
import { fetchPins } from "../../actions/pin_actions";

const msp = ( state, ownProps ) => {
  const id = ownProps.match.params.userId;
  return {
    pins: state.entities.pins,
    currentUserId: state.session.id,
    users: state.entities.users,
    userId: ownProps.match.params.userId
  }
};

const mdp = dispatch => ({
  fetchUser: (id) => dispatch(fetchUser(id)),
  fetchPins: () => dispatch(fetchPins()),
  fetchUsers: () => dispatch(fetchUsers()),
})

export default connect(msp, mdp)(profile);