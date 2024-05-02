import "./Header.css";

import type { ParentProps } from "solid-js";

export default function Header(props: ParentProps) {
  return (
    <h2 class="text-center Header">{props.children}</h2>
  );
}