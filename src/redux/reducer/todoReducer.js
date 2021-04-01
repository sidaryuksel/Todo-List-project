import { combineReducers } from "redux";
import { todoConstants } from "../action/todoAction";


export const rootReducer = combineReducers({
    todos,
    todoItem
})

export function todos(state = [], action) {
    let newState;
    switch (action.type){
        case todoConstants.TODOLIST:
            return action.payload;
        case todoConstants.TODODELETE:
            newState = state.filter(todo => todo.id !== action.payload.id);
            return newState;
        case todoConstants.TODOCOMPLETE:   
            return action.payload;
        default:
            return state;
    }
}
export function todoItem(state = {}, action) {
    switch (action.type){
        case todoConstants.TODOADD:
            return action.payload;
        default:
            return state;
    }
}