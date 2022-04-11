export default function TodoSummary({ todos }) {
  const openTodos = todos.filter((todo) => !todo.completed)
  const completedTodos = todos.filter((todo) => todo.completed)

  return (
    <div className="bg-gray-200 p-4 rounded-sm">
      <p>Open: {openTodos.length}</p>
      <p>Completed: {completedTodos.length}</p>
    </div>
  )
}
