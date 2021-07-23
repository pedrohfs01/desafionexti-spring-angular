import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { Produto } from "./produto.model";

@Injectable({
  providedIn: 'root'
})
export class ProdutoService{

  resourceUrl = environment.urlBase+"produtos";

  constructor(private http: HttpClient){
  }

  create(produto: Produto): Observable<Produto>{
    return this.http.post<Produto>(this.resourceUrl, produto);
  }

  update(produto: Produto): Observable<Produto>{
    return this.http.put<Produto>(this.resourceUrl, produto);
  }

  getOne(id: number): Observable<Produto>{
    return this.http.get<Produto>(this.resourceUrl+"/"+id);
  }

  getAll(): Observable<Produto[]>{
    return this.http.get<Produto[]>(this.resourceUrl);
  }

  delete(id: number): Observable<any>{
    return this.http.delete(this.resourceUrl+"/"+id);
  }
}
