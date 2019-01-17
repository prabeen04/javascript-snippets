import peoples from './people.json';
import * as types from "./actionTypes";
const initialState = {
    addUserModal: false,
    peoples: peoples,
    selectedPeople: {},
}
export default function (state = { initialState }, action) {
    switch (action.type) {
        case types.HANDLE_ADD_USER_MODAL:
            console.log(action.payload)
            return { ...state, addUserModal: action.payload }
        default:
            return state
    }
    return state;
}