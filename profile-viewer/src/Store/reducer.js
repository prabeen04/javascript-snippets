import peoples from './people.json';
import * as types from "./actionTypes";
const users = peoples.People.map((user, i) => ({ ...user, id: i + 1, isSelected: false }))
const initialState = {
    addUserModal: false,
    peoples: users,
    selectedPeople: {},
    isAllSelected: false
}
export default function (state = initialState, action) {
    switch (action.type) {
        case types.HANDLE_ADD_USER_MODAL:
            return { ...state, addUserModal: action.payload }
        case types.SET_SELECTED_PEOPLE:
            return { ...state, selectedPeople: action.payload }
        case types.CHECK_PEOPLE:
            return {
                ...state,
                peoples: state.peoples.map((people, i) => i + 1 === action.payload ? { ...people, isSelected: !people.isSelected } : people)
            }
        case types.CHECK_ALL_PEOPLE:
            return {
                ...state,
                peoples: state.peoples.map((people, i) => state.isAllSelected ? { ...people, isSelected: false } : { ...people, isSelected: true }),
                isAllSelected: !state.isAllSelected
            }
        case types.DELETE_SELECTED_PEOPLE:
            return {
                ...state,
                peoples: state.peoples.filter((people, i) => people.isSelected === true }),
                isAllSelected: !state.isAllSelected
            }
        default:
            return state
    }
    return state;
}