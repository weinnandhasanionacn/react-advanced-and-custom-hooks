import React from "react";
import useFetch from "../hooks/useFetch";

const CustomHookExample1 = () => {
  const [data, loading] = useFetch(
    "https://jsonplaceholder.typicode.com/posts",
    {}
  );

  if (loading) return <h3>Loading...</h3>;

  return (
    <ul>
      {data.map((d) => (
        <li key={d.id}>{d.title}</li>
      ))}
    </ul>
  );
};

export default CustomHookExample1;
