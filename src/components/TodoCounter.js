import '../styles/TodoCounter.css'

function TodoCounter (props) {
  return (
    <>
      <h1>Has completado <strong>{props.completed}</strong> de <strong>{props.total}</strong> TODO's</h1>
    </>
  )
}

export { TodoCounter }
