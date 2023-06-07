import router from "./routes";

export default (ctx) => {
  return function Navbar(props) {
    const cb = (e) => {
      e.preventDefault();
      history.replaceState("", "", e.target.name);
      router.resolve(e.target.pathname).then((page) => {
        document.getElementById("component").replaceChildren(page());
      });
    };

    return (
      <nav>
        <a href="/c1" name="c1" onClick={cb}>
          Comp1
        </a>
        <a href="/c2" name="c2" onClick={cb}>
          Comp2
        </a>
        <a href="/c3" name="c3" onClick={cb}>
          Comp3
        </a>
        <hr />
      </nav>
    );
  };
};
