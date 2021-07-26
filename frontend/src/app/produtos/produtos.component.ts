import { Component, OnInit, ViewChild } from '@angular/core';
import { MessageService, ConfirmationService } from 'primeng/api';
import { Table } from 'primeng/table';
import { Produto } from './produto.model';
import { ProdutoService } from './produto.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produtos: Produto[] = [];

  isEdit: boolean = false;
  isNew: boolean = false;

  produto: Produto = new Produto();

  mostrarDialogProduto: boolean = false;

  @ViewChild(Table)
  dt: Table;

  constructor(private produtoService: ProdutoService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService) { }

  ngOnInit(): void {
    this.recarregarDatatable();
  }

  getHeader() {
    return this.isEdit ? "Editar produto" : this.isNew ? "Novo produto" : "Visualizar produto";
  }

  fecharDialog() {
    this.mostrarDialogProduto = false;
    this.produto = new Produto();
    this.isEdit = false;
    this.isNew = false;
    this.recarregarDatatable();
  }

  recarregarDatatable(){
    this.produtoService.getAll().subscribe(response => {
      this.produtos = response;
    })
  }

  abrirDialog(numero: number, produto?: Produto) {
    if (numero === 1) {
      this.isNew = true;
    }
    if (numero === 2) {
      this.isEdit = true;
      this.produto = new Produto(produto.id, produto.nome, produto.descricao, produto.preco, produto.quantidade);
    }

    this.mostrarDialogProduto = true;
  }

  save() {
    if (this.verificarCamposObrigatorios()) {
      if (this.isNew) {
        this.produtoService.create(this.produto).subscribe(response => {
          this.messageService.add({severity:'success', summary: 'Sucesso', detail: 'Produto criado com sucesso!', life: 3000});
          this.fecharDialog();
        })
      } else {
        this.produtoService.update(this.produto).subscribe(response => {
          this.messageService.add({severity:'success', summary: 'Sucesso', detail: 'Produto atualizado com sucesso!', life: 3000});
          this.fecharDialog();
        })
      }
    } else {
      this.messageService.add({severity:'error', summary: 'Erro', detail: 'Campos inválidos', life: 3000});
    }
  }
  verificarCamposObrigatorios() {
    if (this.produto.nome === null || this.produto.nome === undefined || this.produto.nome === "") {
      return false;
    } if (this.produto.descricao === null || this.produto.descricao === undefined || this.produto.descricao === "") {
      return false;
    }
    if (this.produto.preco === null || this.produto.preco === undefined || !this.produto.preco) {
      return false;
    }
    if (this.produto.quantidade === null || this.produto.quantidade === undefined || !this.produto.quantidade) {
      return false;
    }
    return true;
  }

  deletarProduto(produto: Produto) {
    this.confirmationService.confirm({
      message: "Você tem certeza que deseja excluir o produto "+produto.nome+"?",
      header: "Confirmar",
      accept: () => {
        if(produto.id){
          this.produtoService.delete(produto.id).subscribe(response =>{
            this.recarregarDatatable();
            this.fecharDialog();
            this.messageService.add({severity:'success', summary: 'Sucesso', detail: 'Produto deletado', life: 3000});
          })
        }else{
          this.messageService.add({severity:'error', summary: 'Erro', detail: 'Selecione um produto válido', life: 3000});
        }
      }
    })
  }

}
