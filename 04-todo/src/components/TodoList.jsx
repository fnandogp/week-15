export default function TodoList({ todos, onClick }) {
  return (
    <div>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            <input
              id={`todo-${todo.id}`}
              type="checkbox"
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
