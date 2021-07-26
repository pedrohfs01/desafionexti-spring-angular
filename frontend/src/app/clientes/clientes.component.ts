import { Component, OnInit, ViewChild } from '@angular/core';
import { Calendar, LocaleSettings } from 'primeng/calendar';
import { Cliente } from './cliente.model';
import { ClienteService } from './cliente.service';
import { formatDate } from '@angular/common';
import { Table } from 'primeng/table';
import { ConfirmationService, MessageService } from 'primeng/api';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[] = [];

  isEdit: boolean = false;
  isView: boolean = false;
  isNew: boolean = false;

  cliente: Cliente = new Cliente();
  clienteSelecionado: Cliente = new Cliente();

  mostrarDialogCliente: boolean = false;

  @ViewChild(Table)
  dt: Table;

  constructor(private clienteService: ClienteService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.recarregarDatatable();
  }


  getHeader() {
    return this.isEdit ? "Editar usuário" : this.isNew ? "Novo Usuário" : "Visualizar Usuário";
  }

  fecharDialog() {
    this.mostrarDialogCliente = false;
    this.cliente = new Cliente();
    this.isEdit = false;
    this.isNew = false;
    this.isView = false;
    this.recarregarDatatable();
  }

  recarregarDatatable(){
    this.clienteService.getAll().subscribe(response => {
      this.clientes = response;
      this.clientes.forEach(item => {
        let dataString: any = item.dtNasc.toString().split("-");
        item.dtNasc = new Date(dataString[0], dataString[1]-1, dataString[2]);
      })
      this.dt.reset();
    })
  }

  abrirDialog(numero: number, cliente?: Cliente) {
    if (numero === 1) {
      this.isNew = true;
    }
    if (numero === 2) {
      this.isEdit = true;
      this.cliente = new Cliente(cliente.id, cliente.nome, cliente.cpf, cliente.dtNasc);
      this.cliente.dtNasc = cliente.dtNasc.toLocaleDateString();
    }
    if (numero === 3) {
      this.isView = true;
      this.cliente = new Cliente(cliente.id, cliente.nome, cliente.cpf, cliente.dtNasc);
      this.cliente.dtNasc = cliente.dtNasc.toLocaleDateString();
    }

    this.mostrarDialogCliente = true;
  }

  save() {
    if (this.verificarCamposObrigatorios()) {
      let dataString: any = this.cliente.dtNasc.toString().split("/");
      this.cliente.dtNasc = new Date(dataString[2], dataString[1] - 1, dataString[0]);
      if (this.isNew) {
        this.clienteService.create(this.cliente).subscribe(response => {
          this.messageService.add({severity:'success', summary: 'Sucesso', detail: 'Cliente criado com sucesso!', life: 3000});
          this.fecharDialog();
        })
      } else {
        this.clienteService.update(this.cliente).subscribe(response => {
          this.messageService.add({severity:'success', summary: 'Sucesso', detail: 'Cliente atualizado com sucesso!', life: 3000});
          this.fecharDialog();
        })
      }
    } else {
      this.messageService.add({severity:'error', summary: 'Erro', detail: 'Campos inválidos', life: 3000});
    }
  }
  verificarCamposObrigatorios() {
    if (this.cliente.nome === null || this.cliente.nome === undefined || this.cliente.nome === "") {
      return false;
    } if (this.cliente.cpf === null || this.cliente.cpf === undefined || this.cliente.cpf === "") {
      return false;
    }
    if (this.cliente.dtNasc === null || this.cliente.dtNasc === undefined || !this.cliente.dtNasc) {
      return false;
    }
    return true;
  }

  deletarCliente(cliente: Cliente) {
    this.confirmationService.confirm({
      message: "Você tem certeza que deseja excluir o cliente "+cliente.nome+"?",
      header: "Confirmar",
      accept: () => {
        if(cliente.id){
          this.clienteService.delete(cliente.id).subscribe(response =>{
            this.recarregarDatatable();
            this.fecharDialog();
            this.messageService.add({severity:'success', summary: 'Sucesso', detail: 'Cliente deletado', life: 3000});
          })
        }else{
          this.messageService.add({severity:'error', summary: 'Erro', detail: 'Selecione um cliente válido', life: 3000});
        }
      }
    })
  }
}
