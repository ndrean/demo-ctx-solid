import { render } from "solid-js/web";
import { Router } from "@solidjs/router";
import { lazy } from "solid-js";
import { useRoutes, Route, Routes, A } from "@solidjs/router";

// import navbarSolid from "./navbarSolid";
// import routes from "./routes";
const Comp1 = lazy(() => import("./comp1"));
const Comp2 = lazy(() => import("./comp2"));

import Home from "./home";
import context from "./context";

function app(ctx) {
  //   const NavBar = navbarSolid(context);
  //   const Routes = useRoutes(routes);

  return (props) => (
    <div>
      <Router>
        <nav>
          <A href="/">Home</A>
          <A href="/c1">Comp1</A>
          <A href="/c2">Comp2</A>
        </nav>
        <Routes>
          <Route path="/" component={Home} />
          <Route path="/c1" component={Comp1} />
          <Route path="/c2" component={Comp2} />
        </Routes>
      </Router>
      {/* <Navbar style={{ display: "inline-block;", "margin-right": "10px;" }} /> */}
      {/* <div id="component"></div> */}
    </div>
  );
}

const App = app(context);
// history.pushState("", "", "/");
render(() => <App />, document.getElementById("root"));
