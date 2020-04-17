import React from 'react';
import TableHead from './functions/table-head';
import TableBody from './functions/table-body';

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