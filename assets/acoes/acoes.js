import { listaMateriais } from '../listas.js'
let selecionado = 0;
let valoresTabela = [];
const tabela = document.getElementById('tbVelocidade');
const body = tabela.children[1];
const montarBody = function(){
    let linha = document.createElement("tr");
    linha.setAttribute('class','esquerda');
    valoresTabela = listaMateriais[selecionado].velocidades;
    body.innerHTML = "";
    if (valoresTabela) {
        valoresTabela.forEach(item => {
            let coluna = document.createElement("td");
            coluna.innerText = item.valor;
            linha.append(coluna);
        });
        body.append(linha);
    }
}
const calular = function (valorDiametro) {
    montarBody();
    if (valorDiametro == 0) {
        return [];
    }
    let retorno = [];
    valoresTabela.forEach((velocidade) => {
        retorno.push(Math.trunc((velocidade.valor * 318) / valorDiametro));
    });
    exibirResultados(valorDiametro, retorno);
    return retorno;
}
const exibirResultados = function (valorDiametro, resultados) {
    if (valorDiametro == 0) {
        return;
    }
    let linha = document.createElement("tr");
    linha.setAttribute('class','centralize');
    let coluna = document.createElement("td");
    coluna.setAttribute('colspan', 5);
    coluna.innerText = `Velocidade Torno (RPM) (n = (Vc * 318) / ${valorDiametro})`;
    linha.append(coluna);
    body.append(linha);
    linha = document.createElement("tr");
    linha.setAttribute('class','esquerda');
    resultados.forEach((velocidade) => {
        coluna = document.createElement("td");
        coluna.innerText = velocidade;
        linha.append(coluna);
    });
    body.append(linha);
}
const acaoDiametro = function (event) {
    const valor = event.target.value;
    if (valor == 0) {
        return;
    }
    calular(valor);
};

const acaoDoSelect = function (event) {
    const diametroIni = document.getElementById('diametroIni');
    const diametroFim = document.getElementById('diametroFim');
    let valorD = 0;
    if (event) {
        valorD = diametroFim.value;
        const filhos = event.target.children;
        for (let i = 0; i < filhos.length; i++) {
            if (filhos[i].selected) {
                selecionado = i;
                break;
            }
        }
    }
    calular(valorD);
};

export { acaoDiametro, acaoDoSelect };