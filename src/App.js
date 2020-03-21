import React from "react";
import store from "./store";
import { increaseAsync, increase } from "./actions";
import { ASYNCINCREMENT } from "./constants";

class App extends React.Component {
  constructor() {
    super();
    this.state = store.getState();
    store.subscribe(() => {
      const state = store.getState();
      this.setState(state);
    });
  }
  increaseAsync = () => {
    const action = increaseAsync();
    store.dispatch(action);
  };
  increase = () => {
    const action = increase();
    store.dispatch(action);
  };
  increaseAsyncSaga = () => {
    store.dispatch({
      type: ASYNCINCREMENT
    });
  };
  render() {
    const { number } = this.state;
    return (
      <div className="App">
        <h1>这是app</h1>
        <h2>数字为{number}</h2>
        <button onClick={this.increase}>同步增加</button>
        <button onClick={this.increaseAsync}>异步增加thunk</button>
        <button onClick={this.increaseAsyncSaga}>异步增加saga</button>
      </div>
    );
  }
}
export default App;
