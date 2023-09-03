import { useState } from 'react'

import { TodoCounter } from './components/TodoCounter'
import { TodoSearch } from './components/TodoSearch'
import { TodoList } from './components/TodoList'

import './App.css'

// const TODOS = [
//   { text: 'primer todo', completed: true },
//   { text: 'segundo todo', completed: true },
//   { text: 'tercer todo', completed: false },
//   { text: 'cuarto todo', completed: false },
//   { text: 'quinto todo', completed: true }
// ]

// localStorage.setItem('TODOS_V1', JSON.stringify(TODOS))

function App () {
  const localStorageTODOS = localStorage.getItem('TODOS_V1')
  let parsedTODOS = []

  if (!localStorageTODOS) {
    parsedTODOS = []
    localStorage.setItem('TODOS_V1', JSON.stringify([]))
  } else {
    parsedTODOS = JSON.parse(localStorageTODOS)
  }

  const [todos, setTodos] = useState(parsedTODOS)
  const [searchValue, setSearchValue] = useState('')

  function saveTodos (newTodos) {
    const stringifiedTODOS = JSON.stringify(newTodos)
    localStorage.setItem('TODOS_V1', stringifiedTODOS)
    setTodos(newTodos)
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h2>TODO Machine</h2>
      </header>
      <main>
        <TodoCounter todos={todos} />
        <TodoSearch searchValue={searchValue} onSearchValueChange={setSearchValue} />
        <TodoList todos={todos} onTodosChange={saveTodos} searchValue={searchValue} />
      </main>
    </div>
  )
}

export default App
