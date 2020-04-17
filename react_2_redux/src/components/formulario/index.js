import React from 'react';
import { connect } from 'react-redux';
import M from 'materialize-css';
import { bindActionCreators } from 'redux';

import { adicionaAutor } from '../../actions/autoresActions';
import getErrorMessage from './functions/form-check';

const Formulario = (props) => {

    const [nome, setNome] = React.useState('');
    const [preco, setPreco] = React.useState('');
    const [livro, setLivro] = React.useState('');

    const enviaAutor = () => {
        const validationData = [
            { name: 'Nome', value: nome },
            { name: 'Preço', value: preco},
            { name: 'Livro', value: livro }
        ];
        const errorMessage = getErrorMessage(validationData);
        if (errorMessage === null) {
            props.adicionaAutor({ nome, preco, livro });
            setNome('');
            setPreco('');
            setLivro('');
            M.toast({html: 'Autor cadastrado com sucesso!', classes: 'green', displayLength: 2000});
        } else {
            M.toast({html: errorMessage, classes: 'red', displayLength: 2000});
        }
    }

    return (
        <form>
            <div className="row">
                <div className="input-field col s4">
                    <label className="input-field" htmlFor="nome">Nome</label>
                    <input className="validate" id="nome" type="text" name="nome" value={nome} onChange={ (event) => setNome(event.target.value) }/>
                </div>
                <div className="input-field col s4">
                    <label className="input-field" htmlFor="livro">Livro</label>
                    <input className="validate" id="livro" type="text" name="livro" value={livro} onChange={ (event) => setLivro(event.target.value) }/>
                </div>
                <div className="input-field col s4">
                    <label className="input-field" htmlFor="preco">Preço</label>
                    <input className="validate" id="preco" type="text" name="preco" value={preco} onChange={ (event) => setPreco(event.target.value) }/>
                </div>
            </div>    
            <button className="waves-effect waves-light btn indigo lighten-2" type="button" onClick={ () => enviaAutor() }>Salvar</button>
        </form>
    );
};

const mapDispatchActions = (dispatch) => {
    return bindActionCreators({adicionaAutor}, dispatch);
};

export default connect(null, mapDispatchActions)(Formulario);