import { useEffect, useState } from 'react'
import Nav from 'react-bootstrap/Nav'
import { ReposList } from '../ReposList'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookBookmark, faStar } from '@fortawesome/free-solid-svg-icons'

import { useSearchParams } from 'react-router-dom'
import { REPO_TYPES } from '../../../../config/constants'

const GithubUserInfo = ({ githubUserData }) => {

  const [searchParams] = useSearchParams()
  const repoTypeFromParams = searchParams.get('type')
  const [repoTypeTabName, setRepoTypeTabName] = useState(repoTypeFromParams ?? REPO_TYPES.DEFAULT)

  useEffect(() => {
    if (repoTypeFromParams && repoTypeFromParams !== repoTypeTabName) {
      setRepoTypeTabName(repoTypeFromParams)
    }

  }, [repoTypeFromParams])

  return (
    <div className='d-flex flex-column flex-grow-1'>
      <Nav
        variant='tabs'
        activeKey={repoTypeTabName}
        onSelect={newTabName => setRepoTypeTabName(newTabName)}
      >
        <Nav.Item>
          <Nav.Link eventKey={REPO_TYPES.DEFAULT}>
            <FontAwesomeIcon icon={faBookBookmark} /> Repositórios
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey={REPO_TYPES.STARRED}>
            <FontAwesomeIcon icon={faStar} /> Com Estrela
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <div className='pt-2 d-flex flex-column flex-grow-1'>
        <ReposList
          reposType={repoTypeTabName}
          githubUserData={githubUserData} />
      </div>
    </div>
  )
}

export { GithubUserInfo }