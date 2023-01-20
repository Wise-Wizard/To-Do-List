import React from "react";
function Task(props) {
  return (
    <div
      onClick={() => {
        props.click(props.id);
      }}
    >
      <li>{props.taskName}</li>
    </div>
  );
}
export default Task;
