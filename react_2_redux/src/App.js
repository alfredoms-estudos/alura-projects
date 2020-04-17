import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import 'materialize-css/dist/css/materialize.min.css';

import './App.css';

import Autores from './components/autores';
import Formulario from './components/formulario';
import Header from './components/header';
import { carregaListaAutores } from '../src/actions/autoresActions';
import listaAutores from './mock-data/lista-autores';

class App extends React.Component {

  componentDidMount() {
    this.props.carregaListaAutores(listaAutores);
  }

  render () {
    return (
      <React.Fragment>
        <Header />
        <div className="container mb-10">
          <Autores/>
          <Formulario/>
        </div>
      </React.Fragment>
    );
  }
  
}

const mapDispatchActions = (dispatch) => {
  return bindActionCreators({ carregaListaAutores }, dispatch);
}

export default connect(null, mapDispatchActions)(App);
