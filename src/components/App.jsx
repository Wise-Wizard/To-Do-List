import React from "react";

function App() {
  const [newTask, setTask] = React.useState("");
  const [taskArray, setArray] = React.useState([]);

  function updateTaskList(event) {
    const taskName = event.target.value;
    setTask(taskName);
  }

  function updateTaskArray() {
    setArray((prevItems) => {
      return [...prevItems, newTask];
    });
    setTask("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input
          type="text"
          name="inputTask"
          onChange={updateTaskList}
          value={newTask}
        />
        <button onClick={updateTaskArray}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {taskArray.map((task) => {
            return <li>{task}</li>;
          })}
          <li>{newTask}</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
