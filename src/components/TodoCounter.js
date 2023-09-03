import '../styles/TodoCounter.css'

function TodoCounter ({ todos }) {
  const reducer = (accumulator, currentValue) => {
    const isCompleted = currentValue.completed === true ? 1 : 0
    return accumulator + isCompleted
  }
  const completedTodos = todos.reduce(reducer, 0)

  const totalTodos = todos.length

  return (
    <>
      <h1>Has completado <strong>{completedTodos}</strong> de <strong>{totalTodos}</strong> TODO's</h1>
    </>
  )
}

export { TodoCounter }
