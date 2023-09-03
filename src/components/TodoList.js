import { useContext } from 'react'
import { TodoContext } from '../contexts/TodoContext'

import { TodoItem } from './TodoItem'

import '../styles/TodoList.css'

function TodoList () {
  const {
    loading,
    error,
    todos,
    searchValue,
    deleteTodo,
    checkTodo
  } = useContext(TodoContext)

  const filteredTodos = []

  todos.forEach(todo => {
    if (todo.text.toLowerCase().indexOf(searchValue.toLowerCase()) === -1) {
      return
    }
    filteredTodos.push(<TodoItem key={todo.text} todo={todo} onDeleteTodo={deleteTodo} onCheckTodo={checkTodo} />)
  })
  return (
    <ul>
      {loading && "Cargando TODO's..."}
      {error && "Ha habido un error en la carga de TODO's"}
      {filteredTodos}
    </ul>
  )
}

export { TodoList }
