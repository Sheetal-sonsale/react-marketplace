import { useState } from "react";
import Child1 from "./child1";
import Child2 from "./child2";

function Parent() {
  const [name, setName] = useState("");

  return (
    <>
      <div>parent</div>
      <Child1 name={name} setName={setName} />
      <Child2 name={name} />
      {name}
    </>
  );
}

export default Parent;
