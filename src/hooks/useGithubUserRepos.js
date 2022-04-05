import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { useComponentDidUpdate } from './useComponentDidUpdate'

import { extractPageNumberFromHeaderLink } from '../utilities/extractPageNumberFromHeaderLink'
import { fetchGithubUserUserRepos } from '../services/fetchGithubUserRepos'

const useGithubUserRepos = ({ reposType, userData }) => {

  const [searchParams, setSearchParams] = useSearchParams()

  const [error, setError] = useState('')
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [numberOfPages, setNumberOfPages] = useState(1)
  const [manualEffectToggle, setManualEffectToggle] = useState(false)

  const page = searchParams.get('page')
  const [currentPage, setCurrentPage] = useState(page ? +page : 1)

  useEffect(() => {
    if (page && page !== currentPage) {
      setCurrentPage(+page)
    }

  }, [page])

  useEffect(() => {
    fetchGithubUserUserRepos({
      reposType,
      page: 1,
      perPage: 1,
      username: userData.login,
    })
      .then(reponse => setNumberOfPages(extractPageNumberFromHeaderLink(reponse)))
      .catch(error => setError(error.message))

  }, [reposType, userData.id])

  useEffect(() => {
    setError(null)
    setLoading(true)

    setSearchParams({
      type: reposType,
      page: currentPage,
    })

    fetchGithubUserUserRepos({
      reposType,
      page: currentPage,
      username: userData.login,
    })
      .then(({ data }) => setRepos(data))
      .catch(error => setError(error.message))
      .finally(() => setLoading(false))

  }, [manualEffectToggle, userData.id, currentPage])

  useComponentDidUpdate(() => {
    const isStillInFirstPage = +page === 1

    if (isStillInFirstPage) {
      setManualEffectToggle(!manualEffectToggle)
    }

    setCurrentPage(1)

  }, [reposType])

  return {
    repos,
    error,
    loading,
    currentPage,
    numberOfPages,
    setCurrentPage,
  }
}

export { useGithubUserRepos }