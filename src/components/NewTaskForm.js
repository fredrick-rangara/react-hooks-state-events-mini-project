import React, { useState } from "react";

function NewTaskForm({ categories, onTaskFormSubmit }) {
  // Filter out "All" for the dropdown
  const categoriesToDisplay = categories.filter((cat) => cat !== "All");

  // State for the controlled form inputs
  const [text, setText] = useState("");
  const [category, setCategory] = useState(categoriesToDisplay[0]); // Default to first category

  function handleSubmit(event) {
    event.preventDefault(); // Prevent browser refresh
    
    // Create the new task object
    const newTask = {
      text: text,
      category: category,
    };
    
    // Call the callback prop from App
    onTaskFormSubmit(newTask);
    
    // Reset the form fields
    setText("");
    setCategory(categoriesToDisplay[0]);
  }

  return (
    <form className="new-task-form" onSubmit={handleSubmit}>
      <label>
        Details
        <input
          type="text"
          name="text"
          value={text} // Controlled input
          onChange={(e) => setText(e.target.value)}
        />
      </label>
      <label>
        Category
        <select
          name="category"
          value={category} // Controlled select
          onChange={(e) => setCategory(e.target.value)}
        >
          {categoriesToDisplay.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;