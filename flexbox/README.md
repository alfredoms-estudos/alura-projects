# Anotações - Curso Flexbox

- `display: flex`: adiciona o display do tipo `flex`, onde os elementos filhos são dispostos um do lado do outro;

- `justify-content: space-between`: em conjunto com o `display: flex`, justifica os elementos, colocando o espaço restante ao centro:

```css
    .classe {
        display: flex;
        justify-content: space-between;
    }
```

- `align-items: center`: para justificar todo o conteúdo verticalmente ao centro, também podemos usar, em conjunto com `display: flex`, `align-items: center`:

```css
    .classe {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
```

- `justify-content: space-around`: para organizar automaticamente o espaço entre os elementos filhos, pode-se usar também `justify-content: space-around`:

```css
    .classe {
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
```

- `flex-direction`: podemos usar a propriedade `flex-direction` para definir qual a direção dos alinhamentos do `flex`. Assim, usando `column` com essa propriedade, o alinhamento será vertical, e não horizontal, que é o padrão:

```css
    .classe {
        display: flex;
        flex-direction: column;
    }
```

- `flex-wrap`: usando a propriedade `flex-direction` com `column`, pode surgir a necessidade de quebra das colunas a partir de um determinado tamanho. Para isso, podemos usar a propriedade `flex-wrap` com o valor `wrap`: 

```css
    .classe {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        height: 250px;
    }
```

- `flex-flow`: podemos juntar as duas propriedades anteriores (`flex-direction` e `flex-wrap`) em uma única propriedade com `flex-flow`:

```css
    .classe {
        display: flex;
        /* 
        flex-direction: column;
        flex-wrap: wrap; 
        */
        flex-flow: column wrap;
        height: 250px;
    }
```

- Outras possibilidades de `justify-content`: 
    * `flex-end` - coloca todo espaço à esquerda, jogando o conteúdo para direita;
    * `flex-start (padrão)` - coloca todo espaço à direita, jogando o conteúdo para esquerda;
    * `center` - coloca todo espaço à esquerda e à direita, jogando o conteúdo para o meio;
    * `space-between` - coloca todo espaço entre os elementos;
    * `space-around` - coloca o espaço em volta dos elementos.