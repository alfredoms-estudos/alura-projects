import React from 'react';

export const TableBody = (props) => {
    const linhas = props.lista.map((autor) => {
        return (
            <tr key={autor.id}>
                <td>{autor.nome}</td>
                <td>{autor.livro}</td>
                <td>{autor.preco}</td>
                <td><button className="waves-effect waves-light btn indigo lighten-2" onClick={ () => { props.removeAutor(autor.id) } }>Remover</button></td>
            </tr>
        );
    });

    return (
        <tbody>
            {linhas}
        </tbody>
    );
}
