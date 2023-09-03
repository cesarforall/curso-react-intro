import { useState } from 'react'

function useLocalStorage (itemKey, initialValue) {
  const localStorageItem = localStorage.getItem(itemKey)
  let parsedItem

  if (!localStorageItem) {
    parsedItem = initialValue
    localStorage.setItem(itemKey, initialValue)
  } else {
    parsedItem = JSON.parse(localStorageItem)
  }

  const [item, setItem] = useState(parsedItem)

  function saveItem (newItem) {
    const stringifiedItem = JSON.stringify(newItem)
    localStorage.setItem(itemKey, stringifiedItem)
    setItem(newItem)
  }
  return [item, saveItem]
}

export { useLocalStorage }
