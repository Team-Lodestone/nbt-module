import { Match, Switch, createSignal } from "solid-js";
import CreateNBT from "./CreateNBT.js";
import Main from "./Main.js";
import NBTEditor from "./NBTEditor.js";

export type Page = "main" | "create-nbt" | "nbt-editor";

export const [page, setPage] = createSignal<Page>("main");

export default function App() {
  return (
    <>
      <Switch>
        <Match when={page() === "main"}>
          <Main/>
        </Match>
        <Match when={page() === "create-nbt"}>
          <CreateNBT/>
        </Match>
        <Match when={page() === "nbt-editor"}>
          <NBTEditor/>
        </Match>
      </Switch>
    </>
  );
}