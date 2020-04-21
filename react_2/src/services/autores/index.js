import axios from 'axios';

const AutoresService = {
    listaAutores: () => {
        return axios.get('http://localhost:8000/api/autor')
            .then((response) => response.data.data);
    },
    listaNomes: () => {
        return axios.get('http://localhost:8000/api/autor/nome')
            .then((response) => response.data.data);
    },
    listaLivros: () => {
        return axios.get('http://localhost:8000/api/autor/livro')
            .then((response) => response.data.data);
    },
    criaAutor: (autor) => axios.post('http://localhost:8000/api/autor', autor, { 
        headers: { 'content-type': 'application/json' }
    }).then((response) => response.data.data),
    removeAutor: (id) => axios.delete(`http://localhost:8000/api/autor/${id}`, {
        headers: { 'content-type': 'application/json' }
    })
}

export default AutoresService;