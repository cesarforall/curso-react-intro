import { useState, useEffect } from 'react'

// const TODOS = [
//   { text: 'primer todo', completed: true },
//   { text: 'segundo todo', completed: true },
//   { text: 'tercer todo', completed: false },
//   { text: 'cuarto todo', completed: false },
//   { text: 'quinto todo', completed: true }
// ]

// localStorage.setItem('TODOS_V1', JSON.stringify(TODOS))

function useLocalStorage (itemKey, initialValue) {
  const [item, setItem] = useState(initialValue)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = window.localStorage.getItem(itemKey)
        let parsedItem

        if (!localStorageItem) {
          parsedItem = initialValue
          window.localStorage.setItem(itemKey, JSON.stringify(initialValue))
        } else {
          parsedItem = JSON.parse(localStorageItem)
          setLoading(false)
          setItem(parsedItem)
        }
      } catch (error) {
        setLoading(false)
        setError(true)
      }
    }, 500)
  })

  function saveItem (newItem) {
    const stringifiedItem = JSON.stringify(newItem)
    window.localStorage.setItem(itemKey, stringifiedItem)
    setItem(newItem)
  }
  return {
    item,
    saveItem,
    loading,
    error
  }
}

export { useLocalStorage }
