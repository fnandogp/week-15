export default function TodoSummary({ todos }) {
  const openTodos = todos.filter((todo) => !todo.completed)
  const completedTodos = todos.filter((todo) => todo.completed)

  return (
    <div>
      <hr />
      <p>Open: {openTodos.length}</p>
      <p>Completed: {completedTodos.length}</p>
    </div>
  )
}
