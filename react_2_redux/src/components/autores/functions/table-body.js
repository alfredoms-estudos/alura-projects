import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { removeAutor } from '../../../actions';

const TableBody = (props) => {
    const linhas = props.autores.map((autor, index) => {
        return (
            <tr key={autor.id}>
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

const mapDispatchActions = (dispatch) => {
    return bindActionCreators({ removeAutor }, dispatch);
}

const mapProperties = (state) => ({
    autores: state.autores,
});

export default connect(mapProperties, mapDispatchActions)(TableBody);