import React, { useEffect, useState } from "react";

import { useStateContext } from "../contexts/ContextProvider";

import { AiOutlineDelete } from "react-icons/ai";
import { MdPlaylistAdd } from "react-icons/md";
import { RiEditLine } from "react-icons/ri";

const MyTasks = () => {
  const { currentColor } = useStateContext();

  // For the array of todos and save to localStorage
  const [todos, setTodos] = useState(() => {
    const saveData = localStorage.getItem("todos");

    if (saveData) {
      return JSON.parse(saveData);
    } else {
      return [];
    }
  });

  // For the input
  const [todoInput, setTodoInput] = useState("");

  // For the edit button
  const [toggleSubmit, setToggleSubmit] = useState(true);

  // For the update task
  const [isUpdateTask, setIsUpdateTask] = useState(null);

  /* Functions */
  // For add the "todo" task
  const addTodo = () => {
    if (!todoInput) {
      alert("data");
    } else if (todoInput && !toggleSubmit) {
      setTodos(
        todos.map((elem) => {
          if (elem.id === isUpdateTask) {
            return { ...elem, task: todoInput };
          }
          return elem;
        }),
      );
      setToggleSubmit(true);
      setTodoInput();
      setIsUpdateTask(null);
    } else {
      let newTodo = {
        id: Math.random().toString(36).substr(2, 9),
        task: todoInput,
        complete: false,
      };
      setTodos([...todos, newTodo]);
    }
  };

  // For click the button
  const handleSubmit = (event) => {
    event.preventDefault();
    addTodo(todoInput);
    setTodoInput("");
  };

  // For press the "enter"
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleSubmit(event);
    }
  };

  // For change the input
  const changeToggle = (id) => {
    setTodos([
      ...todos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : { ...todo },
      ),
    ]);
  };

  // For remove the task
  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };

  // For edit the task
  const editTodoItem = (id) => {
    let newEditTodoItem = todos.find((item) => item.id === id);
    setToggleSubmit(false);
    setTodoInput(newEditTodoItem.task);
    setIsUpdateTask(id);
  };

  // LocalStorage
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="todos">
      <div className="apps__container">
        <h1 className="todos__title">
          My Tasks:
          <span
            style={{
              color: currentColor,
              border: "1px solid rgb(166, 163, 163))",
              padding: "5px 10px",
              borderRadius: "5px",
            }}
          >
            {todos.length}
          </span>
        </h1>

        <form onSubmit={handleSubmit} className="todos-form">
          <input
            className="todos-input"
            type="text"
            value={todoInput}
            onChange={(event) => setTodoInput(event.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Add a new task..."
          />
          {toggleSubmit ? (
            <button className="todos-btn">
              <MdPlaylistAdd />
            </button>
          ) : (
            <button className="todos-btn">
              <RiEditLine />
            </button>
          )}
        </form>

        {todos.length > 0 ? (
          <ul className="todos-menu">
            {todos.map((todo) => (
              <li className="todos-list" key={todo.id}>
                <div className="todos-list__container">
                  <input
                    type="checkbox"
                    className="todos-input__checkbox"
                    onClick={() => changeToggle(todo.id)}
                  />
                  <p
                    style={{ color: "gray" }}
                    className={
                      todo.complete
                        ? "todos-description strike"
                        : "todos-description"
                    }
                  >
                    {todo.task}
                  </p>
                </div>

                <div className="todos-settings">
                  <li
                    className="todos-settings__item"
                    onClick={() => editTodoItem(todo.id)}
                  >
                    <RiEditLine />
                  </li>
                  <li
                    className="todos-settings__item"
                    onClick={() => removeTask(todo.id)}
                  >
                    <AiOutlineDelete />
                  </li>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <div
            style={{
              textAlign: "center",
              margin: "30px 0",
              fontSize: 20,
              color: "#555",
            }}
          >
            No tasks
          </div>
        )}
      </div>
    </div>
  );
};

export default MyTasks;
