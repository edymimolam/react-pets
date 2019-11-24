import React from "react";
import { Router, Link } from "@reach/router";
import SearchParams from "./SearchParams.jsx";
import Details from "./Details.jsx";
import ErrorBoundary from "./ErrorBoundary.jsx";

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

export default function AppWithErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <App {...props} />
    </ErrorBoundary>
  );
}
