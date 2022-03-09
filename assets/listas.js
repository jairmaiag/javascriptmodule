import { Material } from './model/material.js';
import { Velocidade } from './model/velocidade.js';
const velAco1020 = [new Velocidade(1, "Desbaste", 25), new Velocidade(2, "Acabamento", 30), new Velocidade(3, "Roscar e recartilhar", 10), new Velocidade(4, "Desbaste", 200), new Velocidade(3, "Acabamento", 300)];
const velAco1040 = [new Velocidade(1, "Desbaste", 15), new Velocidade(2, "Acabamento", 20), new Velocidade(3, "Roscar e recartilhar", 8), new Velocidade(4, "Desbaste", 120), new Velocidade(3, "Acabamento", 160)];
const velAcoExtraduro = [new Velocidade(1, "Desbaste", 12), new Velocidade(2, "Acabamento", 16), new Velocidade(3, "Roscar e recartilhar", 6), new Velocidade(4, "Desbaste", 40), new Velocidade(3, "Acabamento", 60)];
const velFerroFundidoMaleavel = [new Velocidade(1, "Desbaste", 20), new Velocidade(2, "Acabamento", 25), new Velocidade(3, "Roscar e recartilhar", 8), new Velocidade(4, "Desbaste", 70), new Velocidade(3, "Acabamento", 85)];
const velFerroFundidoGris = [new Velocidade(1, "Desbaste", 15), new Velocidade(2, "Acabamento", 20), new Velocidade(3, "Roscar e recartilhar", 8), new Velocidade(4, "Desbaste", 65), new Velocidade(3, "Acabamento", 95)];
const velFerroFundidoDuro = [new Velocidade(1, "Desbaste", 10), new Velocidade(2, "Acabamento", 15), new Velocidade(3, "Roscar e recartilhar", 6), new Velocidade(4, "Desbaste", 30), new Velocidade(3, "Acabamento", 50)];
const velBronze = [new Velocidade(1, "Desbaste", 30), new Velocidade(2, "Acabamento", 40), new Velocidade(3, "Roscar e recartilhar", 10), new Velocidade(4, "Desbaste", 300), new Velocidade(3, "Acabamento", 380)];
const velLatao = [new Velocidade(1, "Desbaste", 40), new Velocidade(2, "Acabamento", 50), new Velocidade(3, "Roscar e recartilhar", 10), new Velocidade(4, "Desbaste", 350), new Velocidade(3, "Acabamento", 400)];
const velAluminio = [new Velocidade(1, "Desbaste", 60), new Velocidade(2, "Acabamento", 90), new Velocidade(3, "Roscar e recartilhar", 15), new Velocidade(4, "Desbaste", 500), new Velocidade(3, "Acabamento", 700)];
const velFibra = [new Velocidade(1, "Desbaste", 25), new Velocidade(2, "Acabamento", 40), new Velocidade(3, "Roscar e recartilhar", 10), new Velocidade(4, "Desbaste", 120), new Velocidade(3, "Acabamento", 150)];
const listaMateriais = [
    new Material(1, 'Aço 1020', velAco1020),
    new Material(2, 'Aço 1040', velAco1040),
    new Material(3, 'Aço Extraduro', velAcoExtraduro),
    new Material(4, 'Ferro fundido maleável', velFerroFundidoMaleavel),
    new Material(5, 'Ferro fundido duro', velFerroFundidoDuro),
    new Material(6, 'Ferro fundido gris', velFerroFundidoGris),
    new Material(7, 'Bronze',velBronze),
    new Material(8, 'Latão e cobre',velLatao),
    new Material(9, 'Alumínio',velAluminio),
    new Material(10, 'Fibra e ebonite',velFibra)
];
export { listaMateriais };