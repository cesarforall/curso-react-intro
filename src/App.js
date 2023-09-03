import { useState } from 'react'

import { TodoCounter } from './components/TodoCounter'
import { TodoSearch } from './components/TodoSearch'
import { TodoList } from './components/TodoList'

import './App.css'

const TODOS = [
  { text: 'primer todo', completed: true },
  { text: 'segundo todo', completed: true },
  { text: 'tercer todo', completed: false },
  { text: 'cuarto todo', completed: false },
  { text: 'quinto todo', completed: true }
]

function App () {
  const [todos, setTodos] = useState(TODOS)
  const [searchValue, setSearchValue] = useState('')

  return (
    <div className='App'>
      <header className='App-header'>
        <h2>TODO Machine</h2>
      </header>
      <main>
        <TodoCounter todos={todos} />
        <TodoSearch searchValue={searchValue} onSearchValueChange={setSearchValue} />
        <TodoList todos={todos} onTodosChange={setTodos} searchValue={searchValue} />
      </main>
    </div>
  )
}

export default App
