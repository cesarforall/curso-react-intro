import { useContext } from 'react'
import { TodoContext } from '../contexts/TodoContext'

import '../styles/TodoForm.css'

const TodoForm = () => {
  const { setOpenModal } = useContext(TodoContext)
  return (
    <form className='TodoForm-form'>
      <label>Escribe tu nuevo TODO</label>
      <textarea placeholder='Comprar fruta' rows='3' />
      <div className='TodoForm-buttonContainer'>
        <button className='TodoForm-button--delete' onClick={() => setOpenModal(false)}>Cancelar</button>
        <button className='TodoForm-button--add' onClick={(e) => e.preventDefault()}>Añadir</button>
      </div>
    </form>
  )
}

export { TodoForm }
