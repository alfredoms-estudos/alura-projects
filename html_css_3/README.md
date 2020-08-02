# Anotações - Curso HTML5 & CSS3 (parte 3)

 - `transition`: define o tempo de transição para um determinado estilo. Pode definir a transição de vários estilos, separados por vírgula, como no exemplo abaixo:

 ```css
    .enviar:hover {
        background: darkorange;
        transition: background 0.5s, transform 1s;
        transform: scale(1.02);
    }
 ```

 - `fieldset` e `legend`: usado para agrupar elementos de um formulário web. Seu primeiro elemento pode ser um elemento do tipo `<legend>`, usado como rótulo para o conteúdo agrupado:

  ```html
            <fieldset>
                <legend>Preferência de contato</legend>

                <label>
                    <input type="radio" name="contato" value="email" id="radio-email">Email
                </label>
                
                <label>
                    <input type="radio" name="contato" value="telefone" id="radio-telefone">Telefone
                </label>
                
                <label>
                    <input type="radio" name="contato" value="whatsapp" id="radio-whatsapp">WhatsApp
                </label>
            </fieldset>
  ```

 - `required`: definine um determinado `<input>` em um `<form>` obrigatório, devendo ser preenchido para concluir o envio.
 
 - `alt`: define uma informação alternativa para uma imagem caso o usuário, por algum motivo, não possa visualizá-la. É de grande importância para preservar a acessibilidade da página. 

 - `label`: define um rótulo para um elemento de um `<form>`. Quando o usuário clicar em um determinado `<label>`, o foco será direcionado ao elemento ao qual ele é ligado. Para manter uma ligação com um elemento `<input>`, seu atributo `for` deve ter o mesmo nome que o atributo `id` do elemento ao qual ele é ligado. Uma forma alternativa é envolver o `<input>` dentro das tags do elemento `<label>` - dessa forma, não é necessário o uso do atributo `alt`:

 ```html
    <label for="email">Email</label>
    <input type="email" id="email" class="input-padrao" required placeholder="seuemail@seudominio.com">

    <label>
        <input type="tel" id="telefone" class="input-padrao" required placeholder="(xx) xxxxx-xxxx">
    </label>
```

 - `placeholder`: define uma "dica" para o usuário sobre o elemento. Ela será mostrada no elemento até que o usuário digite um valor. 

 - `transform (scale, rotate, etc)`: aplica uma "transformação" no elemento, como um aumento na escala de visualização (usando `scale()`) ou uma rotação do elemento (usando `rotate()`).

 - `cursor`: define qual cursor a ser mostrado ao usuário quando o ponteiro do mouse é apontado para determinado elemento.

 - `table`, `thead`, `tbody`, `tfoot`, `th`, `tr` e `td`: usamos o elemento `<table>` para criar uma tabela. Dentro de suas tags, usamos `<thead>`, `<tbody>` e `<tfoot>` para definir o conteúdo do "cabeçalho", do "corpo" e do "rodapé" da tabela. Dentro dessas tags de "cabeçalho, corpo e rodapé", usamos `<tr>` para definir uma linha, `<th>` para definir o conteúdo de uma célula de cabeçalho e `<td>` para definir o conteúdo de uma célula normal:

 ```html
    <table>
        <thead>
            <tr>
                <th>Dia</th>
                <th>Horário</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>Segunda</td>
                <td>8h ~ 20h</td>
            </tr>
        </tbody>
    </table>
 ```

 - `colspan`: atributo no elemento `<td>` utilizado para agrupar células.