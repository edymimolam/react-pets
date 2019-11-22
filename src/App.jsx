import React from "react";
import { render } from "react-dom";
import { Router, Link } from "@reach/router";
import SearchParams from "./SearchParams.jsx";
import Details from "./Details.jsx";

const App = () => (
  <div>
    <header>
      <Link to="/"></Link>
    </header>
    <Router>
      <SearchParams path="/" />
      <Details path="/details/:id" />
    </Router>
  </div>
);

render(<App />, document.getElementById("root"));
