import { useState, useEffect } from 'react'

const useDebounce = (initialValue, debounceTime) => {
  const [value, setValue] = useState(initialValue)
  const [debouncedValue, setDebouncedValue] = useState(initialValue)

  useEffect(() => {

    const timeoutId = setTimeout(() => {
      setDebouncedValue(value)

    }, debounceTime)

    return () => clearTimeout(timeoutId)
  }, [value])

  return [debouncedValue, value, setValue]
}

export { useDebounce }