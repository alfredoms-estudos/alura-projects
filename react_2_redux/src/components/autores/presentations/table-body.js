import { removeAutor } from '../../../actions';
import { useDispatch, useSelector } from '../../../store';

import React from 'react';


export const TableBody = () => {
    const autores = useSelector(state => state.autores);
    const dispatch = useDispatch();

    const linhas = autores.map((autor, index) => {
        return (
            <tr key={autor.id}>
                <td>{autor.nome}</td>
                <td>{autor.livro}</td>
                <td>{autor.preco}</td>
                <td><button className="waves-effect waves-light btn indigo lighten-2" onClick={ () => { dispatch(removeAutor(index)) } }>Remover</button></td>
            </tr>
        );
    });

    return (
        <tbody>
            {linhas}
        </tbody>
    );
}
