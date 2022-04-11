import TodoList from './components/TodoList'
import { TodoListContextProvider } from './utils/useTodoList'

function App() {
  return (
    <TodoListContextProvider>
      <TodoList />
    </TodoListContextProvider>
  )
}

export default App
