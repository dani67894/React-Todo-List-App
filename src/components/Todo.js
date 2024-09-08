import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

export default function Todo(props) {
  return (
    <div className='todo'>
      <p onClick={() => props.toggleComplete(props.task.id)} className={`${props.task.isCompleted ? "completed" : ""}`}>{props.task.task}</p>
      <div className='icons'>
        <FontAwesomeIcon icon={faPenToSquare} className='icon' onClick={() => props.editTodo(props.task.id)} />
        <FontAwesomeIcon icon={faTrash} className='icon' onClick={() => props.deleteTodo(props.task.id)} />
      </div>
    </div>
  );
}
