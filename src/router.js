import React from "react";
import { Switch, Route } from "react-router";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import ContactForm from "./components/addContactComponentConnector";
import ContactView from "./components/addContactViewComponentController";
import store from "./store/store";

export default class Router extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Route exact path="/" component={App} />
          <Route exact path="/new" component={ContactForm} />
          <Route exact path="/view/:id" component={ContactView} />
        </BrowserRouter>
      </Provider>
    );
  }
}
