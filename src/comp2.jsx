import { createSignal } from "solid-js";
import context from "./context";

const comp2 = (ctx) => {
  const { data, bool } = ctx;
  console.log(ctx);
  const [nb, setNb] = createSignal(0);

  return function Comp2() {
    setNb((x) => ++x);
    return (
      <div>
        <p>Comp1 generated this data: {data()}</p>
        <p>Comp1 changed the state "bool": {bool() ? "true" : "false"}</p>
        <p>This component was called {nb()} times.</p>
      </div>
    );
  };
};

export default comp2(context);
