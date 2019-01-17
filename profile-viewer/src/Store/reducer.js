import peoples from './people.json';
import * as types from "./actionTypes";
const users = peoples.People.map((user, i) => ({...user, id: i + 1 }))
const initialState = {
    addUserModal: false,
    peoples: users,
    selectedPeople: {},
}
export default function (state = initialState, action) {
    switch (action.type) {
        case types.HANDLE_ADD_USER_MODAL:
            return { ...state, addUserModal: action.payload }
        case types.SET_SELECTED_PEOPLE:
            return { ...state, selectedPeople: action.payload }
        default:
            return state
    }
    return state;
}