import { TodoItem } from './TodoItem'

import '../styles/TodoList.css'

function TodoList ({ loading, error, todos, onTodosChange, searchValue }) {
  function deleteTodo (text) {
    const newTodos = [...todos]
    const todoIndex = todos.findIndex(todo => todo.text === text)
    newTodos.splice(todoIndex, 1)
    onTodosChange(newTodos)
  }

  function checkTodo (text) {
    const newTodos = [...todos]
    const todoIndex = todos.findIndex(todo => todo.text === text)
    const todo = newTodos[todoIndex]
    todo.completed = !todo.completed
    onTodosChange(newTodos)
  }

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
