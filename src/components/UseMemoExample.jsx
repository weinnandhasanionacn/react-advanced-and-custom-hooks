import { useState, useEffect, useRef, useMemo } from "react";

const UseMemoExample = () => {
  const [number, setNumber] = useState(1);
  const [inc, setInc] = useState(0);
  const renders = useRef(1);

  useEffect(() => {
    renders.current += 1;
  });

  const srqt = useMemo(() => getSqrt(number), [number]);

  const onClick = () => {
    setInc((prevState) => prevState + 1);
  };

  return (
    <div>
      <input
        type="number"
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />

      <h2 className="my-3">
        The sqrt of {number} is {srqt}
      </h2>

      <button onClick={onClick} className="btn btn-primary">
        Re Render
      </button>
      <h3>Renders: {renders.current}</h3>
    </div>
  );
};

const getSqrt = (n) => {
  for (let i = 0; i < 10000; i++) {
    console.log(i);
  }

  return Math.sqrt(n);
};

export default UseMemoExample;
