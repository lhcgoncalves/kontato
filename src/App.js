import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import store from "./store/store";

import { routes } from "./config/routing";

const App = () => (
  <Provider store={store}>
    <Router>
      <div>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        ))}
      </div>
    </Router>
  </Provider>
);

export default App;