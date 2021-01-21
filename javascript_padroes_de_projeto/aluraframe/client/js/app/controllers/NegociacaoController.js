class NegociacaoController {
    constructor() {
        const $ = document.querySelector.bind(document);
        
        this._quantidade = $('#quantidade');
        this._data = $('#data');
        this._valor = $('#valor');
    }

    adiciona(event) {
        event.preventDefault();

        const convertedData = new Date(
            ...this._data.value
                .split('-')
                .map((item, index) => index == 1 ? item - 1 : item)
        );


        const negociacao = new Negociacao(
            convertedData,
            this._quantidade.value,
            this._valor.value
        );
        console.log(negociacao);
        this.limpaCampos();

        return negociacao;
    }

    limpaCampos() {
        this._quantidade.value = 1;
        this._valor.value = 0.0;
        this._data.value = 'dd/mm/aaaa';

    }
}