import QueryProvider from './components/QueryProvider'
import Main from './pages/Main'

import './App.css'

function App() {
  return (
    <QueryProvider>
      <Main />
    </QueryProvider>
  )
}

export default App
