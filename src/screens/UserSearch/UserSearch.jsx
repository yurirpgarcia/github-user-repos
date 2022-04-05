import { useGithubUserSearch } from '../../hooks'

import { GithubUserInfo } from './components/GithubUserInfo'
import { Search, Banner, LoadingErrorNoDataOrContent } from '../../components'

const UserSearch = () => {

  const {
    error,
    loading,
    userData,
    username,
    searchUserDebouncing
  } = useGithubUserSearch()

  return (
    <div className='vh-100 vw-100 d-flex flex-column'>
      <header className='m-3'>
        <Banner
          colors={['#3779f6', '#4abef8']}
          title='Busque usuários e veja seus repositórios'
        >
          <Search
            value={username}
            onChange={searchUserDebouncing}
            placeholder='Busque por nome de usuário' />
        </Banner>
      </header>

      <main className='mx-4 d-flex flex-grow-1'>
        <LoadingErrorNoDataOrContent
          error={error}
          data={userData}
          loading={loading}
          Content={<GithubUserInfo githubUserData={userData} />}
        />
      </main>
    </div>
  )
}

export { UserSearch }