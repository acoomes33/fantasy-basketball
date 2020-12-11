import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import PlayerForm from "./components/PlayerForm";
import PlayerIndex from "./components/PlayerIndex";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/players" component={PlayerIndex} />
          <Route path="/players/new" component={PlayerForm} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
