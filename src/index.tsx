import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/App.css";
import { HashRouter, Route, Switch, Redirect } from "react-router-dom";
import AuthLayout from "./layouts/auth";
import AdminLayout from "./layouts/admin";
import RTLLayout from "./layouts/rtl";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme/theme";
import { CreatePartner } from "views/admin/partners/View";

ReactDOM.render(
  <ChakraProvider theme={theme}>
    <React.StrictMode>
      <HashRouter>
        <Route
          path={"/admin/partners/create"}
          component={CreatePartner}
          key={"createPartner"}
        />
        <Switch>
          <Route path={`/auth`} component={AuthLayout} />
          <Route path={`/admin`} component={AdminLayout} />

          <Route path={`/rtl`} component={RTLLayout} />
          <Redirect from="/" to="/admin" />
        </Switch>
      </HashRouter>
    </React.StrictMode>
  </ChakraProvider>,
  document.getElementById("root")
);
