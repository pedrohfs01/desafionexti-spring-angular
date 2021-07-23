import { Cliente } from "../clientes/cliente.model";
import { Produto } from "../produtos/produto.model";

export class Pedido{
  id?: number;
  cliente: Cliente;
  totalCompra: number;
  dataCompra: Date;
  produtos?: Produto[] = [];
}
