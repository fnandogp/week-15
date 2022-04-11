import Item from './Item'

export default function ItemList({ todos, toggle }) {
  return (
    <div className="mb-4">
      {todos.length === 0 && <p>Your Todo list is empty!</p>}
      {todos.map((todo) => (
        <Item key={todo.id} todo={todo} toggle={toggle} />
      ))}
    </div>
  )
}
