import { Component, OnInit, ViewChild } from '@angular/core';
import { MessageService, ConfirmationService } from 'primeng/api';
import { Table } from 'primeng/table';
import { Pedido } from './pedido.model';
import { PedidoService } from './pedido.service';

@Component({
  selector: 'app-pedidos',
  templateUrl: './pedidos.component.html',
  styleUrls: ['./pedidos.component.css']
})
export class PedidosComponent implements OnInit {

  pedidos: Pedido[] = [];

  isEdit: boolean = false;
  isView: boolean = false;
  isNew: boolean = false;

  pedido: Pedido = new Pedido();

  mostrarDialogPedido: boolean = false;

  @ViewChild(Table)
  dt: Table;

  constructor(private pedidoService: PedidoService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.recarregarDatatable();
  }

  getHeader() {
    return this.isEdit ? "Editar Pedido" : this.isNew ? "Novo Pedido" : "Visualizar Pedido";
  }

  fecharDialog() {
    this.mostrarDialogPedido = false;
    this.pedido = new Pedido();
    this.isEdit = false;
    this.isNew = false;
    this.isView = false;
    this.recarregarDatatable();
  }

  recarregarDatatable(){
    this.pedidoService.getAll().subscribe(response => {
      this.pedidos = response;
    })
  }

  abrirDialog(numero: number, pedido?: Pedido) {
    if (numero === 1) {
      this.isNew = true;
    }
    if (numero === 2) {
      this.isEdit = true;
      this.pedido = new Pedido(pedido.id, pedido.cliente, pedido.totalCompra, pedido.dataCompra, pedido.produtos);
    }
    if (numero === 3) {
      this.isView = true;
      this.pedido = new Pedido(pedido.id, pedido.cliente, pedido.totalCompra, pedido.dataCompra, pedido.produtos);
    }

    this.mostrarDialogPedido = true;
  }

  save() {
    if (this.verificarCamposObrigatorios()) {
      if (this.isNew) {
        this.pedidoService.create(this.pedido).subscribe(response => {
          this.messageService.add({severity:'success', summary: 'Sucesso', detail: 'Pedido criado com sucesso!', life: 3000});
          this.fecharDialog();
        })
      } else {
        this.pedidoService.update(this.pedido).subscribe(response => {
          this.messageService.add({severity:'success', summary: 'Sucesso', detail: 'Pedido atualizado com sucesso!', life: 3000});
          this.fecharDialog();
        })
      }
    } else {
      this.messageService.add({severity:'error', summary: 'Erro', detail: 'Campos inválidos', life: 3000});
    }
  }
  verificarCamposObrigatorios() {
    if (this.pedido.cliente === null || this.pedido.cliente === undefined || !this.pedido.cliente) {
      return false;
    } if (this.pedido.totalCompra === null || this.pedido.totalCompra === undefined || !this.pedido.totalCompra) {
      return false;
    }if (this.pedido.dataCompra === null || this.pedido.dataCompra === undefined || !this.pedido.dataCompra) {
      return false;
    }if (this.pedido.produtos === null || this.pedido.produtos === undefined || !this.pedido.produtos) {
      return false;
    }
    return true;
  }

  deletarPedido(pedido: Pedido) {
    this.confirmationService.confirm({
      message: "Você tem certeza que deseja excluir o pedido "+pedido.id+"?",
      header: "Confirmar",
      accept: () => {
        if(pedido.id){
          this.pedidoService.delete(pedido.id).subscribe(response =>{
            this.recarregarDatatable();
            this.fecharDialog();
            this.messageService.add({severity:'success', summary: 'Sucesso', detail: 'Pedido deletado', life: 3000});
          })
        }else{
          this.messageService.add({severity:'error', summary: 'Erro', detail: 'Selecione um pedido válido', life: 3000});
        }
      }
    })
  }

}
