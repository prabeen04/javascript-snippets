import * as types from './actionTypes';

export const handleAddUserModal = (modalState) => dispatch => dispatch({ type: types.HANDLE_ADD_USER_MODAL, payload: modalState })