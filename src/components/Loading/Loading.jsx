import Spinner from 'react-bootstrap/Spinner'

const Loading = () => {

  return (
    <div className='d-flex flex-column justify-content-center align-items-center flex-grow-1'>
      <Spinner
        variant='primary'
        animation='border'
      />
    </div>
  )
}

export { Loading }