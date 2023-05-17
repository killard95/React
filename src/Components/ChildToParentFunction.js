import React from "react";
import { useState } from "react";

export default function Parent() {
  const [data, setData] = useState(null);

  const Callback = (data) => {
    setData(data);
  };
  return (
    <div>
      <Child dataFromParent={Callback} />
      {data}
    </div>
  );
}

function Child(props) {
  const onTrigger = (event) => {
    console.log("tstst");
    event.preventDefault();
    props.dataFromParent("data from child to parent");
  };
  return (
    <form onSubmit={onTrigger}>
      <input type="submit" value="submit" />
    </form>
  );
}
