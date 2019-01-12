import React from 'react'
import './Picture.css'
import PropTypes from 'prop-types'

class Picture extends React.Component {
  state = {
    isMobile: false,
    mobileDeleteButton: false,
  };

  componentDidMount() {
    const mobileState = window.matchMedia('(max-width:768px)').matches
    this.setState({ isMobile: mobileState })
  }

  showMobileDeleteButton = (e) => {
    const { isMobile, mobileDeleteButton } = this.state
    e.preventDefault()
    if (isMobile) {
      this.setState({ mobileDeleteButton: true })
      if (mobileDeleteButton && e.target !== document.querySelector(
        '.picture__delete-btn',
      )) {
        this.setState({ mobileDeleteButton: false })
      }
    }
  };

  onDeleteButtonClick = (e) => {
    const { onDeletePicture, data } = this.props
    e.preventDefault()
    onDeletePicture(data)
  };

  render() {
    const { data: { title, url } } = this.props
    const { isMobile, mobileDeleteButton } = this.state
    return (
      <div className="picture" onClick={this.showMobileDeleteButton} tabIndex="0" role="button">
        <div className="picture__header-wrapper">
          <p className="picture__title">{title}</p>
          {mobileDeleteButton === isMobile === true ? (
            <button
              type="button"
              className="picture__delete-btn"
              onClick={this.onDeleteButtonClick}
            >
                Delete
            </button>
          )
            : null}
        </div>
        <img src={url} className="picture__image" alt={title} />
      </div>
    )
  }
}

Picture.propTypes = {
  onDeletePicture: PropTypes.func.isRequired,
  data: PropTypes.shape({
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  }).isRequired,
}

export default Picture
