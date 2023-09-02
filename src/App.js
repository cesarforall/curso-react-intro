import './App.css'

const TODOS = [
  { text: 'primer todo', completed: true },
  { text: 'segundo todo', completed: true },
  { text: 'tercer todo', completed: false },
  { text: 'cuarto todo', completed: false }
]

function TodoCounter (props) {
  return (
    <>
      <p>Has completado {props.completed} de {props.total} TODO's</p>
    </>
  )
}

function TodoSearch () {
  return (
    <>
      <form>
        <input type='text' placeholder='Hacer la compra' />
      </form>
    </>
  )
}

function TodoList ({ children }) {
  return children
}

function TodoItem ({ text, completed }) {
  return (
    <>
      <li>
        <span>{completed}</span>
        <p>{text}</p>
        <span>X</span>
      </li>
    </>
  )
}

function App () {
  const completedTodos = TODOS.reduce((accumulator, currentValue) => {
    const isCompleted = currentValue.completed === true ? 1 : 0
    return accumulator + isCompleted
  }, 0)
  const totalTodos = TODOS.length

  return (
    <div className='App'>
      <header className='App-header'>
        <h3>TODO Machine</h3>
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
