import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenuModule } from 'primeng/menu';
import { ProdutosComponent } from './produtos/produtos.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { ClientesComponent } from './clientes/clientes.component';


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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
