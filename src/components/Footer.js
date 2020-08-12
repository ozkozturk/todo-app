import React, { useState, useContext } from 'react';
import { DataContext } from './DataProvider';
import Icon from './Icon';

const Footer = () => {
  const [checkAll, setCheckAll] = useState(false);
  const [todos, setTodos] = useContext(DataContext);

  const handleCheckAll = () => {
    const newTodo = [...todos];
    newTodo.forEach(todo => {
      todo.complete = !checkAll;
    })
    setTodos(newTodo);
    setCheckAll(!checkAll);
  }

  const numberOfTask = () => {
    return todos.filter(todo => todo.complete === false);
  }

  const deleteTodo = () => {
    const newTodo = todos.filter(todo =>{
      return todo.complete === false;
    })
    setTodos(newTodo);
    setCheckAll(false);
  }

  return (
    <span>
      {
        todos.length === 0
          ? <h2>Do you have any plan?</h2>
          : <div className="row">
            <label htmlFor="all">
              <input
                type="checkbox"
                name="all"
                id="all"
                onChange={handleCheckAll}
                checked={checkAll}
              />
              All
            </label>
            <p>You have {numberOfTask().length} to do</p>
            <button id="delete" onClick={deleteTodo}><Icon>trash</Icon></button>
          </div>
      }
    </span>
  );
};

export default Footer;
