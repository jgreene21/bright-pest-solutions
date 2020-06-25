import React, { Fragment } from "react";
import "./App.css";
import Home from "./components/Home";
import NoMatch from "./components/NoMatch";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./components/Login";
import { Switch, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";
import FetchAdmin from "./admin/FetchAdmin";
import Footer from "./components/Footer";

const App = () => (
  <Fragment>
    <FetchAdmin>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <ProtectedRoute exact path="/adminpanel" component={AdminPanel} /> */}
        <Route exact path="/login" component={Login} />
        <Route component={NoMatch} />
      </Switch>
      <Footer />
    </FetchAdmin>
  </Fragment>
);

export default App;
