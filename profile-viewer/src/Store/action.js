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
export const checkAllPeople = () => dispatch => {
    dispatch({
        type: types.CHECK_ALL_PEOPLE,
    })
}
export const checkPeople = (id) => dispatch => {
    dispatch({
        type: types.CHECK_PEOPLE,
        payload: id
    })
}