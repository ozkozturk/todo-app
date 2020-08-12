import React, { useState, useContext, useRef, useEffect } from 'react';
import { DataContext } from './DataProvider';
import Icon from './Icon';

const TaskInput = () => {
  const [todos, setTodos] = useContext(DataContext);
  const [todoName, setTodoName] = useState("");
  const todoInput = useRef();

  const handleOnChange = e => {
    setTodoName(e.target.value);
  }

  const addTodo = e => {
    e.preventDefault();
    setTodos([...todos, {name: todoName, complete: false}])
    setTodoName("");
    todoInput.current.focus();
  }

  useEffect(() =>{
    todoInput.current.focus();
  }, [])

  return (
    <form
      autoComplete="off"
      onSubmit={addTodo}
    >
      <input
        type="text"
        name="todos"
        id="todos"
        required
        placeholder="Enter a Task"
        value={todoName}
        ref={todoInput}
        onChange={handleOnChange}
      />
      <button type="submit">
        <Icon>circle-plus</Icon>
      </button>
    </form>
  );
};

export default TaskInput;
