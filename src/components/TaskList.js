import React from "react";
import Task from "./Task";

function TaskList({ tasks, onDeleteTask }) {
  const taskElements = tasks.map((task) => (
    <Task
      key={task.text} // Using text as key, as implied by delete logic
      text={task.text}
      category={task.category}
      onDeleteTask={onDeleteTask}
    />
  ));

  return (
    <div className="tasks">
      <h5>Tasks</h5>
      {taskElements}
    </div>
  );
}

export default TaskList;