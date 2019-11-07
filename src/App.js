import React, { Component, lazy, Suspense } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
// import { AnimatedSwitch } from "react-router-transition";

// components
import routes from "./config/routes";
import Header from "./components/Header";
// pages

const asynsHomePage = lazy(
  () => import("./pages/Home") /* webpackChunkName: "home-page" */
);

const asynsContactPage = lazy(
  () => import("./pages/Contact") /* webpackChunkName: "contact-page" */
);

const asynsWebPage = lazy(
  () => import("./pages/UIUX") /* webpackChunkName: "web-page" */
);
const asynsGraphicPage = lazy(
  () => import("./pages/Graphic") /* webpackChunkName: "Graphic-page" */
);

const asynsProjectPage = lazy(
  () => import("./pages/Project") /* webpackChunkName: "project-page" */
);
const asynsErrorPage = lazy(
  () => import("./pages/Error") /* webpackChunkName: "error-page" */
);

export default class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path={routes.HOME} exact component={asynsHomePage} />
            <Route path={routes.PROJECT} component={asynsProjectPage} />
            <Route path={routes.CONTACT} component={asynsContactPage} />
            <Route path={routes.WEB} component={asynsWebPage} />
            <Route path={routes.GRAPHIC} component={asynsGraphicPage} />
            <Route path={routes.ERROR} component={asynsErrorPage} />
            <Redirect to={routes.ERROR} />
          </Switch>
        </Suspense>
      </>
    );
  }
}
