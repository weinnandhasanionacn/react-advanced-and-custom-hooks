import { useRef, useEffect, useState } from "react";

const UseRefExample2 = () => {
  const renders = useRef(1);
  const prevName = useRef();
  const [name, setName] = useState("");

  useEffect(() => {
    renders.current += 1;
    prevName.current = name;
  }, [name]);

  return (
    <div>
      <h1>Renders: {renders.current}</h1>
      <input
        type="text"
        className="form-control mb-3"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Previous name: {prevName.current}</p>
    </div>
  );
};

export default UseRefExample2;
