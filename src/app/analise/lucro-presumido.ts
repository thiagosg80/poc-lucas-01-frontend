import { Presuncao } from "./presuncao";

export class LucroPresumido {
    presuncaoIRPJ: Presuncao;
    presuncaoCSLL: Presuncao;
    percentualDosTributos: number;
    cargaTributariaAnual: number;

    constructor() {
        this.presuncaoIRPJ = new Presuncao;
        this.presuncaoCSLL = new Presuncao;
        this.percentualDosTributos = 0;
        this.cargaTributariaAnual = 0;
    }
}
