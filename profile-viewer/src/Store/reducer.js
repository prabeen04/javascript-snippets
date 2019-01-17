import peoples from './people.json';
import * as types from "./actionTypes";
const users = peoples.People.map((user, i) => ({ ...user, id: i + 1, isSelected: false }))
const initialState = {
    addUserModal: false,
    peoples: users,
    noOfPeople: users.length,
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
                peoples: state.peoples.map((people, i) => people.id === action.payload ? { ...people, isSelected: !people.isSelected } : people)
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
                peoples: state.peoples.filter((people, i) => people.isSelected === false),
                isAllSelected: false,
                selectedPeople: {},
            }
        case types.ADD_PEOPLE:
            return { ...state, peoples: [...state.peoples, action.payload], addUserModal: false, noOfPeople: state.noOfPeople+1 }
        default:
            return state
    }
    return state;
}