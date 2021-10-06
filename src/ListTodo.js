import React, { useState } from 'react';
import ListForm from './ListForm';
import './App.scss';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

const ListTodo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: ''
  });

  const submitUpdate = value => {
    updateTodo(edit.id, value);
    setEdit({
      id: null,
      value: ''
    });
  };

  if (edit.id) {
    return <ListForm edit={edit} onSubmit={submitUpdate} />;
  }

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
      key={index}
    >
      <div className="todo-text" key={todo.id} onClick={() => completeTodo(todo.id)}>
        <p>{todo.text}</p>
      </div>
      <div className='icons'>
        <RiCloseCircleLine
          onClick={() => removeTodo(todo.id)}
          className='delete-icon'
          size="32px"
        />
        <TiEdit
          onClick={() => setEdit({ id: todo.id, valueText: todo.text, valueTime: todo.time })}
          className='edit-icon'
          size="32px"
        />
        </div>
      </div>
  ));
};

export default ListTodo