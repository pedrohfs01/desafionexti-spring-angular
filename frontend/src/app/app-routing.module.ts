import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientesComponent } from './clientes/clientes.component';
import { PedidosComponent } from './pedidos/pedidos.component';
import { ProdutosComponent } from './produtos/produtos.component';

const routes: Routes = [
  {path: "", component: ClientesComponent},
  {path: "clientes", component: ClientesComponent},
  {path: "produtos", component: ProdutosComponent},
  {path: "pedidos", component: PedidosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
