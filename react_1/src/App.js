import React from 'react';

import './App.css';
import 'materialize-css/dist/css/materialize.min.css';

import Autores from './components/Autores/Autores';
import Formulario from './components/Formulario/Formulario';
import Header from './components/Header/Header';

const lista = [
  {
    nome: 'Paulo',
    livro: 'React',
    preco: '1000'
  },
  {
    nome: 'Daniel',
    livro: 'Java',
    preco: '99'
  },
  {
    nome: 'Marcos',
    livro: 'Design',
    preco: '150'
  }
  ,  {
    nome: 'Bruno',
    livro: 'DevOps',
    preco: '100'
  }
];

class App extends React.Component {
  removeAutor = (id) => {
    const { lista } = this.state;
    
    this.setState(
      {
        lista: lista.filter((autor, index) => {
          return index!==id;
        }),
      }
    );
  }

  adicionaAutor = (autor) => {
    this.setState({
      lista: [...this.state.lista, autor],
    });
  }

  state = { lista };

  render () {
    return (
      <React.Fragment>
        <Header />
        <div className="container mb-10">
          <Autores lista={ this.state.lista } removeAutor={ this.removeAutor }/>
          <Formulario adicionaAutor={this.adicionaAutor}/>
        </div>
      </React.Fragment>
    );
  }
  
}

export default App;
