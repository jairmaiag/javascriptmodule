import { adicionarElementoAoForm, criarSelect, criarNumber } from './util.js'
import { acaoDiametro, acaoDoSelect } from './acoes/acoes.js';
import { listaMateriais } from './listas.js'

acaoDoSelect();

const numDiametro = criarNumber("diametroIni", 0, null);
const numDiamFim = criarNumber("diametroFim", 0, acaoDiametro);
const material = criarSelect("material", listaMateriais, acaoDoSelect);
adicionarElementoAoForm("calculoVelocidade", "Material:", material.instance,true);
adicionarElementoAoForm("calculoVelocidade", "Diâmetro inicial/final(mm):",  numDiametro.instance);
adicionarElementoAoForm("calculoVelocidade", "/",  numDiamFim.instance,true);
// adicionarElementoAoForm("calculoVelocidade", "/",  numDiametro.instance);
// adicionarElementoAoForm("calculoVelocidade", "Comprimento inicial(mm):", numDiametro.instance,true);
