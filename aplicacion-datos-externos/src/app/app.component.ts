import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PokeapiService } from './pokeapi.service';
import { IlistadoPokemon } from './interface/IlistadoPokemon';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class pokemon implements OnInit {

  pokemons: IlistadoPokemon={
    count: 0,
    next:'',
    previous: null,
    result: []
  }
  
  constructor(public pokeapiServices: PokeapiService){}

  ngOnInit(): void{
    this.pokeapiServices.getPokemons().subscribe(resultado =>
      this.pokemons = resultado
    )
  }
}
