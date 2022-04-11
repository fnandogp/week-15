import TodoApp from './components/TodoApp'
import { TodoListContextProvider } from './utils/useTodoList'

function App() {
  return (
    <TodoListContextProvider>
      <TodoApp />
    </TodoListContextProvider>
  )
}

export default App
