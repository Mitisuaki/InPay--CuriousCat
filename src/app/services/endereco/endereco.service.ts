import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Endereco } from '../../models/endereco/Endereço'

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  // Construtor
  constructor(private http:HttpClient){ }

  //Método para  retornar o endereço
  retornarEndereco(cep:string):Observable<Endereco>{
    return this.http.get<Endereco>(`https://viacep.com.br/ws/${cep}/json/`);
  }
}
