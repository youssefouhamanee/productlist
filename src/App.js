import React, { Fragment } from "react";
import ProductList from "./ProductList";
import { Provider } from "react-redux";
import { Store } from "./Store";
import "spectre.css/dist/spectre.min.css";
import {BrowserRouter as Router , Route,Switch} from "react-router-dom"
import CardProducts from "./CardProducts";


export default function App() {
  return (
    <Router>
        <Switch>
        <Provider store={Store}>
            <Route exact path="/" component={ProductList} />
            <Route exact path="/productSelected" component={CardProducts}/>
        </Provider>
        </Switch>
    </Router>
  )  
}
