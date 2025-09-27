import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IlistadoPokemon } from './interface/IlistadoPokemon';

@Injectable({
  providedIn: 'root'
})
export class PokeapiService {

  private urlBase = 'https://pokeapi.co/api/v2/'

  constructor(private cliente: HttpClient){}

  getPokemons(): Observable<IlistadoPokemon>{
    const resultado = this.cliente.get<IlistadoPokemon>(`${this.urlBase}pokemon`)
    return resultado
  }

  getPokemonDetail(name: string): Observable<any> {
    return this.cliente.get<any>(`${this.urlBase}/pokemon/${name}`);
  }
}
