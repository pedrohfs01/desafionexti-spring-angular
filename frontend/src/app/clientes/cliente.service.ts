import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: 'root'
})
export class ClienteService{

  resourceUrl = environment.urlBase+"clientes";

  constructor(private http: HttpClient){
  }
}
