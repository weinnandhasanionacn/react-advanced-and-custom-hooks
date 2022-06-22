import { useCallback, useState, memo } from "react";

const UseCallbackExample = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = useCallback(
    () => setTasks((tasks) => [...tasks, "some task"]),
    [setTasks]
  );

  return (
    <div>
      <Button addTask={addTask} />
      <ul>
        {tasks.map((task, i) => (
          <li key={i}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

const Button = memo(({ addTask }) => {
  console.log("Button rendered");

  return (
    <div>
      <button className="btn btn-primary" onClick={addTask}>
        Add Task
      </button>
    </div>
  );
});

export default UseCallbackExample;
