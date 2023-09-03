import '../styles/TodoSearch.css'

function TodoSearch ({ searchValue, onSearchValueChange }) {
  return (
    <>
      <form>
        <input
          type='text'
          value={searchValue}
          placeholder='Hacer la compra'
          onChange={(e) => onSearchValueChange(e.target.value)}
        />
      </form>
    </>
  )
}

export { TodoSearch }
