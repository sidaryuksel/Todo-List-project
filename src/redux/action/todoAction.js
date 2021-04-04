export const todoConstants = {
    TODOLIST: 'TODO_LIST',
    TODOADD: 'TODO_ADD',
    TODODELETE: 'TODO_DELETE',
    TODOCOMPLETE: 'TODO_COMPLETE',
    TODOSEARCH: 'TODO_SEARCH',
    TODODETAIL: 'TODO_DETAIL',
    TODOUPDATE: 'TODO_UPDATE',
}

export const todoActions = {
    getTodoList,
    addTodoItem,
    deleteTodoItem,
    completeTodoItem,
    searchTodoList,
    todoDetail,
    updateTodoItem,
}

const URL = "http://localhost:4000/todos/";

function getTodoListSuccess(list) {
    return { type: todoConstants.TODOLIST, payload: list }
}

function addTodoItemSuccess(item) {
    return { type: todoConstants.TODOADD, payload: item }
}

function updateTodoItemSuccess(item) {
    return { type: todoConstants.TODOUPDATE, payload: item }
}

function deleteTodoItemSuccess(item) {
    return { type: todoConstants.TODODELETE, payload: item }
}

function completeTodoItemSuccess(item) {
    return { type: todoConstants.TODOCOMPLETE, payload: item }
}

function searchTodoList(todos) {
    return { type: todoConstants.TODOSEARCH, payload: todos }
}

function todoDetail(todoId) {
    return { type: todoConstants.TODODETAIL, payload: todoId}
}

function getTodoList() {
    console.log("getteyim");
    return function (dispatch) {
        return fetch(URL)
            .then(response => response.json())
            .then(result => dispatch(getTodoListSuccess(result)))
            .catch()
    }
}

function addTodoItem(todo) {
    console.log("addtodo: ", todo)
    return function (dispatch) {
        return fetch(URL, {
            method: 'POST',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(todo)
        }).then(response => response.json())
            .then(item => {
                dispatch(addTodoItemSuccess(item));
            })
            .catch(handleError)
    }
}

function updateTodoItem(todoUpdatedItem) {
    console.log("updatetodo: ", todoUpdatedItem)
    debugger;

    return function (dispatch) {
        return fetch(URL + todoUpdatedItem.id, {
            method: 'PUT',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(todoUpdatedItem)
        }).then(response => response.json())
            .then(item => {
                dispatch(updateTodoItemSuccess(item));
                dispatch(getTodoList(item));
            })
            .catch(handleError)
    }
}

function deleteTodoItem(todo) {
    console.log("deletteyim:", todo.id);
    return function (dispatch) {
        return fetch(URL + todo.id, {
            method: 'DELETE',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(todo)
        }).then(response => response.json())
            .then(item => {
                dispatch(deleteTodoItemSuccess(item));
                dispatch(getTodoList());
            })
            .catch(handleError)
    }
}

function completeTodoItem(todo) {
    const todoCompleted = { ...todo, completed: !todo.completed };
    console.log("todoCompleted", todoCompleted);
    console.log("complete: ", todo)
    return function (dispatch) {
        return fetch(URL + todoCompleted.id, {
            method: 'PUT',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(todoCompleted)
        }).then(response => response.json())
            .then(item => {
                dispatch(completeTodoItemSuccess(item));
                dispatch(getTodoList(item));
            })
            .catch(handleError)
    }
}




function handleError(error) {
    console.error(error);
    throw error;
}