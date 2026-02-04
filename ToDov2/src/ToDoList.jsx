import React, { useState } from "react";
import "./ToDoList.css";

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const handleChange = (e) => {
    setNewTask(e.target.value);
  };

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask("");
    }
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const moveTaskUp = (index) => {
    if (index > 0) {
      const updatedTasks = [...tasks];

      [updatedTasks[index], updatedTasks[index - 1]] = [
        updatedTasks[index - 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  };

  const moveTaskDown = (index) => {
    if (index < tasks.length - 1) {
      const updatedTasks = [...tasks];

      [updatedTasks[index], updatedTasks[index + 1]] = [
        updatedTasks[index + 1],
        updatedTasks[index],
      ];
      setTasks(updatedTasks);
    }
  };

  const editTask = (index) => {
    setEditIndex(index);
    const editTask = tasks.filter((_, i) => i === index);
    setNewTask(editTask);
  };
  
    const cancelEdit = () => {
      setEditIndex(null);
      setNewTask("");
    }
  
  const saveTask = () => {
    const updatedTasks = [...tasks];
    updatedTasks[editIndex] = newTask;
    setTasks(updatedTasks);
    cancelEdit();
  };

  return (
    <div className="to-do-list">
      <h1>To-Do Lists</h1>

      <div>
        <input
          type="text"
          placeholder="Enter your tasks."
          onChange={handleChange}
          value={newTask}
        ></input>
        {editIndex !== null ? (
          <>
            <button className="add-button" onClick={saveTask}>
              Edit
            </button>
            <button className="cancel-button" onClick={cancelEdit}>
              ✖️
            </button>
          </>
        ) : (
          <>
            <button className="add-button" onClick={addTask}>
              Add
            </button>
          </>
        )}
      </div>

      <ol>
        {tasks.map((task, index) => (
          <li key={index}>
            <span className="text">{task}</span>
            <button onClick={() => editTask(index)} className="move-button">
              ✍️
            </button>
            <button onClick={() => moveTaskUp(index)} className="move-button">
              👆
            </button>
            <button onClick={() => moveTaskDown(index)} className="move-button">
              👇
            </button>
            <button onClick={() => deleteTask(index)} className="delete-button">
              🗑️
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ToDoList;
