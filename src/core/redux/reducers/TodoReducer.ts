import { actionTypes } from '../actions/TodoActions';

const initialState = { list: [], activeTodo: {} };

const todoReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case actionTypes.SET_TODOS:
      const list = action.payload;
      newState = { list, activeTodo: state.activeTodo };
      return newState;
    case actionTypes.SET_ACTIVE_TODO:
      const activeTodo = action.payload;
      newState = { list: state.list, activeTodo };
      return newState;
    default:
      return state;
  }
};

export default todoReducer;
