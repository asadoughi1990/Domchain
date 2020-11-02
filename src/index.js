import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";


import { BrowserRouter as Router, Route } from "react-router-dom";

import { createBrowserHistory } from "history";

import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "animate.css";
import "jquery";

const history = createBrowserHistory();

const loader = document.querySelector(".loader");
const showLoader = () => loader.classList.remove("loader--hide");
const hideLoader = () => {
    loader.classList.add("loader--hide");
    document.querySelector('#root').classList.add('page-show');
};

const template = (
  <Router
    basename={process.env.PUBLIC_URL}
    history={history}
    hideLoader={hideLoader}
    showLoader={showLoader}
  >
    {/* <Route exact path="/" component={App} /> */}
    <Route exact path="/" render={props => <App hideLoader={hideLoader} {...props} />} />
  </Router>
);

setTimeout(
  () => ReactDOM.render(template, document.getElementById("root")),
  1000
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
