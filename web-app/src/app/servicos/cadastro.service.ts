import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import {Cadastro} from '../models/cadastro'

//api
const caminho = 'http://localhost:3000/cadastro'

@Injectable({
  providedIn: 'root'
})
export class CadastroService {   
  
  constructor(private httpClient: HttpClient) { }  
  
  //headers
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }

  //get todos
  getTodos() {
    return this.httpClient.get<Array<any>>(caminho)
  }

  // salva um Cadastro
  saveCad(cad: any){
    return this.httpClient.post(caminho, JSON.stringify(cad), this.httpOptions)
  }

// deleta um cadastro
deleteCad(car: Cadastro) {
  return this.httpClient.delete<Cadastro>(caminho + '/' + car.id, this.httpOptions)
  }

}
