import React from 'react';

const TableBody = (props) => {
    const linhas = props.lista.map((autor, index) => {
        return (
            <tr key={index}>
                <td>{autor.nome}</td>
                <td>{autor.livro}</td>
                <td>{autor.preco}</td>
                <td><button className="waves-effect waves-light btn indigo lighten-2" onClick={ () => { props.removeAutor(index) } }>Remover</button></td>
            </tr>
        );
    });

    return (
        <tbody>
            {linhas}
        </tbody>
    );
}

export default TableBody;