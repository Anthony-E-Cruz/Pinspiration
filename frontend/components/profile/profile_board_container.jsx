import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
// import navBar from './nav_bar';
// import { openModal } from '../../actions/modal_actions';
import profile from "./profile_boards";
import { fetchuser } from "../../actions/user_actions";

const msp = (state, ownProps) => {
  // currentUser: state.session
  return {
    users: state.entities.users,
    userId: ownProps.match.params.userId,
  };
};

// const mdp = dispatch => ({
//   fetchuser: (id) => dispatch(fetchuser(id))
//   // receiveCurrentUser: (currentUser) => dispatch(receiveCurrentUser(currentUser))
//   // logout: () => dispatch(logout()),
//   // openModal: modal => dispatch(openModal(modal))
//   // openModal: () => dispatch(openModal())
// })

export default connect(msp)(profile);
