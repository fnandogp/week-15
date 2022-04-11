import React, { useContext, useState } from 'react'

const TodoListContext = React.createContext({
  todos: [],
  add: () => {},
  remove: () => {},
})

export function TodoListContextProvider({ children }) {
  const [todos, setTodos] = useState([])

  const add = (description) => {
    const newTodo = {
      id: new Date().getTime(),
      description: description,
      completed: false,
    }
    setTodos([...todos, newTodo])
  }

  const remove = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
  }

  const toggle = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id !== id) return todo

      return { ...todo, completed: !todo.completed }
    })

    setTodos(newTodos)
  }

  const store = {
    todos,
    add,
    toggle,
    remove,
  }

  return (
    <TodoListContext.Provider value={store}>
      {children}
    </TodoListContext.Provider>
  )
}

export const useTodoList = () => useContext(TodoListContext)
