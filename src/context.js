import { createSignal } from "solid-js";

const [bool, setBool] = createSignal(false);
const [data, setData] = createSignal(0);

export default {
  bool,
  setBool,
  data,
  setData,
};
