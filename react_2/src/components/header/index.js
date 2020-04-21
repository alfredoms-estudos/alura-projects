import React from 'react';

import { CustomLink } from './components';

class Header extends React.Component {

    render() {
        return (
            <nav>
                <div className="nav-wrapper indigo lighten-2">
                    <CustomLink to="/" className="brand-logo">Casa do Código</CustomLink>
                    <ul className="right">
                        <li><CustomLink to="/autores">Autores</CustomLink></li>
                        <li><CustomLink to="/livros">Livros</CustomLink></li>
                        <li><CustomLink to="/sobre">Sobre</CustomLink></li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Header;