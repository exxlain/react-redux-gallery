import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import PictureList from '../PictureList/PictureList'
import Add from '../Add/Add'
import './App.css'
import {
  savePicture, deletePicture, openModal, closeModal,
} from '../../actions/pictures'

class App extends React.Component {
  render() {
    const {
      pictures, deletePictureAction, savePictureAction, isModalOpen, modalOpenAction, modalCloseAction,
    } = this.props
    return (
      <div className="app">
        <h1 className="app__header">Images</h1>
        <hr className="app__line" />
        <div className="app__wrapper">
          <button
            type="button"
            className="app__new-btn"
            onClick={modalOpenAction}
          >
            NEW
          </button>
          {isModalOpen ? (
            <Add
              addPicture={savePictureAction}
              onCloseButtonClick={modalCloseAction}
            />
          ) : null}
          <PictureList
            data={pictures}
            deletePictureInApp={deletePictureAction}
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = store => ({
  pictures: store.pictures.picturesList,
  isModalOpen: store.pictures.isModalOpen,
})

const mapDispatchToProps = dispatch => ({
  savePictureAction: picture => dispatch(savePicture(picture)),
  deletePictureAction: picture => dispatch(deletePicture(picture.id)),
  modalOpenAction: () => dispatch(openModal()),
  modalCloseAction: () => dispatch(closeModal()),
})

App.propTypes = {
  pictures: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  })),
  deletePictureAction: PropTypes.func.isRequired,
  savePictureAction: PropTypes.func.isRequired,
  isModalOpen: PropTypes.bool,
  modalOpenAction: PropTypes.func.isRequired,
  modalCloseAction: PropTypes.func.isRequired,
}

App.defaultProps = {
  isModalOpen: false,
  pictures: [],
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
