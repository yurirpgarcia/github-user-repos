import BootstrapPagination from 'react-bootstrap/Pagination'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons'

export const Pagination = ({ value, onChange, numberOfPages }) => {

  const hasPrevious = value !== 1
  const hasNext = value !== numberOfPages

  const isPaginationTooBig = numberOfPages > 4

  return (
    <BootstrapPagination className='flex-wrap'>
      <BootstrapPagination.Item
        className='m-1'
        disabled={!hasPrevious}
        onClick={() => onChange(value - 1)}
      >
        <FontAwesomeIcon icon={faAngleLeft} /> Anterior
      </BootstrapPagination.Item>

      {!isPaginationTooBig &&
        Array.from({ length: numberOfPages }, (_, i) => {
          const page = i + 1

          return (
            <BootstrapPagination.Item
              className='m-1'
              key={page}
              value={page}
              active={page === value}
              onClick={() => onChange(page)}
            >
              {page}
            </BootstrapPagination.Item>
          )
        })
      }

      <BootstrapPagination.Item
        disabled={!hasNext}
        onClick={() => onChange(value + 1)}
        className='m-1'
      >
        Próximo <FontAwesomeIcon icon={faAngleRight} />
      </BootstrapPagination.Item>

    </BootstrapPagination>
  )
}