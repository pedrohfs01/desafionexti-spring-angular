import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  items: MenuItem[] = [];

  constructor() { }

  ngOnInit(): void {
    this.items = [
      { label: 'Clientes', icon: 'pi pi-fw pi-bars', routerLink: ['/clientes'] },
      { label: 'Produtos', icon: 'pi pi-fw pi-bars', routerLink: ['/produtos'] },
      { label: 'Pedidos', icon: 'pi pi-fw pi-bars', routerLink: ['/pedidos'] },
    ]
  }

}
