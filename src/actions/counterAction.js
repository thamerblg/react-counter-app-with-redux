import { DECREMENT, INCREMENT, RESET } from "./types";

export const increment = () => {
  return {
    type: INCREMENT,
  };
};
export const reset = () => {
  return {
    type: RESET,
  };
};
export const decrement = () => {
  return {
    type: DECREMENT,
  };
};
