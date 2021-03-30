import React from "react";
import { Route, Switch } from "react-router";
import OverviewContainer from "../containers/overview";
import TransactionHistoryContainer from "../containers/transactionHistory";
import InventoryContainer from "../containers/inventory";
import Home from "../containers/home";
import LoginContainer from "../containers/login";
import Verify from "../containers/verify";
import SignUp from "../containers/signUp";

import NoMatch from "../components/NoMatch";

import "./style.scss";
const routes = (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/login" component={LoginContainer} />
    <Route path="/verify" component={Verify} />
    <Route path="/signup" component={SignUp} />
    <Route exact path="/overview" component={OverviewContainer} />
    <Route
      exact
      path="/transactionHistory"
      component={TransactionHistoryContainer}
    />
    <Route exact path="/inventory" component={InventoryContainer} />
    <Route component={NoMatch} />
  </Switch>
);

export default routes;
