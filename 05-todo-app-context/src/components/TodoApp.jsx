import AddItem from './AddItem'
import Header from './Header'
import ItemList from './ItemList'
import Summary from './Summary'

export default function TodoApp() {
  return (
    <div className="font-mono bg-gray-50 min-h-screen">
      <Header />
      <main className="container mx-auto p-4">
        <div className="grid md:grid-cols-4 sm:grid-cols-1 gap-4">
          <section className="md:col-span-3 col-auto">
            <ItemList />
            <AddItem />
          </section>
          <section className="md:col-span-1 col-auto">
            <Summary />
          </section>
        </div>
      </main>
    </div>
  )
}
