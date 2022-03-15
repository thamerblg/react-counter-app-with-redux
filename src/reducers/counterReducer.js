import { DECREMENT, INCREMENT, RESET } from "../actions/types";

const initialState = { counter: 0 };

// eslint-disable-next-line
export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        counter: state.counter + 1,
      };
    case RESET:
      return {
        ...state,
        counter: 0,
      };
    case DECREMENT:
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
};
