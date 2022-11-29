import React, { useState } from "react";
import "./style.css";

const New = () => {
  const initialData = 15;
  const [myNum, setmyNum] = useState(initialData);
  return (
    <>
      <div className="container">
        <p>{myNum}</p>
        <div className="btn-1">
          <button className="button" onClick={() => setmyNum(myNum + 1)}>
            Increment
          </button>
        </div>
        <div className="btn-2">
          <button className="button" onClick={() => setmyNum(myNum - 1)}>
            Decrement
          </button>
        </div>
      </div>
    </>
  );
};

export default New;
