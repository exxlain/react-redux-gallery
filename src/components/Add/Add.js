import React from 'react'
import PropTypes from 'prop-types'
import './Add.css'

class Add extends React.Component {
  state = {
    title: '',
    url: '',
  }

  onAddButtonClick = (e) => {
    const { addPicture } = this.props
    e.preventDefault()
    const { title, url } = this.state
    addPicture({
      id: Date.now(),
      title,
      url,
    })
  }

  handleChange = (e) => {
    const { id, value } = e.currentTarget
    this.setState({ [id]: value })
  }

  validate = () => {
    const { title, url } = this.state
    if (title.trim() && url.trim()) {
      return true
    }
    return false
  }


  render() {
    const { title, url } = this.state
    const { onCloseButtonClick } = this.props
    return (
      <React.Fragment>
        <form className="add">
          <h1 className="add__heading">New image</h1>
          <input
            id="title"
            type="text"
            onChange={this.handleChange}
            className="add__title"
            placeholder="Title"
            value={title}
          />
          <input
            id="url"
            type="text"
            onChange={this.handleChange}
            className="add__url"
            placeholder="URL"
            value={url}
          />
          <div className="add__buttons-wrapper">
            <button
              type="button"
              className="add__add-btn"
              onClick={this.onAddButtonClick}
              disabled={!this.validate()}
            >
            ADD
            </button>
            <button
              type="button"
              className="add__close-btn"
              onClick={onCloseButtonClick}
            >
            CLOSE
            </button>
          </div>
        </form>
      </React.Fragment>
    )
  }
}
Add.propTypes = {
  addPicture: PropTypes.func.isRequired,
  onCloseButtonClick: PropTypes.func.isRequired,
}

export default Add
