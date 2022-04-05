import { useCallback } from 'react'
import './SearchStyles.scss'

import Form from 'react-bootstrap/Form'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass, faXmark } from '@fortawesome/free-solid-svg-icons'

const Search = ({ placeholder, value, onChange }) => {

  const clearSearch = () => onChange('')

  return (
    <div className='Y-search'>
      <span className='Y-search__left'>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </span>

      <Form.Control
        type='text'
        value={value}
        placeholder={placeholder}
        onChange={({ target }) => onChange(target.value)}
      />

      <span className='Y-search__rigth'>
        <button onClick={clearSearch}>
          <FontAwesomeIcon icon={faXmark} />
        </button>
      </span>
    </div>
  )
}

export { Search }