import { render } from "solid-js/web";
import { Router } from "@solidjs/router";
import { lazy } from "solid-js";
import { useRoutes, Route, Routes, A } from "@solidjs/router";

import Home from "./Home.jsx";
import context from "./context";

function app(ctx) {
  const Comp1 = lazy(() => import("./comp1"));
  const Comp2 = lazy(() => import("./comp2"));

  return (props) => (
    <div>
      <Router>
        <nav>
          <A style={{ "margin-right": "10px" }} href="/">
            Home
          </A>
          <A style={{ "margin-right": "10px" }} href="/c1">
            Comp1
          </A>
          <A style={{ "margin-right": "10px" }} href="/c2">
            Comp2
          </A>
        </nav>
        <Routes>
          <Route path="/" component={Home} />
          <Route path="/c1" component={Comp1} />
          <Route path="/c2" component={Comp2} />
        </Routes>
      </Router>
    </div>
  );
}

const App = app(context);
render(() => <App />, document.getElementById("root"));
