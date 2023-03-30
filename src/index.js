/** @format */

import React from "react";
import ReactDOM from "react-dom";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";

import AuthLayout from "layouts/Auth.js";

import AdminLayout0 from "layouts/Admin0.js";

import "./components/Style/Style.scss";

ReactDOM.render(
  <HashRouter name="">
    <Switch>
      <Route path={`/auth`} component={AuthLayout} />
      <Route path={`/admin0`} component={AdminLayout0} />

      <Redirect from={`/`} to="/auth/SignIn" />
    </Switch>
  </HashRouter>,
  document.getElementById("root")
);
