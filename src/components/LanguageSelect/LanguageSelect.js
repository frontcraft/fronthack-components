import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './style.sass'

/**
 * Selector to change the current language of visited site
 * @render react
 * @name LanguageSelect
 * @property {array} languages - objects that contains language name and callback
 * @property {string} current - currently selected language
 * @example
 *  <LanguageSelect
 *    languages={[
 *      {
 *        name: 'English',
 *        callback: () => alert('Callback. It can be history.push or anything'),
 *      },
 *      {
 *        name: 'Polish',
 *        callback: () => alert('Callback. It can be history.push or anything'),
 *      },
 *    ]}
 *    current="English"
 *  />
 */
class LanguageSelect extends Component {
  render() {
    const { languages, current } = this.props
    return(
      <div className="language-select">
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