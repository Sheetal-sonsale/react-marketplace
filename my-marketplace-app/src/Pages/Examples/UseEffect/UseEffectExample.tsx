import { useEffect, useState } from "react";

function UseEffectExample() {
  const [count, setCount] = useState(0);

  //   phle render + har render p chalega
  useEffect(() => {
    console.log("use effect 1");
    alert("hy");
  });
  // sirf phle render p chalega
  useEffect(() => {
    console.log("use effect 2");
  }, []);
  // phle render + dependency change dono pe chalega
  useEffect(() => {
    console.log("use effect 3");
  }, [count]);

  //   cleanup function
  useEffect(() => {
    alert("count is updated ");
    return () => {
      alert("count is unmounted");
    };
  }, [count]);

  function handlIncrement() {
    console.log("in function ");
    setCount((pre: number) => pre + 1);
  }
  return (
    <>
      <button onClick={handlIncrement}>increment</button>
      <div>UseEffectExample count is: {count}</div>
    </>
  );
}

export default UseEffectExample;
