import '../styles/TodoItem.css'

function TodoItem ({ text, completed }) {
  const className = completed ? 'lineThrough' : ''
  return (
    <>
      <li>
        <span>{completed ? '✅' : '⭕'}</span>
        <p className={className}>{text}</p>
        <span>❌</span>
      </li>
    </>
  )
}

export { TodoItem }
