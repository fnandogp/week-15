export default function TodoList({ todos, onClick }) {
  return (
    <div>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <input
              id={`todo-${todo.id}`}
              type="checkbox"
              className="border border-solid  border-gray-300 px-8 py-4"
              value={todo.completed}
              onChange={() => onClick(todo.id)}
            />{' '}
            <label for={todo.id}>{todo.description}</label>
          </div>
        )
      })}
    </div>
  )
}
