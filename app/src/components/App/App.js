import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "../Home/Home";
import Layout from "../../hoc/Layout/Layout";

function App() {
  const routes = (
    <Layout>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/library_create" exact component={Home} />
        <Redirect to="/" />
      </Switch>
    </Layout>
  );

  return <>{routes}</>;
}

export default App;
