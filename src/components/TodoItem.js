import '../styles/TodoItem.css'

function TodoItem ({ text, completed }) {
  return (
    <>
      <li>
        <span>{completed ? '✅' : '⭕'}</span>
        <p>{text}</p>
        <span>❌</span>
      </li>
    </>
  )
}

export { TodoItem }
