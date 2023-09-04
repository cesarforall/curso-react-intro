import { useContext } from 'react'
import { TodoContext } from './contexts/TodoContext'
import { TodoCounter } from './components/TodoCounter'
import { TodoSearch } from './components/TodoSearch'
import { TodoList } from './components/TodoList'
import { Modal } from './components/Modal'

function AppUI () {
  const { openModal } = useContext(TodoContext)
  return (
    <div className='App'>
      <header className='App-header'>
        <h2>TODO Machine</h2>
      </header>
      <main>
        <TodoCounter />
        <TodoSearch />
        <TodoList />
      </main>
      {
        openModal && <Modal>Soy el modal</Modal>
      }
    </div>
  )
}

export { AppUI }
