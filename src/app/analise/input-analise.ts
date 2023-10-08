import { Periodo } from "./periodo";

export class InputAnalise {    
    faturamentoPeriodo: number = 0;
    salariosValor: number = 0;
    proLaboreValor: number = 0;
    vendas: number = 0;
    comprasMP: number = 0;
    despesaComFolha: number = 0;
    outrasDespesas: number = 0;
    impostos: number = 0;
    valorMedioCreditoICMS: number = 0;
    valorMedioCreditoPIS: number = 0;
    valorMedioCreditoCOFINS: number = 0;
    lucroApurado: number = 0;
    periodo: Periodo = new Periodo;
}
