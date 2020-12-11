import React, { Component } from "react";
import { createPlayer } from "../redux/actions/playerActions";
import { connect } from "react-redux";

class PlayerForm extends Component {
  state = {
    name: "",
    team: "",
    number: "",
  };

  submit = (e) => {
    e.preventDefault();
    this.props.createPlayer(this.state);
    this.setState({
      name: "",
      team: "",
      number: "",
    });
    this.props.history.push("/players");
  };
  render() {
    return (
      <div>
        <h1>Create a player</h1>
        <form onSubmit={this.submit}>
          Name:{" "}
          <input
            onChange={(e) => this.setState({ name: e.target.value })}
            type="text"
            value={this.state.name}
          />
          Team:{" "}
          <input
            onChange={(e) => this.setState({ team: e.target.value })}
            type="text"
            value={this.state.team}
          />
          Number:{" "}
          <input
            type="number"
            onChange={(e) => this.setState({ number: e.target.value })}
            value={this.state.number}
          />
          <input type="submit" value="Create Player" />
        </form>
      </div>
    );
  }
}

export default connect(null, { createPlayer })(PlayerForm);
