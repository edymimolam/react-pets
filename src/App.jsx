import React, { useState } from "react";
import { Provider } from "react-redux";
import { Router, Link } from "@reach/router";
import store from "./store";
import SearchParams from "./SearchParams.jsx";
import Details from "./Details.jsx";
import ErrorBoundary from "./ErrorBoundary.jsx";
import ThemeContext from "./ThemeContext.jsx";

const App = () => (
  <Provider store={store}>
    <ThemeContext.Provider value={useState("#989898")}>
      <div>
        <header>
          <Link to="/"></Link>
        </header>
        <Router>
          <SearchParams path="/" />
          <Details path="/details/:id" />
        </Router>
      </div>
    </ThemeContext.Provider>
  </Provider>
);

export default function AppWithErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <App {...props} />
    </ErrorBoundary>
  );
}
