import React, { useEffect, useState } from "react";
import "./index.less";
function Index(props) {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  useEffect(() => {
    const handleChangePosition = (e) => {
      console.log(e);
      const { screenX, clientY } = e;
      setY(clientY);
      setX(screenX);
    };
    window.addEventListener("mousemove", handleChangePosition);
    return ()=> {
      window.removeEventListener("mousemove", handleChangePosition);
    };
  },[]);

  return (
    <div className="game">
      <div
        className="ball"
        style={{ transform: `translate(${x}px, ${y - 64}px)` }}
      ></div>
    </div>
  );
}
export default Index;
