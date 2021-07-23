import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ProdutoService{

  resourceUrl = environment.urlBase+"produtos";

  constructor(private http: HttpClient){
  }
}
