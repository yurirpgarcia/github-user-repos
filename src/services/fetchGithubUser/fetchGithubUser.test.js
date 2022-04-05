import { gitHubApi } from '../../config/api'

import { fetchGithubUser } from './fetchGithubUser'
import { defaultMessage, message404, mockGithubService404Error, mockGithubServiceError } from '../../utilities/mockGithubServiceError'

jest.mock('../../config/api')

const username = 'YuriRPGarcia'

describe('fetchGithubUser', () => {
  it('fetches user data successfully from an Github API', async () => {
    const data = { data: { login: username } }

    gitHubApi.get.mockResolvedValueOnce(data)

    await expect(fetchGithubUser(username)).resolves.toEqual(data)

    expect(gitHubApi.get).toHaveBeenCalledWith(`/users/${username}`)
  })

  it('fetches not found user from Github API', async () => {
    gitHubApi.get.mockRejectedValueOnce(mockGithubService404Error())

    await expect(fetchGithubUser('NonExistingUser')).rejects.toThrow(message404)
  })

  it('fetches user data unsuccessfully from an Github API', async () => {
    gitHubApi.get.mockRejectedValueOnce(mockGithubServiceError())

    await expect(fetchGithubUser('NonExistingUser')).rejects.toThrow(defaultMessage)
  })
})