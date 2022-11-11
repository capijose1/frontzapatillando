import logo from "./assetss/img/logo.svg";
import React from "react";
import "./assetss/css/App.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";
import Provider from "./components/Provider/Provider";
import Edit_Providers from "./components/Provider/Edit_Provider";
import Create_Provider from "./components/Provider/Create_Provider";
import Dashboard from "./components/Dashboard";

const App = () => {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/" exact render={(props) => <Login {...props} />} />
          <Route
            path="/dashboard"
            exact
            render={(props) => <Dashboard {...props} />}
          />
          <Route
            path="/proveedores"
            exact
            render={(props) => <Provider {...props} />}
          />
          <Route
            path="/editar_proveedor"
            exact
            render={(props) => <Edit_Providers {...props} />}
          />
          <Route
            path="/nuevo_proveedor"
            exact
            render={(props) => <Create_Provider {...props} />}
          />
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default App;
