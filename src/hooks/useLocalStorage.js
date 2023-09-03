import { useState, useEffect } from 'react'

function useLocalStorage (itemKey, initialValue) {
  const [item, setItem] = useState(initialValue)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemKey)
        let parsedItem

        if (!localStorageItem) {
          parsedItem = initialValue
          localStorage.setItem(itemKey, JSON.stringify(initialValue))
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
    localStorage.setItem(itemKey, stringifiedItem)
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
