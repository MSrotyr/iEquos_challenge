import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Home from "../Home/Home";
import Layout from "../../hoc/Layout/Layout";
import CreateLibrary from "../CreateLibrary/CreateLibrary";

function App() {
  const routes = (
    <Layout>
      <Switch>
        <Route path="/create_library" component={CreateLibrary} />
        <Route path="/" exact component={Home} />
        <Redirect to="/" />
      </Switch>
    </Layout>
  );

  return <>{routes}</>;
}

export default App;
