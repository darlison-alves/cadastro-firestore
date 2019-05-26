import cadastros from './cadastro-reducer'
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
    cadastros
})


export type AppState = ReturnType<typeof rootReducer>
