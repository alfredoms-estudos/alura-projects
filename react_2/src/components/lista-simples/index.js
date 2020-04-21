import React from 'react';

const ListaSimples = (props) => {

    const montaLista = (lista) => lista.map((item, index) => (
            <li key={index} className="collection-item">{item}</li>
        ));

    return (<ol className="collection">{montaLista(props.lista)}</ol>);
}

export default ListaSimples;