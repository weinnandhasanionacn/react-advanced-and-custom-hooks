import { useRef } from "react";

const UseRefExample1 = () => {
  const inputRef = useRef();
  const paraRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    paraRef.current.innerText = inputRef.current.value;
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          ref={inputRef}
          type="text"
          id="name"
          className="form-control mb-2"
        />
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
        <p ref={paraRef} onClick={() => inputRef.current.focus()}>
          Hello
        </p>
      </form>
    </div>
  );
};

export default UseRefExample1;
