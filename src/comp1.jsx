import { createResource, createSignal } from "solid-js";
import context from "./context";

// async mock
const asyncFunction = (ctx) => async (x) =>
  new Promise((resolve, reject) => {
    return setTimeout(() => resolve(x * 100), 1000);
  }).then((r) => ctx.setData(r));

const comp1 = (ctx) => {
  const { bool, setBool, setData, data } = ctx;

  return function Comp1() {
    const [slide, setSlide] = createSignal(10);

    // const [initresult] =
    createResource(10, asyncFunction(ctx));

    return (
      <div>
        <input
          type="range"
          min="10"
          max="100"
          value={slide()}
          onchange={(e) => {
            setSlide(e.currentTarget.value);
            const [result] = createResource(
              e.currentTarget.value,
              asyncFunction(ctx)
            );
          }}
        />
        <p>{slide()}</p>
        <p> This data will be available soon: {data()}</p>
        <p></p>
        <p>
          The state "bool" was sest in the context: {bool() ? "true" : "false"}
        </p>
        <button onClick={() => setBool((v) => !v)}>Toggle bool</button>
      </div>
    );
  };
};

export default comp1(context);
