# Anotações - Curso HTML5 & CSS3 (parte 2)

 - Tag **nav**: Podemos usar a tag **nav** para relacionar itens de uma lista, ou mesmo uma imagem, diretamente à navegação da página. Assim, fica mais fácil estilizar uma lista no arquivo **CSS**. exemplo:

 ```css
    nav li {
        display: inline;
    }
```
  
 - O navegador faz com que a página já tenha uma série de configurações por padrão. Para "zerar" isso, é necessário o uso de um arquivo de CSS com a função de **reset de estilos**;

 - A propriedade **position**: Essa propriedade do **CSS** altera o comportamento do posicionamento inicial do elemento. Pode ser:
   - **static:** É o padrão, onde o elemento é sempre posicionado logo depois do elemento anterior, de acordo com o fluxo normal da página, e não sofre as mudanças das propriedades **top**, **left**, **right** e **bottom**;  
   - **relative:** Seu posicionamento segue o fluxo da página, mas pode ser alterado por meio das propriedades **top**, **left**, **right** e **bottom**. Os próximos elementos, entretanto, não seguem seus ajustes de posicionamento, seguindo o posicionamento inicial daquele elemento;
   - **absolute:** Seu posicionamento é, como o nome diz, absoluto em relação ao elemento pai mais próximo **que esteja posicionado (usando a propriedade position)**. Caso não tenha elemento pai direto posicionado, seu posicionamento será relativo ao próprio **body**. Assim, os atributos **top**, **left**, **right** e **bottom** consideram a posição do elemento pai posicionado (ou body) como ponto de partida;

- No elemento **margin**, **auto** faz com que as margens de **cima/baixo** ou **direita/esquerda** tenham sempre o mesmo tamanho. É uma boa escolha para, por exemplo, alinha uma **div** ao centro de um elemento;
- Para o conteúdo principal da página, podemos usar a tag **main**;
- Para alinhar o conteúdo dentro de uma div, pode-se usar a propriedade **text-align**;
- **vertical-align** com o valor **top** alinha todo o conteúdo a partir do topo daquela linha;

> Como boa prática, devemos colocar a ordem no arquivo **CSS** na mesma ordem em que os itens estão dispostos no **HTML**.

- Usar a propriedade **box-sizing** com o valor **border-box** permite que o valor de **padding** e de **border** de um determinado elemento entre "na conta" do seu porcentual total em **width** e **height**; 
- Para o rodapé da página, podemos usar a tag **footer**;
- Para carregar imagens em arquivos **CSS**, podemos usar a função **url()**;
- Para procurar caracteres especiais, podemos usar o site https://unicode-table.com/pt/#control-character;
