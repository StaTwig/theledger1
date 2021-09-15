import "react-app-polyfill/stable";

import React from "react";
import PropTypes from "prop-types";
import { ConnectedRouter } from "connected-react-router";
import routes from "./routes";
import "./app.css";
import Spinner from "./containers/Spinner";
import Header from '../src/shared/header';
import Sidebar from '../src/shared/sidebarMenu';
import { BrowserRouter } from 'react-router-dom';

const App = ({ history }) => {
  return (
    <BrowserRouter>
      <div>
        <Spinner />
        <div className="container-fluid p-0">
              <Header />
              <div className="d-flex">
                  <Sidebar />
              </div>
          </div>
        <ConnectedRouter history={history}>{routes}</ConnectedRouter>
      </div>
    </BrowserRouter>
  );
};

App.propTypes = {
  history: PropTypes.object,
};

export default App;
