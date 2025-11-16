import React from "react";
type propsType = {
  buttonName: string;
  onClick: () => void;
  count: number;
};
const UseCallBackChild = React.memo((props: propsType) => {
  console.log("hyyyy");
  return (
    <>
      <h1>hy i am child the count is :{props.count}</h1>
      <button onClick={props.onClick}>{props.buttonName}</button>
    </>
  );
});

export default UseCallBackChild;
