import React from 'react';

const Formulario = (props) => {

    const [nome, setNome] = React.useState('');
    const [preco, setPreco] = React.useState('');
    const [livro, setLivro] = React.useState('');

    const enviaAutor = () => {
        props.adicionaAutor({ nome, preco, livro});
        setNome('');
        setPreco('');
        setLivro('');
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

export default Formulario;