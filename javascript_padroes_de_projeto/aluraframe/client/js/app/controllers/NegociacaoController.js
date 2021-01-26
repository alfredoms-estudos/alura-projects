class NegociacaoController {
    constructor() {
        const $ = document.querySelector.bind(document);
        
        this._quantidade = $('#quantidade');
        this._data = $('#data');
        this._valor = $('#valor');
    }

    adiciona(event) {
        event.preventDefault();

        const convertedData = DateHelper.textoParaData(this._data.value);
        const negociacao = new Negociacao(
            convertedData,
            this._quantidade.value,
            this._valor.value
        );
        this.limpaCampos();

        console.log(negociacao);
        console.log(DateHelper.dataParaTexto(negociacao.data));

        return negociacao;
    }

    limpaCampos() {
        this._quantidade.value = 1;
        this._valor.value = 0.0;
        this._data.value = 'dd/mm/aaaa';

    }
}