import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import navBar from './nav_bar';
// import { openModal } from '../../actions/modal_actions';

const msp = ({ session, entities: { users } }) => {
  return {
    currentUser: users[session.id]
  };
};

const mdp = dispatch => ({
  logout: () => dispatch(logout()),
  // openModal: modal => dispatch(openModal(modal))
  // openModal: () => dispatch(openModal())
})

export default connect(msp, mdp)(navBar);