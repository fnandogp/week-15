import AddItem from './AddItem'
import Header from './Header'
import ItemList from './ItemList'
import Summary from './Summary'

export default function TodoApp({ todos, add, toggle }) {
  return (
    <>
      <Header />
      <main className="container mx-auto p-4">
        <div className="grid md:grid-cols-4 sm:grid-cols-1 gap-4">
          <section className="md:col-span-3 col-auto">
            <ItemList todos={todos} toggle={toggle} />
            <AddItem add={add} />
          </section>
          <section className="md:col-span-1 col-auto">
            <Summary todos={todos} />
          </section>
        </div>
      </main>
    </>
  )
}
