import { Velocidade } from './velocidade.js'
class Material {
    id;
    nome;
    velocidades = [];
    constructor(id, nome, velocidades) {
        this.id = id;
        this.nome = nome;
        this.velocidades = velocidades;
    }
    toString() {
        return `${this.id}-${this.nome}-${this.velocidades.toString()}`;
    }
};

export { Material };