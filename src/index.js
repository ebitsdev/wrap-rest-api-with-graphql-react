import React from "react";
import ReactDOM from "react-dom";
import { ApolloProvider } from "react-apollo";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { InMemoryCache } from "apollo-cache-inmemory";
import "bootstrap/dist/css/bootstrap.css";
import "./index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

// Add GraphQL Endpoint from the API server
const httpLink = createHttpLink({
  uri: "http://localhost:4000/"
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,

  document.getElementById("root")
);

serviceWorker.unregister();
