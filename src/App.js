import { TodoCounter } from './components/TodoCounter'
import { TodoSearch } from './components/TodoSearch'
import { TodoList } from './components/TodoList'

import './App.css'
import { TodoProvider } from './contexts/TodoContext'

function App () {
  return (
    <TodoProvider>
      <div className='App'>
        <header className='App-header'>
          <h2>TODO Machine</h2>
        </header>
        <main>
          <TodoCounter />
          <TodoSearch />
          <TodoList />
        </main>
      </div>
    </TodoProvider>
  )
}

export default App
