import { createResource, createSignal } from "solid-js";
import context from "./context";

// async mock
const asyncFunction = (ctx) => (x) =>
  new Promise((resolve, reject) =>
    setTimeout(() => resolve(x * 100), 1000)
  ).then(ctx.setData);

const comp1 = (ctx) => {
  const { bool, setBool, data, slide, setSlide } = ctx;

  return function Comp1() {
    // first async call, sets the state and then gets it
    !data() && createResource(10, asyncFunction(ctx));

    return (
      <div>
        <input
          type="range"
          min="10"
          max="100"
          value={slide()}
          onchange={(e) => {
            setSlide(e.currentTarget.value);
            // dynamic async call
            createResource(e.currentTarget.value, asyncFunction(ctx));
          }}
        />
        <p>{slide()}</p>
        <p>Initial async render: {data()}</p>
        <p> Async dynamic render {data()}</p>
        <p></p>
        <p>The state "bool" set in the context: {bool() ? "true" : "false"}</p>
        <button onClick={() => setBool((v) => !v)}>Toggle bool</button>
      </div>
    );
  };
};

export default comp1(context);
