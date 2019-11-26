import React, { useState } from "react";
import ProductList from "./components/ProductList";
import { Provider } from "react-redux";
import { Store } from "./reducers/Store";
import "spectre.css/dist/spectre.min.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CardProducts from "./components/CardProducts";
import My404Component from "./components/404/My404Component";

export default function App() {
  // const [loading] = useState(true);
  return (
    <Router>
      <Provider store={Store}>
        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route exact path="/cart" component={CardProducts} />
          <Route exact path="*" component={My404Component} />
        </Switch>
      </Provider>
    </Router>
  );
}
