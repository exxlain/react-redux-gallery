import React from 'react'
import PropTypes from 'prop-types'
import './PictureList.css'
import Picture from '../Picture/Picture'

class PictureList extends React.Component {
  handleDeletePicture = (data) => {
    const { deletePictureInApp } = this.props
    deletePictureInApp(data)
  }

  renderPictureList = () => {
    const { data } = this.props
    return data.length
      ? data.map(item => (
        <Picture
          onDeletePicture={this.handleDeletePicture}
          key={item.id}
          data={item}
        />
      )) : (<p className="picture-list__text">no images</p>)
  }

  render() {
    return (
      <div className="picture-list">
        {this.renderPictureList()}
      </div>
    )
  }
}
PictureList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
  })),
  deletePictureInApp: PropTypes.func.isRequired,
}

PictureList.defaultProps = {
  data: [],
}
export default PictureList
