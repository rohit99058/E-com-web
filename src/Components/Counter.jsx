import React, { useEffect, useState } from "react";

const Counter = () => {
  let [counter, setCounter] = useState(0);

  useEffect(() => {
    let timer = setInterval(() => {
      setCounter(counter + 1);
    }, 1000);

    return () => {
      clearInterval(timer);  // This is the cleanup function which is responsible to clean the previous data when useEffect executed again, it protect from memory leak.
    };
  }, [counter]);

  return (
    <div>
      <h3>{counter}</h3>
    </div>
  );
};

export default Counter;
