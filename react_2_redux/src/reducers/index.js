import { combineReducers } from 'redux';
import { autoresReducer } from './autoresReducer';

const reducers = combineReducers({
    autores: autoresReducer,
});

export default reducers;