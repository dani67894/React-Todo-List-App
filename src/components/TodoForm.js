import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
export default function TodoForm(props) {

  const [value, setValue] = useState("")
  const handleOnChange = (e) => {
    setValue(e.target.value)
    console.log(value)
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    props.addTodo(value);
    setValue("");
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder='What to do Today?' value={value} onChange={handleOnChange} />
      <button type="submit"><FontAwesomeIcon icon={faPlus} /></button>
    </form>
  )
}

