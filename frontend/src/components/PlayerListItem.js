import React from "react";

export default function PlayerListItem({ player }) {
  return (
    <div>
      {player.name} - {player.number}
    </div>
  );
}
