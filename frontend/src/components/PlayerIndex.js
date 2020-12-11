import React from "react";
import { connect } from "react-redux";
import { getPlayers } from "../redux/actions/playerActions";
import PlayerListItem from "./PlayerListItem";

class PlayerIndex extends React.Component {
  componentDidMount() {
    this.props.getPlayers();
  }
  render() {
    return (
      <div>
        <h1>Players</h1>
        {this.props.players.map((player) => (
          <PlayerListItem player={player} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = ({ players }) => {
  return {
    players: players.all,
  };
};

export default connect(mapStateToProps, { getPlayers })(PlayerIndex);
