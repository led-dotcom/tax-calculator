import './App.css'

function App() {
  return (
    <main className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
      <div className="flex-1">
        <form>
          <input type="text" />
          <input type="text" />
          <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
            submit
          </button>
        </form>
      </div>
      <div className="flex-1"></div>
    </main>
  )
}

export default App
