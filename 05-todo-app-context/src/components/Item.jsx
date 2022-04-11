import { useTodoList } from '../utils/useTodoList'

export default function Item({ todo }) {
  const { toggle, remove } = useTodoList()

  return (
    <div key={todo.id} className="group flex items-center space-x-3">
      <input
        id={todo.id}
        type="checkbox"
        className="border border-solid border-gray-300 px-8 py-4 checked:bg-red-200"
        value={todo.completed}
        checked={todo.completed}
        onChange={() => toggle(todo.id)}
      />{' '}
      <label
        htmlFor={todo.id}
        className={` ${todo.completed ? 'line-through' : ''}`}
      >
        {todo.description}
      </label>
      <span
        className="invisible group-hover:visible text-red-400 cursor-pointer"
        onClick={() => remove(todo.id)}
      >
        &times;
      </span>
    </div>
  )
}
