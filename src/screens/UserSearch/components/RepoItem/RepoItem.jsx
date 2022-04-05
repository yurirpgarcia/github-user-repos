import moment from 'moment'
import Badge from 'react-bootstrap/Badge'
import ListGroup from 'react-bootstrap/ListGroup'

moment.locale('pt-br')


const RepoItem = ({ repo }) => {

  return (
    <ListGroup.Item as='li'>
      <div className='ms-2 me-auto'>
        <div>
          <div className='fw-bold d-flex align-items-center'>
            <a href={repo.html_url} target='_blank'>
              {repo.name}
            </a>
            <Badge className='ms-2' pill bg='success'>
              {repo.visibility}
            </Badge>
          </div>

          {!!repo.language &&
            <small className='me-3'>
              {repo.language}
            </small>}

          <small>
            Alterado Em {moment(repo.updated_at).format('ll')}
          </small>
        </div>
      </div>
    </ListGroup.Item>
  )
}

export { RepoItem }