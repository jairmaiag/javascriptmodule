import { Combobox, CaixaNumero } from './components/comopnentes.js';

function adicionarElementoAoForm(idForm, tituloElemento, elemento, quebra) {
    const form = document.getElementById(idForm);
    const titulo = document.createElement("label");
    titulo.setAttribute("for", elemento.id);
    titulo.innerHTML = tituloElemento;
    titulo.appendChild(elemento);
    form.appendChild(titulo);
    if(quebra){
        form.appendChild(document.createElement("br"));
    }
}
function criarSelect(id, conteudo, evento) {
    if (!conteudo) {
        return null;
    }
    const combo = new Combobox(id, id);
    combo.acao = evento;
    combo.lista = conteudo;
    combo.autofocus = true;
    return combo;
}
function criarNumber(id, conteudo, evento) {
    const caixa = new CaixaNumero(id,id);
    caixa.acao=evento;
    caixa.value=conteudo;
    return caixa;
}
export { adicionarElementoAoForm, criarSelect, criarNumber };