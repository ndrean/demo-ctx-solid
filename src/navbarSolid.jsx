import { A } from "@solidjs/router";

export default (ctx) => (props) => {
  const cb = (e) => {
    e.preventDefault();
  };
  return (
    <nav>
      <A href="/">Home</A>
      <A href="/c1">Comp1</A>
      <A href="/c2">Comp2</A>
    </nav>
  );
};
