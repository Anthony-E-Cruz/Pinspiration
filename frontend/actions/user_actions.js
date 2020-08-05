import * as UsersAPIUtil from "../util/users_api_util";

export const RECEIVE_USERS = "RECEIVE_USERSS";
export const RECEIVE_USER = "RECEIVE_USER";

export const receiveusers = (users) => {
  return {
    type: RECEIVE_USERS,
    users,
  };
};

export const receiveuser = (user) => ({
  type: RECEIVE_USER,
  user,
});

export const fetchusers = () => (dispatch) => {
  UsersAPIUtil.fetchusers().then((users) => dispatch(receiveusers(users)));
};

export const fetchuser = (id) => (dispatch) => {
  UsersAPIUtil.fetchuser(id).then((user) => dispatch(receiveuser(user)));
};
