import { RepoItem } from '../RepoItem'
import ListGroup from 'react-bootstrap/ListGroup'
import { LoadingErrorNoDataOrContent, Pagination } from '../../../../components'

import { useGithubUserRepos } from '../../../../hooks'

const ReposList = ({ reposType, githubUserData }) => {

  const {
    repos,
    error,
    loading,
    currentPage,
    numberOfPages,
    setCurrentPage
  } = useGithubUserRepos({ reposType, userData: githubUserData })

  return (
    <LoadingErrorNoDataOrContent
      error={error}
      data={repos}
      loading={loading}
      Content={<>
        <ListGroup className='mb-3' as='ul'>
          {repos.map(repo =>
            <RepoItem
              repo={repo}
              key={repo.id} />
          )}
        </ListGroup>

        <div className='d-flex justify-content-center'>
          <Pagination
            value={currentPage}
            onChange={setCurrentPage}
            numberOfPages={numberOfPages} />
        </div>
      </>}
    />
  )
}

export { ReposList }
