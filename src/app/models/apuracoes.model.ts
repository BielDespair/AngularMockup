

export interface Apuracoes {
    nomeEmpresa: string;
    cnpj: string;

    receitaBrutaAnual: string;

    completa: ApuracaoCompleta;
    simRegimeHibrido: SimulacaoRegimeHibrido;
}

export interface ApuracaoCompleta {
    data: Date;
    receita: string;
    aliquota: Number;
    valorDAS: string;
}

export interface SimulacaoRegimeHibrido {
    receita: string;
    aliquotaIBS: Number;
    aliquotaCBS: Number;

    IBS: string;
    CBS: string;
}