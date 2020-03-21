import { ASYNCINCREMENT, INCREMENT } from "./constants";

const initialState = {
  number: 1,
  username: "",
  age: 0
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case ASYNCINCREMENT:
      var { number } = state;
      return { ...state, number: number + payload };
    case INCREMENT:
      return { ...state, number: state.number + payload };
    case "changeName":
      return { ...state, username: payload };
    case "changeAge":
      return { ...state, age: payload };
    default:
      return state;
  }
};
