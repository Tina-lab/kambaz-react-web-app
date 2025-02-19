import { ReactNode } from "react";
export default function Square({ children }: { children: ReactNode }) {
  const num = Number(children);
  return (
    <div>
      <h4>Square of 4</h4>
      <span id="wd-square">{num * num}</span>
      <hr />
    </div>
  );
}
