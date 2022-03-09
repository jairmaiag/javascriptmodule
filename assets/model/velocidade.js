class Velocidade {
    id;
    nome;
    valor;

    constructor(id, nome, valor) {
        this.id = id;
        this.nome = nome;
        this.valor = valor;
    }
    toString() {
        return `${this.id}-${this.nome}-${this.valor}`;
    }
};

export { Velocidade };