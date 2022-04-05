import { useRef, useEffect } from 'react'

const useComponentDidUpdate = (effect, dependencies) => {
  const hasMounted = useRef(false)

  useEffect(() => {
    if (!hasMounted.current) {
      hasMounted.current = true
      return
    }

    effect()
  }, [...dependencies])
};

export { useComponentDidUpdate }