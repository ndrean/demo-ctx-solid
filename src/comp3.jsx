import context from "./context";
import comp1 from "./comp1";
import comp2 from "./comp2";

export default (ctx) => {
  const { bool, num } = ctx;
  const Comp1 = comp1(context);
  const Comp2 = comp2(context);

  return (props) => (
    <div>
      <Comp1 stateBool={bool}>Component 1 with props</Comp1>
      <Comp2 num={num}>Component with props</Comp2>
      {props?.children}
    </div>
  );
};
