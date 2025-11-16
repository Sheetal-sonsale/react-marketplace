import { useEffect, useState } from "react";

function Test() {
  const [c, setC] = useState(0);

  // const obj = { x: 1 };
  const a = [1, 4, 5, 6];
  const b = 10;

  useEffect(() => {
    console.log("Effect");
  }, [a]);
  return (
    <>
      <button onClick={() => setC((prev: number) => prev + 1)}>
        increment
      </button>
      {c}
    </>
  );
}

export default Test;
