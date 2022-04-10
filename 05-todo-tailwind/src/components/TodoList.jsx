export default function TodoList({ todos, onClick }) {
  return (
    <div className="mb-4">
      {todos.length === 0 && <p>Your Todo list is empty!</p>}
      {todos.map((todo) => {
        return (
          <div key={todo.id} className="flex items-center space-x-3">
            <input
              id={`todo-${todo.id}`}
              type="checkbox"
              className="border border-solid border-gray-300 px-8 py-4 checked:bg-red-200"
              value={todo.completed}
              checked={todo.completed}
              onChange={() => onClick(todo.id)}
            />{' '}
            <label
              forHtml={todo.id}
              className={`${todo.completed ? 'line-through' : ''}`}
            >
              {todo.description}
            </label>
          </div>
        )
      })}
    </div>
  )
}
