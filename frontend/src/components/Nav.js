import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">Home </Link>
        </li>
        <li>
          <Link to="/players"> Players</Link>
        </li>
        <li>
          <Link to="/players/new"> Create a Player</Link>
        </li>
      </ul>
    </div>
  );
}
