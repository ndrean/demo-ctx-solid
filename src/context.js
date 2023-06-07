import { createSignal } from "solid-js";

const [bool, setBool] = createSignal(false);
const [num, setNum] = createSignal(0);

export default {
  bool,
  setBool,
  // num,
  // setNum,
  data: "",
};
