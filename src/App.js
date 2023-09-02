import { useState } from 'react'

import { TodoCounter } from './components/TodoCounter'
import { TodoSearch } from './components/TodoSearch'
import { TodoList } from './components/TodoList'
import { TodoItem } from './components/TodoItem'

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

  const handleTodoSearchChange = (event) => {
    setSearchValue(event.target.value)
  }
  const reducer = (accumulator, currentValue) => {
    const isCompleted = currentValue.completed === true ? 1 : 0
    return accumulator + isCompleted
  }
  const completedTodos = todos.reduce(reducer, 0)

  const totalTodos = todos.length
  const filteredTodos = todos.filter(todo => todo.text.toLowerCase().includes(searchValue.toLowerCase()))

  function completeTodo (text) {
    const newTodos = [...filteredTodos]
    const todoIndex = newTodos.findIndex((todo) => todo.text === text)
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed
    setTodos(newTodos)
  }

  function onDeleteTodo (text) {
    const newTodos = [...filteredTodos]
    const todoIndex = newTodos.findIndex((todo) => todo.text === text)
    newTodos.splice(todoIndex, 1)
    setTodos(newTodos)
  }

  return (
    <div className='App'>
      <header className='App-header'>
        <h2>TODO Machine</h2>
      </header>
      <main>
        <TodoCounter completed={completedTodos} total={totalTodos} />
        <TodoSearch searchValue={searchValue} onTodoSearchChange={handleTodoSearchChange} />
        <TodoList>
          {filteredTodos.map(({ text, completed }) =>
            <TodoItem key={text} text={text} completed={completed} onCompleted={() => completeTodo(text)} onDeleteTodo={() => onDeleteTodo(text)} />
          )}
        </TodoList>
      </main>
    </div>
  )
}

export default App
