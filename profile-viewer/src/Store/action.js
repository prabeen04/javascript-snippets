import * as types from './actionTypes';

export const handleAddUserModal = (modalState) => dispatch => {
    console.log(modalState)
    dispatch({ type: types.HANDLE_ADD_USER_MODAL, payload: modalState })
}

export const setSelectedPeople = people => dispatch => {
    dispatch({
        type: types.SET_SELECTED_PEOPLE,
        payload: people
    })
}