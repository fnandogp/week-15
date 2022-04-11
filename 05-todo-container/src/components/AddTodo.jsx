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
    <div className="flex justify-start space-x-4">
      <input
        type="text"
        className="border border-solid border-gray-400 px-2 py-1 rounded-sm"
        value={description}
        onChange={handleChange}
      />

      <button
        type="button"
        className="bg-red-400 hover:bg-red-600 p-2 hover:cursor-pointer border border-solid border-red-600 rounded-sm"
        onClick={handleClick}
        disabled={!description}
      >
        Add
      </button>
    </div>
  )
}