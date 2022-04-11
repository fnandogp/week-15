import AddTodo from './AddTodo'
import Header from './Header'
import Todos from './Todos'
import TodoSummary from './TodoSummary'

export default function TodoList() {
  return (
    <div className="font-mono bg-gray-50 min-h-screen">
      <Header />
      <main className="container mx-auto p-4">
        <div className="grid md:grid-cols-4 sm:grid-cols-1 gap-4">
          <section className="md:col-span-3 col-auto">
            <Todos />
            <AddTodo />
          </section>
          <section className="md:col-span-1 col-auto">
            <TodoSummary />
          </section>
        </div>
      </main>
    </div>
  )
}
