import { useContext } from 'react'
import { TodoContext } from '../contexts/TodoContext'

import '../styles/CreateTodoButton.css'

const CreateTodoButton = () => {
  const { setOpenModal } = useContext(TodoContext)
  return (
    <button className='CreateTodoButton' onClick={() => setOpenModal(true)}>Añadir TODO</button>
  )
}

export { CreateTodoButton }
