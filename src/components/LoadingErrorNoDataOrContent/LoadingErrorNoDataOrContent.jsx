import { Error } from '../Error'
import { NoData } from '../NoData'
import { Loading } from '../Loading'

const LoadingErrorNoDataOrContent = ({ loading, error, data, Content }) => {

  if (loading) {
    return <Loading />
  }

  if (error) {
    return <Error message={error} />
  }

  if (!data || (Array.isArray(data) && !data.length)) {
    return <NoData />
  }

  return Content
}

export { LoadingErrorNoDataOrContent }