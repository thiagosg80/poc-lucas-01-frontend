export class InputAnalise {    
    faturamentoPeriodo: number;
    salariosValor: number;
    proLaboreValor: number;
    vendas: number;
    comprasMP: number;
    despesaComFolha: number;
    outrasDespesas: number;
    impostos: number;
    valorMedioCreditoICMS: number;
    valorMedioCreditoPIS: number;
    valorMedioCreditoCOFINS: number;
    lucroApurado: number;

    constructor() {
        this.faturamentoPeriodo = 0;
        this.salariosValor = 0;
        this.proLaboreValor = 0;
        this.vendas = 0;
        this.comprasMP = 0;
        this.despesaComFolha = 0;
        this.outrasDespesas = 0;
        this.impostos = 0;
        this.valorMedioCreditoICMS = 0;
        this.valorMedioCreditoPIS = 0;
        this.valorMedioCreditoCOFINS = 0;
        this.lucroApurado = 0;
    }
}
