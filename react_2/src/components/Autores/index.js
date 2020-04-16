import React from 'react';
import TableHead from './functions/TableHead';
import TableBody from './functions/TableBody';

class Autores extends React.Component {

    render() {
        const { lista, removeAutor } = this.props;

        return (
            <table className="centered highlight">
                <TableHead />
                <TableBody lista={lista} removeAutor={removeAutor}/>
            </table>
        );
    }
}

export default Autores;