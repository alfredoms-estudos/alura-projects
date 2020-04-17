export const CARREGA_LISTA_AUTORES = 'CARREGA_LISTA_AUTORES';
export const ADICIONA_AUTOR = 'ADICIONA_AUTOR';
export const RETORNA_AUTORES = 'RETORNA_AUTORES';
export const REMOVE_AUTOR = 'REMOVE_AUTOR';

export const adicionaAutor = (autor) => ({ type: ADICIONA_AUTOR, data: autor });
export const retornaAutores = () => ({ type: RETORNA_AUTORES });
export const removeAutor = (id) => ({ type: REMOVE_AUTOR, data: id });
export const carregaListaAutores = (autores) => ({ type: CARREGA_LISTA_AUTORES, data: autores });
