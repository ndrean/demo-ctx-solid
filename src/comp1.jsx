import { createEffect, createSignal, createResource } from "solid-js";
import context from "./context";

const comp1 = (ctx) => {
  // const { bool, setBool, num } = ctx;

  const asyncHard = async () =>
    new Promise((resolve, reject) => {
      return setTimeout(() => resolve(20), 200);
    });

  const [data] = createResource(asyncHard);

  return function Comp1(props) {
    // const [bool, setBool] = createSignal(false);

    createEffect(() => {
      ctx.data = data();
      ctx.ok = true;
    });

    return (
      <div>
        {/* <p>The state "bool" is: {ctx.bool() ? "true" : "false"}</p> */}
        <p> This data will be available soon: {data()}.</p>
        <p>We passed "ok: true" in the context</p>
        <p>The state "bool" via the context: {ctx.bool() ? "true" : "false"}</p>
        {props?.children}
        <button onClick={() => ctx.setBool((v) => !v)}>Toggle bool</button>
      </div>
    );
  };
};

export default comp1(context);
