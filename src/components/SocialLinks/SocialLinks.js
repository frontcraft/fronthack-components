import React from 'react'
import Icon from '../Icon'
import './style.sass'


class SocialLinks extends React.Component {
  render() {
    const { url } = this.props
    const encodedUrl = encodeURIComponent(url)
    const links = [
      {
        name: 'facebook',
        url: `https://www.facebook.com/sharer.php?u=${encodedUrl}`,
        icon: 'social-facebook',
      },
      {
        name: 'twitter',
        url: `https://twitter.com/intent/tweet?url=${encodedUrl}`,
        icon: 'social-twitter',
      },
      {
        name: 'gplus',
        url: `https://plus.google.com/share?url=${encodedUrl}`,
        icon: 'social-gplus',
      },
      {
        name: 'linkedin',
        url: `https://www.linkedin.com/shareArticle?mini=true&url=${encodedUrl}`,
        icon: 'social-linkedin',
      },
    ]
    return(
      <nav className="social-links">
        {links.map((item, index) =>
          <a
            href={item.url}
            class="social-links__link"
            target="_blank"
            key={index}
            rel="noopener noreferrer"
          ><Icon type={item.icon} /></a>
        )}
      </nav>
    )
  }
}

export default SocialLinks