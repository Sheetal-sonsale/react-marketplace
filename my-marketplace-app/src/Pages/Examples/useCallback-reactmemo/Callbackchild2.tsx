import React from "react";

function Callbackchild2() {
  console.log("callbackchild2");
  return <div>Callbackchild2</div>;
}

export default React.memo(Callbackchild2);
