import React from "react";
import Task from "./Task";

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

  function deleteTask(id) {
    setArray((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
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
          {taskArray.map((task, index) => {
            return (
              <Task key={index} id={index} taskName={task} click={deleteTask} />
            );
          })}
          <li>{newTask}</li>
        </ul>
      </div>
    </div>
  );
}

export default App;
