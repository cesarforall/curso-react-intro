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
  function useLocalStorage (itemKey, initialValue) {
    const localStorageItem = localStorage.getItem(itemKey)
    let parsedItem

    if (!localStorageItem) {
      parsedItem = initialValue
      localStorage.setItem(itemKey, initialValue)
    } else {
      parsedItem = JSON.parse(localStorageItem)
    }
    function saveItem (newItem) {
      const stringifiedItem = JSON.stringify(newItem)
      localStorage.setItem(itemKey, stringifiedItem)
      setTodos(newItem)
    }
    return [parsedItem, saveItem]
  }

  const [parsedTODOS, saveTodos] = useLocalStorage('TODOS_V1', [])
  const [todos, setTodos] = useState(parsedTODOS)
  const [searchValue, setSearchValue] = useState('')

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
