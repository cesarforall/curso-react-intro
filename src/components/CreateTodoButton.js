import { useContext } from 'react'
import { TodoContext } from '../contexts/TodoContext'

const CreateTodoButton = () => {
  const { setOpenModal } = useContext(TodoContext)
  return (
    <button onClick={() => setOpenModal(true)}>+</button>
  )
}

export { CreateTodoButton }
