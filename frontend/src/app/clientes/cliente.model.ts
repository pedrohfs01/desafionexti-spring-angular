export class Cliente{
  id?: number;
  nome?: string;
  cpf?: string;
  dtNasc?: any;

  constructor(id?: number, nome?: string, cpf?: string, dtNasc?: any){
    this.id = id;
    this.nome = nome;
    this.cpf = cpf;
    this.dtNasc = new Date(dtNasc);
  }
}
