# Anotações - Curso HTML5 & CSS3 (parte 4)

- `section`: define uma seção da página, o que inclui um conjunto de elementos `HTML`. Seu uso melhora a semântica em relação à uma divisão que usa somente elementos `<div>`, pois melhora a identificação das partes que compõem a página.

- Sobre `classes` e `id`: geralmente, quando precisamos de uma estilização, usamos uma `classe` e quando precisamos definir um comportamento, usamos um `id`.

- medidas `em`: `em` é um valor baseado no tamanho de fonte corrente. Assim, se `16px` é a fonte corrente do elemento, `2em` equivale a `32px`. O tamanho corrente é aquele definido no próprio elemento, ou herdado de um contexto anterior (como de um `div` pai).

- `float`: em seu uso mais simples, a propriedade `float` serve para "flutuar" uma imagem ao redor de um texto.

- `clear`: "quebra" a flutuação de conteúdo definida por `float`. Deve ser usado quando se quiser parar de flutuar itens a partir de determinado ponto.

- `Fontes públicas e abertas`: são fontes de uso livre, que podem ser usadas em quaisquer site. Podem ser encontradas em sites agregadores de fontes, como [https://fonts.google.com/](https://fonts.google.com/);

- `Usando um mapa do Google`: no serviço **Google Maps**, há a opção *"Incorporar um mapa"*, a qual disponibiliza um mapa com as coordenadas de um ponto específico.

- `iframe`: especifica um frame "inline" em nossa página. É usado para "embutir" um *documento HTML* dentro do *documento HTML* atual. Mais informações em [https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/iframe](https://developer.mozilla.org/pt-BR/docs/Web/HTML/Element/iframe) e [https://www.w3schools.com/tags/tag_iframe.asp](https://www.w3schools.com/tags/tag_iframe.asp).

-`first-child` e `last-child`: são pseudo-elementos utilizados para alterar o estilo do primeiro e último elementos, respectivamente.

- `nth-child`: pseudo-elemento utilizado para estilizar o elemento de número x em uma sequência. Por exemplo, para estilizar o 4º elemento que aplica uma classe, deve-se utilizar: 

```css
    .item:nth-child(4) {
        font-weight: bold;
    }
```

Também pode-se utilizar um valor que determine um salto de elementos entre a aplicação dos estilos, repetindo a estilização em sequência, utilizando um número seguido de **n**. Assim, para saltar sempre 1 elemento para cada estilo aplicado, deve-se utilizar o seguinte `CSS`:

```css
    .item:nth-child(2n) {
        font-weight: bold;
    }
```

- `linear-gradient()`: cria uma cor gradiente, podendo ser composta de uma sequência de quantas cores o desenvolvedor quiser. Uma composição gradiente de 3 cores no background pode ser feita da seguinte forma:

```css
    .element {
        background: linear-gradient(blue, green, yellow);
    }
```

Também, na primeira propriedade, pode-se colocar a inclinação do gradiente, e um porcentual de dada cor para a composição do gradiente:

```css
    .element {
        background: linear-gradient(45deg, blue 60%, green, yellow);
    }
```

- `circular-gradient()`: também utilizado para a composição de uma cor gradiente, mas de forma circular. Não possui, portanto, uma propriedade para inclinação.

- `first-letter`: pseudo-elemento para estilização da primeira letra de um dado elemento.

- `before` e `after`: pseudo-elementos que são usados para acrescentar conteúdo e formatá-lo antes e depois do elemento onde foi aplicada uma determinada classe. Por exemplo:

```css
    .elemento:before {
        content: "[";
    }

    .elemento:after {
        content: "]";	
    }
```

