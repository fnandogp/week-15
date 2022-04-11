import { useState } from "react";
import Header from "../components/Header";
import TodoList from "../components/TodoList";
import AddTodo from "../components/AddTodo";
import TodoSummary from "../components/TodoSummary";

export default function TodoContainer() {
  const [todos, setTodos] = useState([]);

  const addTodo = (description) => {
    const newTodo = {
      id: new Date().getTime(),
      description: description,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const toggleCompleted = (id) => {
    const newTodos = todos.map((todo) => {
      if (todo.id !== id) return todo;

      return { ...todo, completed: !todo.completed };
    });

    setTodos(newTodos);
  };

  return (
    <>
      <Header />
      <main className="container mx-auto p-4">
        <div className="grid md:grid-cols-4 sm:grid-cols-1 gap-4">
          <section className="md:col-span-3 col-auto">
            <TodoList todos={todos} onClick={toggleCompleted} />
            <AddTodo onSubmit={addTodo} />
          </section>
          <section className="md:col-span-1 col-auto">
            <TodoSummary todos={todos} />
          </section>
        </div>
      </main>
    </>
  );
}
