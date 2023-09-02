import '../styles/TodoSearch.css'

function TodoSearch ({ searchValue, onTodoSearchChange }) {
  return (
    <>
      <form>
        <input
          type='text'
          placeholder='Hacer la compra'
          onChange={onTodoSearchChange}
          value={searchValue}
        />
      </form>
    </>
  )
}

export { TodoSearch }
