import { useState } from 'react'
import TodoApp from '../components/TodoApp'

export default function TodoAppContainer() {
  const [todos, setTodos] = useState([])

  const add = (description) => {
    const newTodo = {
      id: new Date().getTime(),
      description: description,
      completed: false,
    }
    setTodos([...todos, newTodo])
  }

  const toggle = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id !== id) return todo

      return { ...todo, completed: !todo.completed }
    })

    setTodos(newTodos)
  }

  return <TodoApp todos={todos} add={add} toggle={toggle} />
}
