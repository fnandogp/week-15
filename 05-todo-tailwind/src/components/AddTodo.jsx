import { useState } from 'react'

export default function AddTodo({ onSubmit }) {
  const [description, setDescription] = useState('')

  const handleChange = (event) => {
    setDescription(event.target.value)
  }

  const handleClick = () => {
    onSubmit(description)
    setDescription('')
  }

  return (
    <div>
      <input type="text" value={description} onChange={handleChange} />

      <button type="button" onClick={handleClick} disabled={!description}>
        Add
      </button>
    </div>
  )
}
