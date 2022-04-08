import { useState } from 'react'
import Header from '../components/Header'
import TodoList from '../components/TodoList'
import AddTodo from '../components/AddTodo'
import TodoSummary from '../components/TodoSummary'

export default function TodoContainer() {
  const [todos, setTodos] = useState([])

  const addTodo = (description) => {
    const newTodo = {
      id: new Date().getTime(),
      description: description,
      completed: false,
    }
    setTodos([...todos, newTodo])
  }

  const toggleCompleted = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id !== id) return todo

      return { ...todo, completed: !todo.complete }
    })

    setTodos(newTodos)
  }

  return (
    <>
      <Header />
      <main>
        <section>
          <TodoList todos={todos} onClick={toggleCompleted} />
          <AddTodo onSubmit={addTodo} />
        </section>
        <section>
          <TodoSummary todos={todos} />
        </section>
      </main>
    </>
  )
}
