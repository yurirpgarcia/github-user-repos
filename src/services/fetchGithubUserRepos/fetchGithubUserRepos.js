import { gitHubApi } from '../../config/api'
import { GithubServiceError } from '../../utilities/GitHubServiceError'

export const ROWS_PER_PAGE = 10

export const fetchGithubUserUserRepos = async ({
  page,
  username,
  reposType,
  perPage = ROWS_PER_PAGE
}) => {
  try {
    const params = `per_page=${ROWS_PER_PAGE}&page=${page}`
    return await gitHubApi.get(`/users/${username}/${reposType}?${params}`)
  } catch (error) {
    throw new GithubServiceError(error)
  }
}