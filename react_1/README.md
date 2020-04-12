# Anotações - Curso React - Componentes Reutilizáveis

- **React** é uma library que possibilita a componentização de partes da página. Assim, é altamente recomendável criar um componente para cada elemento na página, o qual então pode ser reutilizado;
- Quando o componente declarado é uma **classe** (herdada de **React.Component**), deve-se ter um método obrigatório, o qual é responsável pela renderização do componente: **render()**;
- Em um componente **React**, podemos passar uma variável para um componente, dando um nome para essa varíavel e utilizando o mesmo nome para, no componente para o qual foi passado o valor, recupera-lo a partir de **this.props**:

```javascript
    // valor sendo passado por meio da variável lista
    <Autores lista={ listaAutores }/>


    // valor sendo recebido
    class Autores extends React.Component {
        render() {
            const { lista } = this.props;

            return (
                <table>
                    <TableHead />
                    <TableBody />
                </table>
            );
        }
    }
```

- Relembrando: a função **map**, no **JavaScript**, retorna um determinado valor para cada propriedade dentro de um **array**. Assim, é possível redefinir estruturas para cada elemento em um **array**;
- Em tabelas, o **React** usa a propriedade **key** no elemento **tr** para ter um controle sobre o item que está iterando como identificador único;
- Funções executadas em eventos de elementos no **HTML** precisam estar "empacotadas" em **arrow functions**. Caso contrário, ocorrerá uma tentativa de chamada direta da função, ocasionando um erro;
- O método **setState()** é utilizado para atualizar a propriedade **state** de um componente. Quando isso é feito, a tela é renderizada novamente;
- No caso do **ReactHooks**, e caso se tenha um conjunto de variáveis para serem processadas no componente, o ideal é que cada variável seja setada separadamento usando o método **React.useState()**. Isso ocorre porque, caso seja um objeto, os outros atributos deverão ser passados ao chamar o método de atualização, deixando o processo com uma complexidade maior:

```javascript
    // Errado - da forma abaixo, é necessário se preocupar com preco e nome, por exemplo, caso
    // queira se atualizar apenas livro.
    const [autor, setAutor] = React.useState({nome: '', preco: '', livro: ''});

    // Certo - cada propriedade é atualizada separadamente, evitando uma maior complexidade.
    const [nome, setNome] = React.useState('');
    const [preco, setPreco] = React.useState('');
    const [livro, setLivro] = React.useState('');

```

- Caso seja necessário colocar em mesmo nível mais de um componente **React** na raiz de um método **render()**, pode-se usar um **React.Fragment**:

```javascript
    render () {
        return (
        <React.Fragment>
            <Autores lista={ this.state.lista } removeAutor={ this.removeAutor }/>
            <Formulario adicionaAutor={this.adicionaAutor}/>
        </React.Fragment>
        );
    }
```

