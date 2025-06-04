import { Injectable } from '@angular/core';
import { Apuracoes, ApuracaoCompleta, SimulacaoRegimeHibrido } from '../models/apuracoes.model';

@Injectable({
  providedIn: 'root'
})
export class ApuracoesService {

  constructor() { }
  getAll(): Apuracoes {
    const apuracao: Apuracoes = {
      nomeEmpresa: "Empresa B",
      cnpj: "11.111.111/0001-11",
      receitaBrutaAnual: "R$500.000,00",

      completa: {
        data: new Date("2025-05-30"),
        receita: "R$450.000,00",
        aliquota: 0.06,
        valorDAS: "R$27.000,00"
      },

      simRegimeHibrido: {
        receita: "R$450.000,00",
        aliquotaIBS: 0.035,
        aliquotaCBS: 0.025,
        IBS: "R$15.750,00",
        CBS: "R$11.250,00"
      }
    };

    return apuracao;
  }
}