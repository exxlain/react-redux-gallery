import * as types from '../constants/pictures'

export const savePicture = picture => ({
  type: types.SAVE_PICTURE,
  payload: picture,
})
export const deletePicture = id => ({
  type: types.DELETE_PICTURE,
  payload: id,
})
export const openModal = () => ({
  type: types.OPEN_MODAL,
})
export const closeModal = () => ({
  type: types.CLOSE_MODAL,
})
