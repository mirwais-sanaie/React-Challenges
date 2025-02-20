/* eslint-disable no-unused-vars */
// import { useState } from "react";
import { useState } from "react";
import "./TodoCategory.css";
const data = [
  {
    id: 1,
    title: "Twee1",
    description: "This is task 1",
    category: "Work",
  },
  {
    id: 2,
    title: "Task 2",
    description: "This is task 2",
    category: "Personal",
  },
  {
    id: 3,
    title: "Task 3",
    description: "This is task 3",
    category: "Shopping",
  },
];

function Test() {
  const [tasks, setTasks] = useState(data);
  const [categories, setCategories] = useState([
    "Work",
    "Personal",
    "Shopping",
  ]);
  const [newTitle, setNewTitle] = useState("");
  const [newDescription, setNewDescription] = useState("");
  const [newCategory, setNewCategory] = useState("");

  const handleCreateNewItem = () => {
    const id = crypto.randomUUID();
    const newItem = {
      title: newTitle,
      description: newDescription,
      category: newCategory,
      id,
    };
    setTasks([...tasks, newItem]);

    console.log(tasks);
  };

  return (
    <div className="todo-app">
      <h1>To-Do List with Task Categorization</h1>

      {/* Add new task form */}
      <div className="add-task-form">
        <h2>Add New Task</h2>
        <input
          type="text"
          name="title"
          placeholder="Task Title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
        <textarea
          name="description"
          placeholder="Task Description"
          value={newDescription}
          onChange={(e) => setNewDescription(e.target.value)}
        />

        <select
          name="category"
          value={newCategory}
          onChange={(e) => setNewCategory(e.target.value)}
        >
          <option value="">Select Category</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <button onClick={handleCreateNewItem}>Add Task</button>
      </div>

      <div className="tasks-container">
        {categories.map((category, i) => {
          const categoryTask = tasks.filter(
            (task) => task.category === category
          );
          return (
            <div className="category-container" key={i}>
              <h2>{category}</h2>
              {categoryTask.map((task) => (
                <div key={task.id}>
                  <h3>{task.title}</h3>
                  <p>{task.description}</p>
                  <button>
                    {task.completed ? "Mark Incomplete" : "Mark Complete"}
                  </button>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Test;
