import { Atividade } from "./atividade";

export class Identificacao {
    cnpj: string = '';
    nomeFantasia: string = '';
    atividadePrincipal: Atividade = new Atividade;
    atividadesSecundarias: Atividade[] = [];
    dataAbertura: string = '';
}
