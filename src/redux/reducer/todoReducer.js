import { combineReducers } from "redux";
import { todoConstants } from "../action/todoAction";


export const rootReducer = combineReducers({
    todos,
    todoItem,
    search,
    detail,
})

export function todos(state = [], action) {
    let newState;
    switch (action.type) {
        case todoConstants.TODOLIST:
            return action.payload;
        case todoConstants.TODODELETE:
            newState = state.filter(todo => todo.id !== action.payload.id);
            return newState;
        case todoConstants.TODOCOMPLETE:
            return action.payload;
        case todoConstants.TODOSEARCH:
            newState = state.filter(todo => {
                if (action.payload === "") return todo;
                else if (todo.title.toLowerCase().includes(action.payload.toLowerCase())) return todo;
                return "";
            });
            console.log("reducer: ", newState);
            return newState;
        case todoConstants.TODODETAIL:
            newState = state.filter(item => item.id === action.payload)
            return newState;
        default:
            return state;
    }
}
export function todoItem(state = {}, action) {
    switch (action.type) {
        case todoConstants.TODOADD:
            return action.payload;
        default:
            return state;
    }
}

export function search(state = [], action) {
    switch (action.type) {
        case todoConstants.TODOSEARCH:
            return action.payload;
        default:
            return state;
    }
}

export function detail(state = {}, action) {
    switch (action.type) {
        case todoConstants.TODODETAIL:
            return action.payload;
        default:
            return state;
    }
}