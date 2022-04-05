import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const RedirectToIndexOnNotFound = () => {

  const navigate = useNavigate()

  useEffect(() => {
    navigate('/')
  }, [])

  return null
}

export { RedirectToIndexOnNotFound }