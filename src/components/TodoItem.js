import '../styles/TodoItem.css'

function TodoItem ({ todo, onDeleteTodo, onCheckTodo }) {
  const { text, completed } = todo
  const className = completed ? 'lineThrough' : ''
  return (
    <>
      <li>
        <span onClick={() => onCheckTodo(text)}>{completed ? '✅' : '⭕'}</span>
        <p className={className}>{text}</p>
        <span onClick={() => onDeleteTodo(text)}>❌</span>
      </li>
    </>
  )
}

export { TodoItem }
