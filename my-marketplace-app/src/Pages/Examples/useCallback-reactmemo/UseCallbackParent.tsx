import { useCallback, useState } from "react";
import UseCallBackChild from "./UseCallBackChild";
import Callbackchild2 from "./Callbackchild2";

function UseCallbackParent() {
  const [count, setcount] = useState(0);

  const handleCount = useCallback(() => {
    setcount(count + 1);
  }, [count]);
  return (
    <>
      count:{count}
      <button onClick={handleCount}>increment</button>
      <UseCallBackChild
        buttonName="click me"
        onClick={handleCount}
        count={count}
      />
      <Callbackchild2 />
    </>
  );
}

export default UseCallbackParent;
