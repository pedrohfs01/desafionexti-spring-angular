import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Cliente } from "./cliente.model";

@Injectable({
  providedIn: 'root'
})
export class ClienteService{

  resourceUrl = environment.urlBase+"clientes";

  constructor(private http: HttpClient){
  }

  create(cliente: Cliente): Observable<Cliente>{
    return this.http.post<Cliente>(this.resourceUrl, cliente);
  }

  update(cliente: Cliente): Observable<Cliente>{
    return this.http.put<Cliente>(this.resourceUrl, cliente);
  }

  getOne(id: number): Observable<Cliente>{
    return this.http.get<Cliente>(this.resourceUrl+"/"+id);
  }

  getAll(): Observable<Cliente[]>{
    return this.http.get<Cliente[]>(this.resourceUrl);
  }

  delete(id: number): Observable<any>{
    return this.http.delete(this.resourceUrl+"/"+id);
  }
}
