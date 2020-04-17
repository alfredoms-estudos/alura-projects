import { RETORNA_AUTORES, REMOVE_AUTOR, ADICIONA_AUTOR, CARREGA_LISTA_AUTORES } from '../actions/autoresActions';

export const initialState = [];
  
export function autoresReducer(state = initialState, action) {
    switch (action.type) {
        case CARREGA_LISTA_AUTORES:
            action.data.forEach((autor, index) => autor.id = index);
            return action.data;
        case RETORNA_AUTORES:
            return state;
        case ADICIONA_AUTOR:
            return [
                ...state,
                { ...action.data, id: state.length }
            ];
        case REMOVE_AUTOR:
            return state.filter((autor) => autor.id !== action.data);
        default:
            return state
    }
}