import { useTodoList } from '../utils/useTodoList.jsx'
import Item from './Item'

export default function ItemList({}) {
  const { todos } = useTodoList()

  return (
    <div className="mb-4">
      {todos.length === 0 && <p>Your Todo list is empty!</p>}
      {todos.map((todo) => {
        return <Item key={todo.id} todo={todo} />
      })}
    </div>
  )
}
