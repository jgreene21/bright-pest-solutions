import React, { Fragment } from "react";
import "./App.css";
import Home from "./components/Home";
import NoMatch from "./components/NoMatch";
import Navbar from "./components/Navbar";
import ProtectedRoute from "./components/ProtectedRoute";
import Login from "./components/Login";
import { Switch, Route } from "react-router-dom";
import FetchAdmin from "./admin/FetchAdmin";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";

const App = () => (
  <Fragment>
    <FetchAdmin>
      <Navbar />
      <Switch>
        <Route exact path="/bright-pest-solutions" component={Home} />
        <Route exact path="/oursolution" component={About} />
        <Route exact path="/contact" component={Contact} />
        {/* <ProtectedRoute exact path="/adminpanel" component={AdminPanel} /> */}
        <Route exact path="/login" component={Login} />
        <Route component={NoMatch} />
      </Switch>
      <Footer />
    </FetchAdmin>
  </Fragment>
);

export default App;
