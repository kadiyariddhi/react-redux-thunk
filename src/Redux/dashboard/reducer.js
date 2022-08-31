const INITIAL_STATE = {
    data: [],
    errors: {},

  }
  const UserList = (state = INITIAL_STATE, action) => {
    switch (action.type) {
    case 'USER_LIST_SUCCESS':
      return { ...INITIAL_STATE, data: action.data }
    case 'USER_LIST_FAILED':
      return { ...INITIAL_STATE, errors: action.data }
    default:
      return { ...state }
    }
  };

  export default UserList;