import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import thunkMiddleWare from 'redux-thunk';
import { rootReducer } from './todoReducer';

export const store = createStore(
    rootReducer,
    applyMiddleware(
        thunk,
        thunkMiddleWare
    )
)