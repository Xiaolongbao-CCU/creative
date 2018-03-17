export default (state = { rootID: '', roomOwner: '' }, action) => {
  switch (action.type) {
    case 'roomID': {
      const { data: roomID } = action;
      return {
        ...state,
        roomID,
      };
    }
    case 'setRoomOwner': {
      const { data: roomOwner } = action;

      return {
        ...state,
        roomOwner,
      };
    }
    default: {
      return state;
    }
  }
};
