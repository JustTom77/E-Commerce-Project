import React from "react";
import { Switch, Route } from "react-router";
import "./App.css";

import Hompepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Hompepage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
