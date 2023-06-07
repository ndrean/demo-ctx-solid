// import UniversalRouter from "universal-router";
// import context from "./context";
import { lazy } from "solid-js";

// const routes
export default [
  {
    path: "/",
    title: "Home",
    component: lazy(() => import("./home")),
  },
  {
    path: "/c1",
    title: "comp1",
    component: lazy(() => import("./comp1")),
    // action: async (context) => {
    // const { default: page } = await import("./comp1");
    // return page(context);
    // },
  },
  {
    path: "/c2",
    title: "comp2",
    component: lazy(() => import("./comp2")),
    // action: async (context) => {
    //   const { default: page } = await import("./comp2");
    //   return page(context);
    // },
  },
  // {
  //   path: "/c3",
  //   action: async (context) => {
  //     const { default: page } = await import("./comp3");
  //     return page(context);
  //   },
  // },
];

// const router = new UniversalRouter(routes, { context });
// export default router;
