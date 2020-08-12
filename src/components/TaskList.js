import React, { useContext } from 'react';
import Task from './Task';
import { DataContext } from './DataProvider';

const TaskList = () => {
  const [todos, setTodos] = useContext(DataContext);

  const handleComplete = id => {
    const newTodo = [...todos];
    newTodo.forEach((todo, index) => {
      if(index === id) todo.complete = !todo.complete
    });
    setTodos(newTodo);
  };

  const handleEditTodos = (editValue, id) => {
    const newTodos = [...todos];
    newTodos.forEach((todo, index) => {
      if(index === id) todo.name = editValue;
    })
    setTodos(newTodos);
  }

  return (
    <ul>
      {
        todos.map((todo, index) => (
          <Task
            todo={todo}
            key={index}
            id={index}
            checkComplete={handleComplete}
            handleEditTodos={handleEditTodos}
          />
        ))
      }
    </ul>
  );
};

export default TaskList;
