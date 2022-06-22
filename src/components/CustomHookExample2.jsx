import useLocalStorage from "../hooks/useLocalStorage";

const CustomHookExample2 = () => {
  const [task, setTask] = useLocalStorage("task", "");
  const [tasks, setTasks] = useLocalStorage("tasks", []);

  const onSubmit = (e) => {
    e.preventDefault();

    const taskObject = {
      task,
      completed: false,
      date: new Date().toLocaleDateString(),
    };

    setTasks([...tasks, taskObject]);
    setTask("");
  };

  return (
    <>
      <form className="w-50" onSubmit={onSubmit}>
        <div className="mb-3">
          <label htmlFor="" className="form-label">
            Task
          </label>
          <input
            type="text"
            className="form-control"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </div>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </form>
      <hr />
      {tasks.map((task, i) => (
        <h3 key={i}>{task.task}</h3>
      ))}
    </>
  );
};

export default CustomHookExample2;
