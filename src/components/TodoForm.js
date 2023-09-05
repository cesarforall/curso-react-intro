import { useContext } from 'react'
import { TodoContext } from '../contexts/TodoContext'

import '../styles/TodoForm.css'

const TodoForm = () => {
  const { setOpenModal, todos, saveTodos } = useContext(TodoContext)

  function handleSubmit (e) {
    e.preventDefault()
    const { textarea } = Object.fromEntries(new window.FormData(e.target))

    const newTodos = [...todos]
    newTodos.push({ text: textarea, completed: false })

    saveTodos(newTodos)
    setOpenModal(false)
  }
  return (
    <form className='TodoForm-form' onSubmit={handleSubmit}>
      <label>Escribe tu nuevo TODO</label>
      <textarea name='textarea' placeholder='Comprar fruta' rows='3' />
      <div className='TodoForm-buttonContainer'>
        <button className='TodoForm-button--delete' onClick={() => setOpenModal(false)}>Cancelar</button>
        <button
          type='submit'
          className='TodoForm-button--add'
        >Añadir
        </button>
      </div>
    </form>
  )
}

export { TodoForm }
