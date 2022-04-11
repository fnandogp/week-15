export default function Item({ todo, toggle }) {
  return (
    <div className="flex items-center space-x-3">
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
        className={`${todo.completed ? 'line-through' : ''}`}
      >
        {todo.description}
      </label>
    </div>
  )
}
