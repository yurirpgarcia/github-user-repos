import { IconAndMessage } from '../IconAndMessage'
import { faBookBookmark } from '@fortawesome/free-solid-svg-icons'

const NoData = () =>
  <IconAndMessage
    icon={faBookBookmark}
    message='Nenhum informação disponível' />

export { NoData }