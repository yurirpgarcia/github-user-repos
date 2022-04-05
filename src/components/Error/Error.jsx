import { IconAndMessage } from '../IconAndMessage'
import { faCircleExclamation } from '@fortawesome/free-solid-svg-icons'

const Error = ({ message }) =>
  <IconAndMessage
    message={message}
    icon={faCircleExclamation} />

export { Error }