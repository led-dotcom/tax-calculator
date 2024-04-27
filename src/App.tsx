import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import QueryProvider from './components/QueryProvider'
import Main from './pages/Main'

import './App.css'

function App() {
  return (
    <QueryProvider>
      <Main />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryProvider>
  )
}

export default App
