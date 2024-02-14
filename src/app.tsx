import { useState } from "preact/hooks";
import publications from "./publications";

// prettier-ignore
export function App() {
  const [index, _] = useState(0);

  return (
    <div class="font-Azonix">
      <Nav />
      {/* @ts-ignore */}
      <div class="_df_book w-full" id="flipbook_example" source={publications[index].file}></div>
      {/* <div class="_df_book w-full" id="flipbook_example" source={"/cache" + publications[index].file}></div> */}
    </div>
  );
}

function Nav() {
  return (
    <div class="p-2 bg-slate-400">
      <p>Cache 2024</p>
    </div>
  );
}
