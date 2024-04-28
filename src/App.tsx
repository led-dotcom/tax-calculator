import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

import QueryProvider from './components/QueryProvider'
import Tax from './pages/tax/Tax'

function App() {
  return (
    <QueryProvider>
      <Tax />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryProvider>
  )
}

export default App
