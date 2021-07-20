import { ACTION } from '../actions/authentication';

const defaultState = {
  isAuthenticated: () => !!this.token,
};

export default (state = defaultState, action = {}) => {
  const { type, payload } = action;
  switch (type) {
    case ACTION.SET_TOKEN:
      return {
        ...state,
        token: payload,
      };
    default:
      return state;
  }
};
