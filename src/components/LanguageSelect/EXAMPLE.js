import React from 'react'
import LanguageSelect from '.'

export default () => {
  const [current, setCurrent] = React.useState('EN')
  return (
    <LanguageSelect
      languages={['EN', 'DE', 'PL']}
      current={current}
      callback={newLanguage => setCurrent(newLanguage)}
    />
  )
}
