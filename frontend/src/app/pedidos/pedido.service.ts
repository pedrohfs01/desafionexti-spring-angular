import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Pedido } from "./pedido.model";

@Injectable({
  providedIn: 'root'
})
export class PedidoService{

  resourceUrl = environment.urlBase+"pedidos";

  constructor(private http: HttpClient){
  }

  create(pedido: Pedido): Observable<Pedido>{
    return this.http.post<Pedido>(this.resourceUrl, pedido);
  }

  update(pedido: Pedido): Observable<Pedido>{
    return this.http.put<Pedido>(this.resourceUrl, pedido);
  }

  getOne(id: number): Observable<Pedido>{
    return this.http.get<Pedido>(this.resourceUrl+"/"+id);
  }

  getAll(): Observable<Pedido[]>{
    return this.http.get<Pedido[]>(this.resourceUrl);
  }

  delete(id: number): Observable<any>{
    return this.http.delete(this.resourceUrl+"/"+id);
  }
}
