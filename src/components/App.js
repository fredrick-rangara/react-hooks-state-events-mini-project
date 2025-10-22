import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { TASKS, CATEGORIES } from "../data";

function App() {
  // State for the list of tasks
  const [tasks, setTasks] = useState(TASKS);
  // State for the currently selected category
  const [selectedCategory, setSelectedCategory] = useState("All");

  // Callback function to add a new task
  function handleAddTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  // Callback function to delete a task
  // We use the task's text as its unique identifier, as per the prompt
  function handleDeleteTask(taskTextToDelete) {
    setTasks(tasks.filter((task) => task.text !== taskTextToDelete));
  }

  // Filter the tasks to display based on the selected category
  const tasksToDisplay = tasks.filter((task) => {
    if (selectedCategory === "All") {
      return true; // Show all tasks
    }
    return task.category === selectedCategory; // Show only tasks in the selected category
  });

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter
        categories={CATEGORIES}
        selectedCategory={selectedCategory}
        onSelectCategory={setSelectedCategory}
      />
      <NewTaskForm
        categories={CATEGORIES}
        onTaskFormSubmit={handleAddTask}
      />
      <TaskList 
        tasks={tasksToDisplay} 
        onDeleteTask={handleDeleteTask} 
      />
    </div>
  );
}

export default App;