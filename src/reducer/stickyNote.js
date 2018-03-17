export default (state = [], action) => {
  switch (action.type) {
    case 'editStickyNote': {
      const { key, data } = action;
      return [...state.slice(0, key - 1), data, ...state.slice(key)];
    }
    case 'addStickyNote': {
      return [...state, ''];
    }
    default: {
      return state;
    }
  }
};
