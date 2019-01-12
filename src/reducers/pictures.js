import update from 'immutability-helper'
import {
  SAVE_PICTURE,
  DELETE_PICTURE,
  OPEN_MODAL,
  CLOSE_MODAL,
} from '../constants/pictures'

const initialState = {
  picturesList: [
    {
      id: 1,
      title: 'Cats',
      url: 'https://i.imgur.com/SZpaRAJ.jpg',
    },
    {
      id: 2,
      title: 'Fluffy cat',
      url: 'https://i.imgur.com/feVxwDo.jpg',
    },
    {
      id: 3,
      title: 'Dog',
      url: 'https://i.imgur.com/w4cG7Ik.jpg',
    },
  ],
  isModalOpen: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
  case OPEN_MODAL:
    return {
      ...state,
      isModalOpen: true,
    }
  case CLOSE_MODAL:
    return {
      ...state,
      isModalOpen: false,
    }
  case SAVE_PICTURE:
    return {
      ...state,
      picturesList: update(state.picturesList, { $push: [action.payload] }),
      isModalOpen: false,
    }
  case DELETE_PICTURE:
    return {
      ...state,
      picturesList: state.picturesList.filter(picture => picture.id !== action.payload),
    }
  default:
    return state
  }
}
