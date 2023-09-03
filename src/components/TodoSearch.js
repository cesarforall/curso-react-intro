import { useContext } from 'react'
import { TodoContext } from '../contexts/TodoContext'

import '../styles/TodoSearch.css'

function TodoSearch () {
  const {
    searchValue,
    setSearchValue
  } = useContext(TodoContext)

  return (
    <>
      <form>
        <input
          type='text'
          value={searchValue}
          placeholder='Hacer la compra'
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </form>
    </>
  )
}

export { TodoSearch }
