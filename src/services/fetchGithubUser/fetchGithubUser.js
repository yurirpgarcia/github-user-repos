import { gitHubApi } from '../../config/api'
import { GithubServiceError } from '../../utilities/GitHubServiceError'

export const fetchGithubUser = async username => {
  try {
    return await gitHubApi.get(`/users/${username}`)
  } catch (error) {
    throw new GithubServiceError(error)
  }
}