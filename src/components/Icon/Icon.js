import React, {Component} from 'react'
import bemCx from 'bem-modifiers'
import './style.sass'

/**
 * Set of icons prepared by WAAT ltd. Because they are fonts, their size and color can be modified the same way like text.
 * Avaliable types:
 * - arrow-right
 * - arrow-left
 * - arrow-top
 * - arrow-bottom
 * - add
 * - remove
 * - ok
 * - x
 * - circle-arrow-right
 * - circle-arrow-left
 * - circle-arrow-top
 * - circle-arrow-bottom
 * - circle-add
 * - circle-remove
 * - circle-ok
 * - square-right
 * - square-left
 * - square-add
 * - square-remove
 * - square-ok
 * - square-x
 * - archive
 * - arrows
 * - at
 * - bell
 * - bin
 * - book
 * - books
 * - book-bookmark
 * - bookmark
 * - buildings
 * - bulb
 * - calendar
 * - calendar-check
 * - cam
 * - carrot
 * - chart
 * - clock
 * - cloud
 * - clusters
 * - counter
 * - cutlery
 * - database
 * - diamond
 * - doc
 * - doc-ok
 * - doc-edit
 * - docs
 * - doc-search
 * - drop
 * - download
 * - upload
 * - upload-2
 * - edit
 * - envelope
 * - envelope-open
 * - envelope-plus
 * - eu
 * - europe
 * - eye
 * - flag
 * - flag-slat
 * - glasses
 * - globe
 * - heart
 * - heart-add
 * - heart-remove
 * - helpdesk
 * - home
 * - indicator
 * - info
 * - in
 * - out
 * - open-paper
 * - lighting
 * - link
 * - listing
 * - lock
 * - unlock
 * - megaphone
 * - menu
 * - pencil
 * - phone
 * - phone-question-mark
 * - pile
 * - pin
 * - power
 * - print
 * - printer
 * - puzzle
 * - question-mark
 * - quotation-mark-start
 * - quotation-mark-end
 * - refresh
 * - road-signs
 * - scope
 * - search
 * - send
 * - share
 * - share-2
 * - strategy
 * - social-facebook
 * - social-flickr
 * - social-gplus
 * - social-linkedin
 * - social-twitter
 * - social-youtube
 * - stack
 * - star
 * - study
 * - sunset
 * - target
 * - truck
 * - umbrela
 * - user
 * - user-add
 * - user-remove
 * - user-ok
 * - user-x
 * - user-suit
 * - users
 * - users-leader
 * - vector
 * - warning
 * - woman
 * - man
 * - world
 * - mime-default
 * - mime-doc
 * - mime-exe
 * - mime-jpg
 * - mime-pdf
 * - mime-png
 * - mime-rar
 * - mime-xls
 * - mime-zip
 * @render react
 * @name Icon
 * @property {string} type - One from the avaliable types
 * @example
 *  <Icon type="bell"/>
 */
class Icon extends Component {
  render() {
    return <i className={bemCx('icon', this.props.type, this.props.className)} />
  }
}

export default Icon