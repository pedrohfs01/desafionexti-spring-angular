import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenuModule } from 'primeng/menu';
import { ProdutosComponent } from './produtos/produtos.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { ClientesComponent } from './clientes/clientes.component';
import { ClienteService } from './clientes/cliente.service';
import { ProdutoService } from './produtos/produto.service';
import { PedidoService } from './pedidos/pedido.service';

import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ProdutosComponent,
    PedidosComponent,
    ClientesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TabMenuModule,
    MenuModule,
    HttpClientModule,
    TableModule,
    ToastModule,
    DialogModule,
    ButtonModule,
    DropdownModule,
    InputNumberModule,
    InputTextModule,
    ConfirmDialogModule
  ],
  providers: [ClienteService, ProdutoService, PedidoService, MessageService, ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
