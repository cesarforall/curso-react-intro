import { TodoCounter } from './components/TodoCounter'
import { TodoSearch } from './components/TodoSearch'
import { TodoList } from './components/TodoList'
import { TodoItem } from './components/TodoItem'

import './App.css'

const TODOS = [
  { text: 'primer todo', completed: true },
  { text: 'segundo todo', completed: true },
  { text: 'tercer todo', completed: false },
  { text: 'cuarto todo', completed: false }
]

function App () {
  const reducer = (accumulator, currentValue) => {
    const isCompleted = currentValue.completed === true ? 1 : 0
    return accumulator + isCompleted
  }
  const completedTodos = TODOS.reduce(reducer, 0)
  const totalTodos = TODOS.length

  return (
    <div className='App'>
      <header className='App-header'>
        <h2>TODO Machine</h2>
      </header>
      <main>
        <TodoCounter completed={completedTodos} total={totalTodos} />
        <TodoSearch />
        <TodoList>
          {TODOS.map(({ text, completed }) => <TodoItem key={text} text={text} completed={completed} />)}
        </TodoList>
      </main>
    </div>
  )
}

export default App
