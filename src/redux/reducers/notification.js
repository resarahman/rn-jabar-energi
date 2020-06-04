import actionTypes from '../../configs/actionTypes';

const initialState = {
  data: [],
  unread: [],
};

const notification = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GET_NOTIFICATIONS:
      return Object.assign({}, state, {
        data: action.payload,
      });

    case actionTypes.GET_NOTIFICATIONS_UNREAD:
      return Object.assign({}, state, {
        unread: action.payload,
      });

    default:
      return state;
  }
};

export default notification;
