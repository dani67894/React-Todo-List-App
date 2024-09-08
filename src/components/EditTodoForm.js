import React, { useState } from 'react'

export default function EditTodoForm(props) {

  const [value, setValue] = useState(props.task.task)
  const handleOnChange = (e) => {
    setValue(e.target.value)
    console.log(value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    props.editTask(value, props.task.id);
    setValue("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder='Update Task' value={value} onChange={handleOnChange} />
      <button type="submit">Update Task</button>
    </form>
  )
}

