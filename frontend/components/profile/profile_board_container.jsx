import { connect } from "react-redux";
import { logout } from "../../actions/session_actions";
import profile from "./profile_boards";
import { fetchuser } from "../../actions/user_actions";

const msp = (state, ownProps) => {
  return {
    users: state.entities.users,
    userId: ownProps.match.params.userId,
  };
};

export default connect(msp)(profile);
