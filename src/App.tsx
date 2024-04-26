import './App.css'

function App() {
  return (
    <main className="container p-6 bg-white rounded space-y-4 sm:flex sm:items-center sm:space-x-4 sm:space-y-0">
      <div className="flex-1">
        <form>
          <input type="text" />
          <input type="text" />
          <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
            submit
          </button>
        </form>
      </div>
      <div className="flex-1 p-6 rounded-xl shadow-lg">
        <h1 className="mx-auto text-center">Total Tax</h1>
        <p className="mx-auto text-center">$0</p>
      </div>
    </main>
  )
}

export default App
