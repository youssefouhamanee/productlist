import React, { Fragment } from "react";
import ProductList from "./components/ProductList";
import { Provider } from "react-redux";
import { Store } from "./reducers/Store";
import "spectre.css/dist/spectre.min.css";
import {BrowserRouter as Router , Route,Switch,Redirect} from "react-router-dom"
import CardProducts from "./components/CardProducts";
import My404Component from "./components/404/My404Component";


export default function App() {
  return (
    <Router>
        <Switch>
        <Provider store={Store}>
            {/* <Route exact path="*" component={My404Component} /> */}
            <Route exact path="/" component={ProductList} />
            <Route exact path="/cart" component={CardProducts}/>
        </Provider>
        </Switch>
    </Router>
  )  
}
