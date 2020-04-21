import React, { useEffect, useState, useRef } from 'react';

import Header from '../header';
import { AutoresService } from '../../services'
import ListaSimples from '../lista-simples';
import { MessageBox } from '../shared/functions';


const Livros = (props) => {
    const [livros, setLivros] = useState([]);
    const mountedRef = useRef(true);
    
    useEffect(() => {
        if (mountedRef.current)
            AutoresService.listaLivros()
                .then((livros) => setLivros(livros))
                .catch((error) => {
                    if (!error.response) {
                        MessageBox.sendMessage('Erro na conexão com a API.', MessageBox.types.ERROR);
                    } else {
                        MessageBox.sendMessage('Erro ao tentar listar Livros.', MessageBox.types.ERROR);
                    }
                });

        return () => mountedRef.current = false;
    });

    return (
        <React.Fragment>
            <Header />
            <h1>Livros</h1>
            <ListaSimples lista={livros.map((object) => object.livro )}></ListaSimples>
        </React.Fragment>
    );
}

export default Livros;