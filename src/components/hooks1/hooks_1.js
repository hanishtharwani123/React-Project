import React, { useState } from "react";
import "./hook.css";

const Hooks_1 = () => {
  const [myNum, setmyNum] = useState(0);

  return (
    <>
      <div className="container">
        <p>{myNum}</p>
        <button className="button" onClick={() => setmyNum(myNum + 2)}>
          Increament
        </button>
      </div>
    </>
  );
};

export default Hooks_1;
