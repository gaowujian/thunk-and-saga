import React, { Component } from "react";
import { connect } from "react-redux";

class LoginApp extends Component {
  handleNameChange = e => {
    const value = e.target.value;
    const { changeName } = this.props;
    console.log(value, changeName);
    changeName(value);
  };
  handleAgeChange = e => {
    const value = e.target.value;
    const { changeAge } = this.props;
    changeAge(value);
  };
  handleLogin = () => {
    const { username, age } = this.props;
    login({ user, age });
  };
  render() {
    return (
      <div>
        <form action="">
          <label htmlFor="username">username:</label>
          <input type="text" name="username" onChange={this.handleNameChange} />
          <label htmlFor="password">password:</label>
          <input type="text" name="password" onChange={this.handleAgeChange} />
          <button onClick={this.handleLogin}>login</button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  username: state.username,
  age: state.age
});

const mapDispatchToProps = dispatch => ({
  changeName: value => {
    dispatch({ type: "changeName", payload: value });
  },
  changeAge: value => {
    dispatch({ type: "changeAge", payload: value });
  },
  login: value => {
    dispatch({ type: "login", payload: value });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginApp);
