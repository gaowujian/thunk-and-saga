import React from "react";
import ReactDOM from "react-dom";

import App from "./App";
import LoginApp from "./LoginApp";
import store from "./store";
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={store}>
    <LoginApp />
  </Provider>,
  document.getElementById("root")
);
