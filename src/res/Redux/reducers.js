import {createStore} from 'redux'

function reducerExample(state=[], action) {
    if (action.type === 'ADD_TEXT') {
        return [ ...state, action.text ];
    }
    return state
}

export const store = createStore(reducerExample,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
);