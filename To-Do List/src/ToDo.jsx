import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { use } from "react";
import "./ToDo.css";
import { FaTrash, FaCheck, FaUndo } from "react-icons/fa";

function ToDo() {
  //Existing ToDos
  const [todos, setToDos] = useState([]);

  //New ToDos
  const [newToDo, setNewToDo] = useState({
    taskName: "",
    description: "",
    status: "Not Completed",
  });

  const [filter, setFilter] = useState("all");

  const handleChange = (e) => {
    setNewToDo({ ...newToDo, [e.target.name]: e.target.value });
  };

  const handleCreateTask = () => {
    setToDos([...todos, newToDo]);

    setNewToDo({ taskName: "", description: "", status: "Not Completed" });
  };

  const filteredToDos = todos.filter((todos) => {
    if (filter === "all") {
      return true;
    }
    return todos.status === filter;
  });

  const handleUpdateToDo = (index, newStatus) => {
    const updatedToDo = todos.map((todo, i) => {
      if (i === index) return { ...todo, status: newStatus };

      return todo;
    });

    setToDos(updatedToDo);
  };

  const deleteToDo = (index) => {
    const updatedToDo = todos.filter((_, i) => i !== index);

    setToDos(updatedToDo);
  };

  return (
    <div className="">
      <h1 className="text-center heading">To-Do APPLICATION</h1>
      <div className="container mt-5">
        <h2 className="text-center"></h2>
        <div className="nav-pan">
          <ul className="nav nav-pills nav-fill">
            <li className="nav-item">
              <button
                className={filter === "all" ? "nav-link active1" : "nav-link"}
                value="all"
                aria-current="page"
                href="#"
                style={{ color: "#d3dce4" }}
                onClick={() => {
                  setFilter("all");
                }}
              >
                All
              </button>
            </li>
            <li className="nav-item">
              <button
                className={
                  filter === "completed" ? "nav-link active1" : "nav-link"
                }
                value="completed"
                aria-current="page"
                href="#"
                style={{ color: "#d3dce4" }}
                onClick={() => {
                  setFilter("completed");
                }}
              >
                Completed
              </button>
            </li>
            <li className="nav-item">
              <button
                className={
                  filter === "Not Completed" ? "nav-link active1" : "nav-link"
                }
                value="Not Completed"
                aria-current="page"
                href="#"
                style={{ color: "#d3dce4" }}
                onClick={() => {
                  setFilter("Not Completed");
                }}
              >
                Pending
              </button>
            </li>
          </ul>
        </div>

        <div className="input">
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Add Task"
              name="taskName"
              value={newToDo.taskName}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              name="description"
              placeholder="Description"
              value={newToDo.description}
              onChange={handleChange}
            ></input>
          </div>
        </div>

        <div className="buttonplace mb-2">
          <button className="btn1" onClick={handleCreateTask}>
            Add Tasks
          </button>
        </div>
      </div>
      {/* <div className="mt-3">
        <select
          className="form-select"
          onChange={(e) => {
            setFilter(e.target.value);
          }}
        >
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="Not Completed">Not Completed</option>
        </select>
      </div> */}

      <div className="wrapper mt-5">
        {filteredToDos.map((todo, index) => (
          <div key={index} className="output">
            <div className="card">
              <div className="card-body">
                <h2
                  className="card-title"
                  style={{
                    textDecoration:
                      todo.status === "completed" ? "line-through" : "none",
                  }}
                >
                  {todo.taskName}
                </h2>
                <br />
                <p
                  className="card-text"
                  style={{
                    textDecoration:
                      todo.status === "completed" ? "line-through" : "none",
                  }}
                >
                  {todo.description}
                </p>
                {/* <p className="card-text" >Status : {todo.status}</p> */}
                <div>
                  <button
                    className="btn btn-secondary"
                    onClick={() =>
                      handleUpdateToDo(
                        index,
                        todo.status === "completed"
                          ? "Not Completed"
                          : "completed"
                      )
                    }
                  >
                    {todo.status === "completed" ? (
                      <FaUndo size={20} color="white" />
                    ) : (
                      <FaCheck size={20} color="white" />
                    )}
                  </button>
                  <button
                    className="btn btn-danger mx-3"
                    onClick={() => deleteToDo(index)}
                  >
                    <FaTrash size={20} color="white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ToDo;
