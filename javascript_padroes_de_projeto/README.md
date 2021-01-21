# Javascript - Conhecendo o Browser e padrões de projeto

## O método Object.freeze()

- O método `Object.freeze()` congela um objeto, impedindo que novas propriedades sejam adicionadas nele. O seu retorno é o objeto passado como parâmetro congelado. No entanto, o "congelamento" é `shallow` (rasa). Assim, somente atributos contidos **_diretamente na raiz_** do objeto serão congelados. Objetos contidos no objeto passado como parâmetro não terão seus atributos congelados.

## Programação defensiva

- Programação defensiva é uma técnica onde não permitimos que os objetos internos de uma classe sejam alterados diretamente. Ao solicitar uma data, por exemplo, retornamos uma nova instância da classe `Date` com as mesmas características. Ao receber novos valores, a classe deve também criar uma nova instância, para impedir modificações externas por meio da referência externa. Exemplo:

```javascript
    class Exemplo {
        constructor(data) {
            this._data = new Date(data.getTime());
        }

        get data() {
            return new Date(this._data.getTime());
        }
    }
```

## var x let

- `let` possui escopo de bloco, enquanto `var` _"vaza"_ de um dado bloco, pois possui escopo de _função_ ou _global_. No exemplo a seguir, `i` seria impresso na tela com o valor `100` - mas, caso tivessemos utilizado `let`, seria mostrado um erro do tipo `ReferenceError`:

```javascript
    for (var i=0; i < 100; i++) {
        // lógica
    }

    console.log(i);
```


## O Modelo MVC

