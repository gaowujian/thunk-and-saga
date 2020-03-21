import { ASYNCINCREMENT } from "./constants";

export const increase = () => {
  return {
    type: ASYNCINCREMENT,
    payload: 20
  };
};

export const increaseAsync = () => {
  return function(dispatch) {
    setTimeout(() => {
      dispatch({
        type: ASYNCINCREMENT,
        payload: 5
      });
    }, 1000);
  };
};
