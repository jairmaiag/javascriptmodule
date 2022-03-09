class Combobox {
    selecao = document.createElement("select");
    constructor(id, nome) {
        this.selecao.id = id;
        this.selecao.name = nome;
        this._dependecias=[];
    }
    set acao(evento) {
        this.selecao.addEventListener('click', evento, false);
        this.selecao.addEventListener('change', evento, false);
    }
    set lista(valores) {
        if (!valores || valores == null) {
            return;
        }
        valores.forEach(item => {
            let opcao = document.createElement("option");
            opcao.value = `${Number.parseInt(item.id) - 1}`;
            opcao.text = item.nome;
            this.selecao.appendChild(opcao);
        });
    }
    set autofocus(foco) {
        this.selecao.autofocus = foco;
    }
    get instance(){
        return this.selecao;
    }
    set dependecias(listaObjetos){
        if(!listaObjetos || listaObjetos.length ===0){
            return;
        }
        this._dependecias=listaObjetos;
        
    }
    get dependecias(){
        return this._dependecias;
    }
};

class CaixaNumero{
    caixaNumero = document.createElement("input");
    constructor(id, nome) {
        this.caixaNumero.id = id;
        this.caixaNumero.name = nome;
        this.caixaNumero.type = "number";
        this._acao=null;
    }
    set value(valor){
        this.caixaNumero.value = valor;
    }
    get value(){
        return this.caixaNumero.value;
    }
    set acao(evento) {
        this._acao=evento;
        this.caixaNumero.addEventListener('blur', evento);
    }
    get acao(){
        return this._acao;
    }
    get instance(){
        return this.caixaNumero;
    }
}
export { Combobox, CaixaNumero };