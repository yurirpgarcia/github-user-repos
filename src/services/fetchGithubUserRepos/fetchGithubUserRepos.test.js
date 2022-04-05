import { gitHubApi } from '../../config/api'

import { fetchGithubUserUserRepos, ROWS_PER_PAGE } from './fetchGithubUserRepos'
import { defaultMessage, mockGithubServiceError } from '../../utilities/mockGithubServiceError'
import { REPO_TYPES } from '../../config/constants'

jest.mock('../../config/api')

const username = 'YuriRPGarcia'

const page = 1
const mockedRepos = {
  data: [{
    name: 'Repo Name Mock 1'
  }, {
    name: 'Repo Name Mock 2'
  }]
}

const testReposFetchByType = async reposType => {
  gitHubApi.get.mockResolvedValueOnce(mockedRepos)

  await expect(fetchGithubUserUserRepos({ page, reposType, username })).resolves.toEqual(mockedRepos)

  expect(gitHubApi.get).toHaveBeenCalledWith(`/users/${username}/${reposType}?per_page=${ROWS_PER_PAGE}&page=${page}`)
}

const testRepoFetchFailure404ByType = async reposType => {
  gitHubApi.get.mockRejectedValueOnce(mockGithubServiceError())

  await expect(fetchGithubUserUserRepos({ username: 'NonExistingUser', page, reposType })).rejects.toThrow(defaultMessage)
}

describe('fetchGithubUserUserRepos', () => {
  it('fetches user repos successfully from an Github API', async () => {
    await testReposFetchByType(REPO_TYPES.DEFAULT)
  })

  it('fetches user starred repos successfully from an Github API', async () => {
    await testReposFetchByType(REPO_TYPES.STARRED)
  })

  it('fetches user repos unsuccessfully from an Github API', async () => {
    await testRepoFetchFailure404ByType(REPO_TYPES.DEFAULT)
  })

  it('fetches user starred repos unsuccessfully from an Github API', async () => {
    await testRepoFetchFailure404ByType(REPO_TYPES.STARRED)
  })
})