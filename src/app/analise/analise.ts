import { LucroPresumido } from "./lucro-presumido";
import { LucroReal } from "./lucro-real";
import { SimplesNacional } from "./simples-nacional";

export class Analise {
    simplesNacional: SimplesNacional;
    lucroPresumido: LucroPresumido;
    lucroReal: LucroReal;

    constructor() {
        this.simplesNacional = new SimplesNacional;
        this.lucroPresumido = new LucroPresumido;
        this.lucroReal = new LucroReal;
    }
}
