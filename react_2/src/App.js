import React from 'react';
import 'materialize-css/dist/css/materialize.min.css';

import './App.css';
import Autores from './components/autores';
import Formulario from './components/formulario';
import Header from './components/header';
import { MessageBox } from './components/shared/functions';

import { AutoresService } from './services';

class App extends React.Component {
  state = { lista: [] };

  componentDidMount() {
    AutoresService
      .listaAutores()
      .then((autores) => {
        this.setState({ lista: autores });
      })
      .catch((error) => {
        if (error.response) {
          MessageBox.sendMessage('Erro ao tentar listar Autor.', MessageBox.types.ERROR);
        }
      }
    );
  }

  removeAutor = (id) => AutoresService.removeAutor(id)
    .then((result) => {
      const { lista } = this.state;
      return this.setState({ 
        lista: lista.filter((autor) => {
          return autor.id !== id;
        })
      });
    })
    .catch((error) => {
      if (error.response) {
        MessageBox.sendMessage('Erro ao tentar remover Autor.', MessageBox.types.ERROR);
      }
    });
    
  adicionaAutor = (autor) => AutoresService.criaAutor(JSON.stringify(autor))
    .then((autorCadastrado) => this.setState({
        lista: [...this.state.lista, autorCadastrado],
      }),
    );
  
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
