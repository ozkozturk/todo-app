import React, { useState } from 'react';
import Icon from './Icon';

const Task = ({todo, id, checkComplete, handleEditTodos}) => {
  const [onEdit, setOnEdit] = useState(false);
  const [editValue, setEditValue] = useState(todo.name);

  const handleEdit = () => {
    setOnEdit(true);
  }

  const cancelEdit = () => {
    setOnEdit(false);
  }

  const handleSave = () => {
    setOnEdit(false);
    if(editValue) handleEditTodos(editValue, id)
    else setEditValue(todo.name)
  }

  if(onEdit) {
    return (
      <li>
        <input
          type="text"
          id="editValue"
          className="edit-input"
          name="editValue"
          value={editValue}
          onChange={e => setEditValue(e.target.value)}
        />
        <button onClick={cancelEdit}>
          <Icon>x</Icon>
        </button>
        <button onClick={handleSave}>
          <Icon>check</Icon>
        </button>
      </li>
    );
  } else {
    return (
      <li>
        <label htmlFor={id} className={todo.complete ? "active" : ""}>
          <input
            type="checkbox"
            id={id}
            checked={todo.complete}
            onChange={() => checkComplete(id)}
          />
          {todo.name}
        </label>
        <button
          disabled={todo.complete}
          onClick={handleEdit}
        >
          <Icon>edit</Icon>
        </button>
      </li>
    );
  }

};

export default Task;
