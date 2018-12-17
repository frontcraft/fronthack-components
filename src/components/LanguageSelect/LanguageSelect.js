import React from 'react'
import PropTypes from 'prop-types'
import './style.sass'


class LanguageSelect extends React.Component {
  render() {
    const { languages, current } = this.props
    return (
      <div className='language-select'>
        {languages.map((language, index) =>
          <span
            className={`language-select__link${(current === language.name) ? ' is-active' : ''}`}
            key={index}
            onClick={language.callback}
          >{language.name}</span>
        )}
      </div>
    )
  }
}

LanguageSelect.propTypes = {
  languages: PropTypes.arrayOf(PropTypes.object).isRequired,
  current: PropTypes.string,
}

export default LanguageSelect
