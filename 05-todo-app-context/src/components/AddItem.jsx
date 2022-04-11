import { useState } from 'react'
import { useTodoList } from '../utils/useTodoList.jsx'

export default function AddItem({}) {
  const { add } = useTodoList()
  const [description, setDescription] = useState('')

  const handleChange = (event) => {
    setDescription(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    add(description)
    setDescription('')
  }

  return (
    <form className="flex justify-start space-x-4" onSubmit={handleSubmit}>
      <input
        type="text"
        className="border border-solid border-gray-400 px-2 py-1 rounded-sm"
        value={description}
        onChange={handleChange}
      />

      <button
        type="submit"
        className="bg-red-400 hover:bg-red-600 p-2 hover:cursor-pointer border border-solid border-red-600 rounded-sm"
        disabled={!description}
      >
        Add
      </button>
    </form>
  )
}
