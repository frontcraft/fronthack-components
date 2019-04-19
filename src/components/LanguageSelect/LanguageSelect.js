import React from 'react'
import PropTypes from 'prop-types'
import './style.sass'


const LanguageSelect = ({ languages, current, callback }) =>
  <div className='language-select'>
    {languages.map(language =>
      <span
        className={`language-select__link${(current === language) ? ' is-active' : ''}`}
        key={language}
        onClick={() => callback(language)}
      >{language}</span>
    )}
  </div>

LanguageSelect.propTypes = {
  languages: PropTypes.arrayOf(PropTypes.string).isRequired,
  current: PropTypes.string,
  callback: PropTypes.function,
}

export default LanguageSelect
