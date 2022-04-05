import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDebounce } from './useDebounce'

import { fetchGithubUser } from '../services/fetchGithubUser'

const useGithubUserSearch = () => {

  const debounceTime = 2000

  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [userData, setUserData] = useState(null)

  const { username: initialUsername } = useParams()

  const [debouncedUsername, username, setUsername] = useDebounce(initialUsername ?? '', debounceTime)

  useEffect(() => {
    setError(null)
    setUserData(null)

    if (!debouncedUsername) {
      return
    }

    fetchGithubUser(debouncedUsername)
      .then(({ data }) => setUserData(data))
      .catch(error => setError(error.message))
      .finally(() => setLoading(false))

  }, [debouncedUsername])

  const stopLoadingIfTypedAndUsernameDidntChange = newTypedUserName => {
    setTimeout(() => {
      if (newTypedUserName == debouncedUsername) {
        setLoading(false)
      }

    }, debounceTime * 2)
  }

  const clearSearch = () => {
    setUsername('')
    setError(null)
    setLoading(false)
    setUserData(null)
  }

  return {
    error,
    loading,
    userData,
    username,
    searchUserDebouncing: (newUserName) => {

      if (!newUserName) {
        return clearSearch()
      }

      setLoading(true)
      setUsername(newUserName)
      stopLoadingIfTypedAndUsernameDidntChange(newUserName)
    }
  }
}

export { useGithubUserSearch }