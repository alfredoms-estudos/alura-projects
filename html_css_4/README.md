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

- seletor `>`: os estilos serão aplicados apenas em elementos filhos diretos do elemento indicado antes do sinal de maior, em elementos indicados após o sinal. Por exemplo, para aplicar um estilo em todos os elementos `p` filhos de `main`:

```css
    main > p {
        font-weight: bold;
    }
```

- seletor `+`: os estilos serão aplicados apenas no elemento indicado após o seletor de `+` e que é diretamente precedido por um elemento indicado antes do seletor de `+`, como no exemplo a seguir:

```css
    /* estilo aplicado em elementos <p> diretamente precedidos por <h1> */
    h1 + p {
        font-weight: bold;
    }
```

- seletor `~`: os estilos serão aplicados em todos os elementos indicados após o selector de `~` que vierem após o elemento indicado antes desse seletor, sendo necessário que estejam no mesmo nível (isso é, que sejam irmãos):

```css
    /* o estilo será aplicado em todos os elementos do tipo <p> que sejam precedidos de um elemento <h1> */
    h1 ~ p {
        font-weight: bold;
    }
```

- `not()`: *pseudo-elemento* usado para indicar a aplicação de um estilo em todos os elementos que não incluem um determinado identificador. Exemplo:

```css
    /* aplica o estilo em todos os elementos <p> que não tenham a classe .exemplo */
    p:not(.exemplo) {
        font-weight: bold;
    }
```
- `calc()`: calcula um valor, e pode ser utilizado para medidas mais precisas:

```css
    .classe-exemplo {
        width: calc(50% - 100px);
    }
```

- `opacity`: define a opacidade do elemento - isso é, o quanto ele é *"transparente"*. Deve ser um número entre **0** e **1**, onde **0** é invisível, e **1** é completamente visível;

- `rgba()`: define uma cor por meio do padrão `RGB` e a opacidade dessa cor - no caso, o último parâmetro;

- `box-shadow`: cria uma sombra em um elemento. Entre seus parâmetros, temos:
    - a palavra chave `inset`, que se especificada, define uma sombra interna;
    - <offset-x> e <offset-y> - isso é, a posição inicial **x** e **y** a partir do elemento onde a sombra será desenhada. Caso a sombra seja interna, esses valor devem ser 0, pois nesse caso, a sombra não será deslocável; 
    - <blur-radius> - o tamanho do efeito de desfocagem;
    - <spread-radius> - quanto maior o valor, mais a sombra se expandirá;
    - <color> - a cor da sombra;

    (mais em https://developer.mozilla.org/pt-BR/docs/Web/CSS/box-shadow)

```css
    .elemento{
    	box-shadow: 10px 10px 30px black;
    }
```

- `text-shadow`: adiciona sombra a um texto. Entre seus parâmetros iniciais, temos:
    - <cor> - a cor do elemento;
    - <offset-x> e <offset-y> - a posição inicial **x** e **y** a partir do elemento onde a sombra será desenhada. Caso a sombra seja interna, esses valor devem ser 0, pois nesse caso, a sombra não será deslocável;
    - <blur-radius> - o tamanho do efeito de desfocagem.

    ( mais em https://developer.mozilla.org/pt-BR/docs/Web/CSS/text-shadow)

- meta `viewport`: uma **meta tag** que possibilita setar, por meio da propriedade content, o tamanho de layout da tela:

```html
	<meta name="viewport" content="width=device-width">
```

    (mais em https://developer.mozilla.org/pt-BR/docs/Mozilla/Mobile/Viewport_meta_tag)

- **media queries** (`@media`): consiste em uma função no `CSS` que, a partir de uma validação (chamada de `media type`), caso obtenha um valor verdadeiro, faz um estilização condicional:

```css
    /* aplica um estilo em .elemento quando a tela tiver um tamanho de até 600px */
    @media (max-width: 600px) {
        .elemento {
            width: 10px;
        }
    } 

```

    (mais em https://developer.mozilla.org/pt-BR/docs/Web/Guide/CSS/CSS_Media_queries)

