import axios from 'axios'

const gitHubApi = axios.create({
  baseURL: 'https://api.github.com'
})

const gitHubAuthApi = axios.create({
  baseURL: 'https://github.com/login/oauth'
})

export { gitHubApi, gitHubAuthApi }