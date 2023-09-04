import { createContext, useState } from 'react'
import { useLocalStorage } from '../hooks/useLocalStorage'

const TodoContext = createContext()

function TodoProvider ({ children }) {
  const {
    item: todos,
    saveItem: saveTodos,
    loading,
    error
  } = useLocalStorage('TODOS_V1', [])

  const [searchValue, setSearchValue] = useState('')
  const [openModal, setOpenModal] = useState('')

  function deleteTodo (text) {
    const newTodos = [...todos]
    const todoIndex = todos.findIndex(todo => todo.text === text)
    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos)
  }

  function checkTodo (text) {
    const newTodos = [...todos]
    const todoIndex = todos.findIndex(todo => todo.text === text)
    const todo = newTodos[todoIndex]
    todo.completed = !todo.completed
    saveTodos(newTodos)
  }

  return (
    <TodoContext.Provider value={{
      todos,
      saveTodos,
      loading,
      error,
      searchValue,
      setSearchValue,
      deleteTodo,
      checkTodo,
      openModal,
      setOpenModal
    }}
    >
      {children}
    </TodoContext.Provider>
  )
}

export { TodoContext, TodoProvider }
