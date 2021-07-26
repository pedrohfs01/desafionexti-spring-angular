import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
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
import { InputMaskModule } from "primeng/inputmask";
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { CardModule } from "primeng/card"

import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localePt);

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
    BrowserAnimationsModule,
    CalendarModule,
    AppRoutingModule,
    TabMenuModule,
    CardModule,
    FormsModule,
    InputMaskModule,
    MenuModule,
    HttpClientModule,
    TableModule,
    ToastModule,
    DialogModule,
    ButtonModule,
    DropdownModule,
    InputNumberModule,
    InputTextModule,
    ConfirmDialogModule,
  ],
  providers: [ClienteService, ProdutoService, PedidoService, MessageService, ConfirmationService, { provide: LOCALE_ID, useValue: "pt-BR"}],
  bootstrap: [AppComponent]
})
export class AppModule { }
