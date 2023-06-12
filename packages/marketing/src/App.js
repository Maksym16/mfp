import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import { StylesProvider, createGenerateClassName } from "@material-ui/core/styles";

import Landing from './components/Landing'
import Pricing from './components/Pricing'

// in order to avoid className collision we need to autogenerate prefix
// this prefix will replace auto-generated prefix frix from jss1 to ma2
const generateClassName = createGenerateClassName({
  productionPrefix: 'ma',
});

export default () => {
  return (<div>
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <Switch>
          <Route exact path="/pricing" component={Pricing} />
          <Route path="/" component={Landing}/>
        </Switch>
        </StylesProvider>
    </BrowserRouter>
  </div>)
};