import { InputAnalise } from "../analise/input-analise";
import { Identificacao } from "../cliente-identificacao/identificacao";

export class ArquivoDado {
    identificacao: Identificacao;
    inputAnalise: InputAnalise;

    constructor() {
        this.identificacao = new Identificacao;
        this.inputAnalise = new InputAnalise;
    }
}
