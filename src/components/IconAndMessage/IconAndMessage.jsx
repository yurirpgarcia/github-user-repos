import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const IconAndMessage = ({ icon, message }) => {

  return (
    <div className='d-flex flex-column justify-content-center align-items-center flex-grow-1'>
      <FontAwesomeIcon fontSize={40} icon={icon} />
      <h2 className='mt-3 text-center'>{message}</h2>
    </div>
  )
}

export { IconAndMessage }