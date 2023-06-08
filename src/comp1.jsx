import { createEffect, createResource, createSignal } from "solid-js";
import context from "./context";

// async mock
const asyncFunction = async (x) =>
  new Promise((resolve, reject) => {
    return setTimeout(() => resolve(x * 100), 2000);
  });

const comp1 = (ctx) => {
  const { bool, setBool, setData, data } = ctx;

  const updateAsync = (state) => {
    const [result] = createResource(state, asyncFunction);
    createEffect(() => setData(result()));
    return result;
  };

  return function Comp1() {
    const [slide, setSlide] = createSignal(10);

    const result = updateAsync(slide());

    return (
      <div>
        <input
          type="range"
          min="10"
          max="100"
          value={slide()}
          onchange={(e) => {
            setSlide(e.target.value);
            updateAsync(slide());
          }}
        />
        <p>{slide()}</p>
        <p> This data will be available soon: {result()}</p>
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
