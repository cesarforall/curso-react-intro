import '../styles/TodoItem.css'

function TodoItem ({ text, completed, onCompleted, onDeleteTodo }) {
  const className = completed ? 'lineThrough' : ''
  return (
    <>
      <li>
        <span onClick={onCompleted}>{completed ? '✅' : '⭕'}</span>
        <p className={className}>{text}</p>
        <span onClick={onDeleteTodo}>❌</span>
      </li>
    </>
  )
}

export { TodoItem }
